<template>
    <div class="navbar font-sans font-bold bg-base-200 justify-between fixed top-0 left-0 right-0 z-20 lg:h-auto h-20">
        <div class="gap-x-8" v-if="!isMobile">
            <a class="btn btn-ghost text-xl">
                <img src="assets/onlylogo.svg" alt="logo">
            </a>
            <ul class="text-xl menu menu-horizontal gap-x-8">
                <!-- Services -->
                <li>
                    <details class="dropdown">
                        <summary>Hizmetler</summary>
                        <ul class="p-2 text-xl shadow menu dropdown-content z-[1] w-52 bg-base-200 rounded-t-none">
                            <li><a>AS/RS Sistemleri</a></li>
                            <li><a>Endüstriyel Otomasyon</a></li>
                            <li><a>SCADA Sistemleri</a></li>
                            <li><a>Veri Toplama Sistemleri</a></li>
                            <li><a>Elektrik Pano İmalatı</a></li>
                        </ul>
                    </details>
                </li>
                <li><a>Müşterilerimiz</a></li>
                <li><a>Hakkımızda</a></li>
                <li><a>İletişim</a></li>
            </ul>
        </div>
        <!-- Mobile menu -->
        <div class="flex" v-else>
            <label class="flex-start btn btn-circle swap swap-rotate">
                <input type="checkbox">
                <svg class="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32"
                    viewBox="0 0 512 512">
                    <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
                </svg>
                <svg class="swap-on fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32"
                    viewBox="0 0 512 512">
                    <polygon
                        points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 
                        366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
                </svg>
            </label>
        </div>
        <!-- Language Change -->
        <div class="mx-8">
            <ul class="text-xl menu menu-horizontal px-1 gap-x-4">
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
</template>

<script>
import { useMediaQuery } from '@vueuse/core';
export default {
    name: 'Navbar',
    setup() {
        const isMobile = useMediaQuery('(max-width: 768px)');
        return {
            isMobile
        };
    }
}
</script>

<style scoped></style>