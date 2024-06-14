<template>
    <div class="navbar font-sans font-bold bg-base-200 justify-between fixed top-0 left-0 right-0 z-20 lg:h-auto h-20">
        <div class="gap-x-8">
            <a class="btn btn-ghost text-xl">
                <img src="assets/onlylogo.svg" alt="logo">
            </a>
            <ul class="text-xl menu menu-horizontal gap-x-8">
                <!-- Services -->
                <li>
                    <details class="dropdown">
                        <summary>Hizmetler</summary>
                        <ul class="p-2 shadow menu dropdown-content z-[1] w-52 bg-base-200 rounded-t-none">
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
export default {
    name: 'Navbar'
}
</script>

<style scoped></style>