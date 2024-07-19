<template>
  <div class="flex flex-col" data-theme="winter">
    <!-- Title -->
    <title>{{ service.systemName + " " + service.title }}</title>

    <!-- Navbar -->
    <div class="min-h-20">
      <Navbar />
    </div>

    <!-- Service Content -->
    <div class="flex flex-col mt-16 mb-8 items-center w-11/12 lg:w-9/12 mx-auto">
      <div class="text-center mb-8">
        <h1 class="text-7xl text-cyan-600 font-bold">{{ service.systemName }}</h1>
        <h3 class="text-4xl font-bold drop-shadow-lg relative z-[3]">{{ service.title }}</h3>
      </div>

      <!-- Image Gallery -->
      <div class="image-gallery rounded-lg w-full flex gap-6 justify-center overflow-hidden">
        <button class="self-center transform bg-gray-800/50 hover:bg-gray-800/80 text-white p-4 rounded-full"
          @click="changeCurrentPhoto(-1)">
          &#10094;
        </button>
        <div class="images-container justify-center w-full flex my-h-fixed">
          <div v-for="(image, index) in service.images" v-show="isImageInFirstFive(index)" :key="index"
            :class="['image-wrapper absolute transition-all duration-500 my-h-fixed', imageClassChoose(index)]">
            <NuxtImg :src="image" class="h-full rounded object-cover" />
          </div>
        </div>
        <button class="self-center transform bg-gray-800/50 hover:bg-gray-800/80 text-white p-4 rounded-full"
          @click="changeCurrentPhoto(1)">
          &#10095;
        </button>
      </div>

      <!-- Descriptions -->
      <div class="text-xl m-6 flex flex-col gap-4">
        <div v-for="desc in service.descriptions">
          <ul v-if="desc.isList">
            <p v-for="item in parseList(desc.text)" class="my-1">{{ item }}</p>
          </ul>
          <div v-else>{{ desc.text }}</div>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <Footer />
  </div>
</template>

<script>
import { services } from '~/data/services.js';

export default {
  name: 'ServicePage',
  setup() {
    const route = useRoute();
    const router = useRouter();
    const serviceId = route.params.id;
    const service = ref(services.find(service => service.id === parseInt(serviceId)));
    const currentIndex = ref(0);
    const interval = ref(null);

    const changeCurrentPhoto = (direction) => {
      currentIndex.value = takeMod(currentIndex.value + direction, service.value.images.length);
    };

    const isImageInFirstFive = (imageIndex) => {
      const distance = service.value.images.length % 5 === 0 ? 2 : 1;
      const mod = service.value.images.length;
      const currentShownIndex = takeMod(currentIndex.value, mod);

      for (let i = -distance; i <= distance; i++) {
        if (imageIndex === takeMod(currentShownIndex + i, mod))
          return true;
      }
      return false;
    };

    const imageClassChoose = (index) => {
      const currentShownIndex = takeMod(currentIndex.value, service.value.images.length);
      const mod = service.value.images.length;

      const classMap = {
        '0': 'opacity-100 z-[1] scale-120',
        '1': 'left-image opacity-40 scale-90',
        '-1': 'right-image opacity-40 scale-90',
        '2': 'lefter-image opacity-10 scale-90',
        '-2': 'righter-image opacity-10 scale-90'
      };

      for (const [offset, className] of Object.entries(classMap)) {
        if (index === takeMod(currentShownIndex + Number(offset), mod)) {
          return className;
        }
      }
      return '';
    };

    if (!service.value) {
      router.push('/');
    }

    const parseList = (list) => {
      list = list.split('*').map(item => item.trim()).filter(item => item !== '');
      return list;
    };

    const takeMod = (num, mod) => {
      return (num + mod) % mod;
    };

    onBeforeMount(() => {
      document.title = "Turkuvaz - " + service.value.systemName + " " + service.value.title;
    });

    onMounted(() => {
      interval.value = setInterval(() => {
        changeCurrentPhoto(1);
      }, 3500);
    });

    onUpdated(() => {
      clearInterval(interval.value);
      interval.value = setInterval(() => {
        changeCurrentPhoto(1);
      }, 3500);
    });

    onUnmounted(() => {
      clearInterval(interval.value);
    });

    useSeoMeta({
      title: service.value.systemName + " " + service.value.title,
      description: service.value.descriptions[0].text,
      ogTitle: service.value.systemName + " " + service.value.title,
      ogDescription: service.value.descriptions[0].text,
      ogUrl: "https://turkuvazinovasyon.com/services/" + service.value.id,
      ogImage: service.value.images[0],
    });

    useHead({
      htmlAttrs: {
        lang: 'tr'
      },
      link: [
        {
          rel: 'icon',
          type: 'image/ico',
          href: 'public/favicon.ico'
        }
      ]
    });

    return {
      service,
      parseList,
      takeMod,
      currentIndex,
      changeCurrentPhoto,
      isImageInFirstFive,
      imageClassChoose
    };
  }
};
</script>

<style scoped>
/* h3 {
  text-shadow: 5px 5px 15px rgba(255, 255, 255, 0.6);
} */

.my-h-fixed {
  height: 35svh;
}

.left-image {
  transform: translateX(-300px) rotateY(-40deg);
}

.right-image {
  transform: translateX(300px) rotateY(40deg);
}

.lefter-image {
  transform: translateX(-400px) rotateY(-50deg);
}

.righter-image {
  transform: translateX(400px) rotateY(50deg);
}

@media (max-width: 1024px) {
  .left-image {
    transform: translateX(-100px) rotateY(-30deg);
  }

  .right-image {
    transform: translateX(100px) rotateY(30deg);
  }

  .lefter-image {
    transform: translateX(-150px) rotateY(-40deg);
  }

  .righter-image {
    transform: translateX(150px) rotateY(40deg);
  }
}
</style>
