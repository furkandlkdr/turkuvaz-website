<template>
  <footer class="bg-base-200 text-base-content p-8 grid border-t-4 border-cyan-600">
    <div class="grid md:grid-cols-4 gap-10 lg:gap-1 lg:w-9/12 mx-auto">
      <!-- Company Info -->
      <div class="lg:mr-10 max-lg:text-center">
        <h2 class="font-bold text-lg mb-2">Turkuvaz İnovasyon</h2>
        <p>
          Tecrübeli kadrosuyla ekonomik ve yenilikçi endüstriyel çözümler sunar. Scada, veri toplama yazılımı ve
          otomasyon (elektrik projesi ve plc yazılımı) ihtiyaçlarınız için bize ulaşın.
        </p>
      </div>
      <!-- Menu 1 -->
      <div class="max-lg:text-center">
        <h2 class="font-bold text-lg mb-2">Hizmetlerimiz</h2>
        <ul class="space-y-2">
          <li v-for="service in services" :key="service.id">
            <NuxtLink class="link link-hover" :to="'/services/' + service.id">{{ service.title }}</NuxtLink>
          </li>
        </ul>
      </div>
      <!-- Menu 2 -->
      <div class="max-lg:text-center">
        <h2 class="font-bold text-lg mb-2">Bağlantılar</h2>
        <ul class="space-y-2">
          <li>
            <NuxtLink to="/" class="link link-hover">Anasayfa</NuxtLink>
          </li>
          <li><a @click="scrollToElement('AboutUs')" class="link link-hover">Hakkımızda</a></li>
          <li><a @click="scrollToElement('Contact')" class="link link-hover">İletişim</a></li>
          <li>
            <NuxtLink class="link link-hover" to="/references">Müşterilerimiz</NuxtLink>
          </li>
        </ul>
      </div>
      <!-- Contact Info -->
      <div class="max-lg:text-center items-center flex-col">
        <h2 class="font-bold text-lg mb-2">İletişim</h2>
        <ul class="space-y-2">
          <li class="flex max-lg:justify-center">
            <a href="https://maps.app.goo.gl/1pV2a5bvqrzeWCcg9" class="link link-hover">
              <div class="flex max-lg:justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="mr-1 w-4" viewBox="0 0 320 512">
                  <path
                    d="M16 144a144 144 0 1 1 288 0A144 144 0 1 1 16 144zM160 80c8.8 0 16-7.2 16-16s-7.2-16-16-16c-53 0-96 43-96 96c0 8.8 7.2 16 16 16s16-7.2 16-16c0-35.3 28.7-64 64-64zM128 480V317.1c10.4 1.9 21.1 2.9 32 2.9s21.6-1 32-2.9V480c0 17.7-14.3 32-32 32s-32-14.3-32-32z" />
                </svg>
                Adres: Erciyes Teknopark 5.Bina Kat: 1
              </div>
              No: 67-4/66 PK: 38030 Melikgazi KAYSERİ / TÜRKİYE
            </a>
          </li>
          <li class="link link-hover flex max-lg:justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="mr-1 w-5" viewBox="0 0 512 512">
              <path
                d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" />
            </svg>
            <a href="tel:+903523115567">T: +90 352 311 55 67</a>
          </li>
          <li class="flex max-lg:justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="mr-1 min-w-5 h-5" viewBox="0 0 512 512">
              <path
                d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z" />
            </svg>
            <a class="link link-hover" href="mailto:info@turkuvazinovasyon.com">E: info@turkuvazinovasyon.com</a>
          </li>
        </ul>
        <!-- Logos -->
        <div class="flex mt-2 gap-6 max-lg:justify-center h-8 w-full">
          <!-- FontAwesome Facebook Logo -->
          <svg xmlns="http://www.w3.org/2000/svg" @click="routeToSite(1)" viewBox="0 0 448 512" class="ico-hover">
            <path
              d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64h98.2V334.2H109.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H255V480H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z" />
          </svg>
          <!-- FontAwesome LinkedIn Logo -->
          <svg xmlns="http://www.w3.org/2000/svg" @click="routeToSite(2)" viewBox="0 0 448 512" class="ico-hover">
            <path
              d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
          </svg>
          <!-- FontAwesome Twitter Logo -->
          <svg xmlns="http://www.w3.org/2000/svg" @click="routeToSite(3)" viewBox="0 0 512 512" class="ico-hover">
            <path
              d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
          </svg>
          <!-- FontAwesome Instagram Logo -->
          <svg xmlns="http://www.w3.org/2000/svg" @click="routeToSite(4)" viewBox="0 0 448 512" class="ico-hover">
            <path
              d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
          </svg>
        </div>
      </div>
    </div>
    <!-- Copyright Section -->
    <div class="text-center mt-10 underline">
      <p>&copy; 2011-{{ DateTime }} Turkuvaz İnovasyon A.Ş. Tüm Hakları Saklıdır.</p>
    </div>
  </footer>
</template>

<script>
import { services } from '~/data/services'
export default {
  name: 'Footer',
  setup() {
    const route = useRoute();
    const router = useRouter();

    const scrollToElement = (elementId) => {
      const scrollDecraser = 100;
      if (route.path === '/') {
        const el = document.getElementById(elementId);
        if (el) {
          const scrollPosition = el.offsetTop - scrollDecraser;
          window.scrollTo({ top: scrollPosition, behavior: 'smooth' });
        }
      } else {
        router.push('/').then(() => {
          setTimeout(() => {
            const el = document.getElementById(elementId);
            if (el) {
              const scrollPosition = el.offsetTop - scrollDecraser;
              window.scrollTo({ top: scrollPosition, behavior: 'smooth' });
            }
          }, 200);
        });
      }
    }
    const routeToSite = (routeIndex) => {
      switch (routeIndex) {
        case 1:
          window.open('https://www.facebook.com/share/dy6jPdN6TJ85jf5p/?mibextid=qi2Omg', '_blank');
          break;
        case 2:
          window.open('https://www.linkedin.com/company/turkuvazinovasyon/', '_blank');
          break;
        case 3:
          window.open('https://x.com/turkuvaz_inv', '_blank');
          break;
        case 4:
          window.open('https://www.instagram.com/turkuvazinovasyon/', '_blank');
          break;
        default:
          break;
      }
    }

    return {
      scrollToElement,
      DateTime: new Date().getFullYear(),
      services,
      routeToSite,
    }
  }
}
</script>

<style scoped>
.ico-hover:hover {
  scale: 1.25;
  transition: scale 0.1s ease-in-out;
  cursor: pointer;
}

.ico-hover {
  transition: scale 0.1s ease-in-out;
  border-radius: 7%;
}
</style>