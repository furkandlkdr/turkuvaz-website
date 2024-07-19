<template>
    <div
        class="font-sans font-bold bg-base-300 fixed top-0 left-0 right-0 z-20 lg:h-auto h-20 border-b-4 border-cyan-600 flex justify-between">
        <div class="navbar justify-between max-lg:w-11/12 mx-auto">
            <div class="gap-x-8" v-show="!isMobile">
                <NuxtLink to="/" class="btn btn-ghost text-xl" @click="scrollToTop">
                    <img src="assets/onlylogo.svg" alt="logo">
                </NuxtLink>
                <ul class="text-xl menu menu-horizontal gap-x-8">
                    <!-- Services -->
                    <li>
                        <details class="dropdown">
                            <summary class="my-link">Hizmetler</summary>
                            <ul
                                class="p-2 text-xl shadow z-[1] w-72 bg-base-300 rounded-t-none rounded-box border border-white/5 shadow-2xl outline outline-1 outline-black/5">
                                <li v-for="service in services" :key="service.id">
                                    <NuxtLink :to="'/services/' + service.id"
                                        :class="{ 'my-link': true, 'active': isActive('/services/' + service.id) }">
                                        {{ service.title }}
                                    </NuxtLink>
                                </li>
                            </ul>
                        </details>
                    </li>
                    <li>
                        <NuxtLink to="/references" :class="{ 'my-link': true, 'active': isActive('/references') }">
                            Müşterilerimiz
                        </NuxtLink>
                    </li>
                    <li>
                        <a @click="scrollToElement('AboutUs')" class="my-link">Hakkımızda</a>
                    </li>
                    <li>
                        <a @click="scrollToElement('Contact')" class="my-link">İletişim</a>
                    </li>
                </ul>
            </div>

            <!-- Mobile menu -->
            <div class="drawer z-[2] w-auto" v-show="isMobile">
                <!-- Hamburger button -->
                <input id="my-drawer" type="checkbox" class="drawer-toggle" ref="drawerReferance" @click="toggleDrawer" />
                <div class="drawer-content">
                    <label for="my-drawer" class="btn btn-circle swap swap-rotate drawer-button">
                        <input type="checkbox">
                        <svg class="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32"
                            viewBox="0 0 512 512">
                            <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
                        </svg>
                        <svg class="swap-on fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32"
                            viewBox="0 0 512 512">
                            <polygon
                                points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
                        </svg>
                    </label>
                </div>
                <div class="drawer-side">
                    <label for="my-drawer" aria-label="close sidebar" class="drawer-overlay"></label>
                    <ul class="menu bg-base-300 text-base-content min-h-full w-80 p-4">
                        <li>
                            <ul class="text-xl menu menu-horizontal gap-x-8">
                                <!-- Services -->
                                <li>
                                    <details class="dropdown dropdown-right" ref="dropdownReferance">
                                        <summary>Hizmetler</summary>
                                        <ul
                                            class="p-2 text-xl shadow menu dropdown-content z-[1] w-72 bg-base-200 rounded-t-none">
                                            <li v-for="service in services" :key="service.id">
                                                <NuxtLink :to="'/services/' + service.id"
                                                    :class="{ 'my-link': true, 'active': isActive('/services/' + service.id) }">
                                                    {{ service.title }}
                                                </NuxtLink>
                                            </li>
                                        </ul>
                                    </details>
                                </li>
                                <li>
                                    <NuxtLink to="/references"
                                        :class="{ 'my-link': true, 'active': isActive('/references') }">
                                        Müşterilerimiz
                                    </NuxtLink>
                                </li>
                                <li>
                                    <a @click="scrollToElement('AboutUs')">Hakkımızda</a>
                                </li>
                                <li>
                                    <a @click="scrollToElement('Contact')">İletişim</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
            <NuxtLink to="/" v-show="isMobile" class="btn btn-ghost text-xl">
                <img src="assets/onlylogo.svg" alt="logo">
            </NuxtLink>

            <!-- Language Change -->
            <div title="Change Language" class="dropdown dropdown-end">
                <div tabindex="0" role="button" class="btn btn-ghost" aria-label="Language">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="h-6 w-6">
                        <path fill-rule="evenodd"
                            d="M11 5a.75.75 0 0 1 .688.452l3.25 7.5a.75.75 0 1 1-1.376.596L12.89 12H9.109l-.67 1.548a.75.75 0 1 1-1.377-.596l3.25-7.5A.75.75 0 0 1 11 5Zm-1.24 5.5h2.48L11 7.636 9.76 10.5ZM5 1a.75.75 0 0 1 .75.75v1.261a25.27 25.27 0 0 1 2.598.211.75.75 0 1 1-.2 1.487c-.22-.03-.44-.056-.662-.08A12.939 12.939 0 0 1 5.92 8.058c.237.304.488.595.752.873a.75.75 0 0 1-1.086 1.035A13.075 13.075 0 0 1 5 9.307a13.068 13.068 0 0 1-2.841 2.546.75.75 0 0 1-.827-1.252A11.566 11.566 0 0 0 4.08 8.057a12.991 12.991 0 0 1-.554-.938.75.75 0 1 1 1.323-.707c.049.09.099.181.15.271.388-.68.708-1.405.952-2.164a23.941 23.941 0 0 0-4.1.19.75.75 0 0 1-.2-1.487c.853-.114 1.72-.185 2.598-.211V1.75A.75.75 0 0 1 5 1Z"
                            clip-rule="evenodd"></path>
                    </svg>
                    <svg width="12px" height="12px" class="hidden h-2 w-2 fill-current opacity-60 sm:inline-block"
                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2048 2048">
                        <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
                    </svg>
                </div>

                <div tabindex="0" class="dropdown-content bg-base-200 text-base-content rounded-box top-px mt-16 w-56 overflow-y-auto 
                    border border-white/5 shadow-2xl outline outline-1 outline-black/5">
                    <ul class="menu menu-sm gap-1">
                        <li>
                            <button class="p-2">
                                <span
                                    class="badge badge-sm badge-outline !pl-1.5 !pr-1 pt-px !text-[.6rem] font-bold tracking-widest opacity-50">
                                    EN
                                </span>
                                <span class="font-[sans-serif]">English</span>
                            </button>
                        </li>
                        <li>
                            <button class="active p-2">
                                <span
                                    class="badge badge-sm badge-outline !pl-1.5 !pr-1 pt-px !text-[.6rem] font-bold tracking-widest opacity-50">
                                    TR
                                </span>
                                <span class="font-[sans-serif]">Türkçe</span>
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { useMediaQuery } from '@vueuse/core';
import { services } from '../data/services.js';

