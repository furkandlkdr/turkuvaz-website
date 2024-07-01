<template>
    <div class="font-sans font-bold bg-base-300 fixed top-0 left-0 right-0 z-20 lg:h-auto h-20 fade-in">
        <div class="navbar justify-between max-lg:w-11/12 mx-auto">
            <div class="gap-x-8" v-if="!isMobile">
                <NuxtLink to="/" class="btn btn-ghost text-xl">
                    <img src="assets/onlylogo.svg" alt="logo">
                </NuxtLink>
                <ul class="text-xl menu menu-horizontal gap-x-8">
                    <!-- Services -->
                    <li>
                        <details class="dropdown">
                            <summary>Hizmetler</summary>
                            <ul class="p-2 text-xl shadow menu dropdown-content z-[1] w-52 bg-base-200 rounded-t-none">
                                <li v-for="service in services" :key="service.id">
                                    <NuxtLink :to="'/services/' + service.id">{{ service.title }}</NuxtLink>
                                </li>
                                <!-- <li><a>Elektrik Pano İmalatı</a></li> -->
                            </ul>
                        </details>
                    </li>
                    <li>
                        <NuxtLink to="/references">Müşterilerimiz</NuxtLink>
                    </li>
                    <li><a @click="scrollToAboutUs">Hakkımızda</a></li>
                    <li><a @click="scrollToContact">İletişim</a></li>
                </ul>
            </div>
            <!-- Mobile menu -->
             <!-- TODO: Add hamburger menu to proper drawer -->
            <div class="w-24" v-else>
                <label class="btn btn-circle swap swap-rotate">
                    <input type="checkbox">
                    <svg class="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32"
                        viewBox="0 0 512 512">
                        <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
                    </svg>
                    <svg class="swap-on fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32"
                        viewBox="0 0 512 512">
                        <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 
                            366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
                    </svg>
                </label>
            </div>
            <NuxtLink to="/" v-if="isMobile" class="btn btn-ghost text-xl">
                <img src="assets/onlylogo.svg" alt="logo">
            </NuxtLink>
            <!-- Language Change -->
            <div>
                <ul class="text-xl menu menu-horizontal">
                    <li>
                        <details>
                            <summary>
                                Dil
                            </summary>
                            <ul class="p-2 bg-base-100 z-10">
                                <li><button>Türkçe</button></li>
                                <li><button>English</button></li>
                            </ul>
                        </details>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import { useMediaQuery } from '@vueuse/core';
import { services } from '~/data/services.js';
export default {
    name: 'Navbar',
    setup() {
        const isMobile = useMediaQuery('(max-width: 1024px)');
        const route = useRoute();
        const router = useRouter();
        const scrollToAboutUs = () => {
            if (route.path === '/') {
                document.getElementById('AboutUs').scrollIntoView({ behavior: 'smooth' });
            } else router.push('/').then(() => 
                setTimeout(() => document.getElementById('AboutUs').scrollIntoView({ behavior: 'smooth' }), 200
            ));
        };
        const scrollToContact = () => {
            if (route.path === '/') {
                document.getElementById('Contact').scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
            } else router.push('/').then(() => 
                setTimeout(() => document.getElementById('Contact').scrollIntoView({ behavior: 'smooth' }), 200
            ));
        };
        return {
            isMobile,
            services,
            scrollToAboutUs,
            scrollToContact
        };
    }
}
</script>

<style scoped>
.fade-in {
  animation: fadeIn 1s ease-in-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

</style>