export default {
    name: 'Navbar',
    setup() {
        const isMobile = useMediaQuery('(max-width: 1024px)');
        const route = useRoute();
        const router = useRouter();
        const drawerReferance = ref(null);
        const dropdownReferance = ref(null);

        const scrollToElement = (elementId) => {
            closeDrawer();
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
        };

        const toggleDrawer = () => {
            if (drawerReferance.value.checked == false && dropdownReferance.value.open) {
                dropdownReferance.value.open = false;
            }
        };

        const scrollToTop = () => {
            closeDrawer();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        };

        const closeDrawer = () => {
            if (drawerReferance.value && isMobile.value) {
                drawerReferance.value.checked = false;
            }
        };

        const isActive = (path) => {
            return route.path === path;
        };

        onMounted(() => {
            scrollToTop();
        });

        return {
            isMobile,
            services,
            scrollToElement,
            drawerReferance,
            isActive,
            scrollToTop,
            dropdownReferance,
            toggleDrawer,
        };
    },
};
</script>

<style scoped>
.my-link:hover {
    background-color: oklch(var(--b3));
    color: rgb(8, 145, 178);
    transition: background-color 0.3s ease, color 0.5s ease;
}

.my-link {
    transition: background-color 0.3s ease, color 0.5s ease;
}

.active {
    background-color: #3b82f6;
    color: white;
}
</style>
