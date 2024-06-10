<template>
    <title>Turkuvaz İnovasyon</title>
    <Navbar />
    <div id="container">
        <!-- Hero Content -->
        <div class="my-10 gap-8">
            <!-- Heading -->
            <div class="panel text-center mx-auto">
                <div class="flex-col items-center gap-2 text-white">
                    <h1 class="xl:text-7xl md:text-3xl">
                        Endüstriyel Alanda<br class="d-none sm:d-block">
                        Yenilikçi ve Profesyonel Çözümler
                    </h1>
                </div>
            </div>
            <!-- Carousel -->
            <!-- <div class="my-10 mx-auto w-9/12 justify-center items-center">
                <div class="carousel">
                    <div id="slide1" class="carousel-item relative w-full">
                        <img src="~/assets/slide1.jpg" class="w-full" />
                        <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide4" class="btn btn-circle">❮</a>
                            <a href="#slide2" class="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide2" class="carousel-item relative w-full">
                        <img src="~/assets/slide2.jpg" class="w-full" />
                        <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" class="btn btn-circle">❮</a>
                            <a href="#slide3" class="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide3" class="carousel-item relative w-full">
                        <img src="~/assets/slide3.jpg" class="w-full" />
                        <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide2" class="btn btn-circle">❮</a>
                            <a href="#slide4" class="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide4" class="carousel-item relative w-full">
                        <img src="~/assets/slide4.jpg" class="w-full" />
                        <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide3" class="btn btn-circle">❮</a>
                            <a href="#slide1" class="btn btn-circle">❯</a>
                        </div>
                    </div>
                </div>
            </div> -->
            <div class="my-10 mx-auto w-9/12 justify-center items-center">
                <div class="carousel relative">
                    <div v-for="(image, index) in carousel_images" :key="index"
                        class="carousel-item relative w-full transition-opacity duration-700"
                        :class="{ 'opacity-100': index === currentIndex, 'opacity-0': index !== currentIndex }">
                        <NuxtImg :src="`images/slides/${image}`" class="w-full" />
                    </div>
                    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <button @click="prevSlide" class="btn btn-circle">❮</button>
                        <button @click="nextSlide" class="btn btn-circle">❯</button>
                    </div>
                </div>
            </div>
        </div>
        <!-- Cardbox -->
        <div class="w-9/12 mt-10 mx-auto justify-center items-center">
            <div id="card-box" class="grid grid-cols-1 lg:grid-cols-2 gap-8">

                <div class="card bg-slate-800 shadow-xl">
                    <figure class="w-11/12 2xl:ml-4 mt-4 self-center">
                        <img src="~/assets/2Win_opt.svg" class="h-24" alt="2Win" />
                    </figure>
                    <div class="card-body">
                        <h2 class="card-title text-5xl">2Win - SCADA Sistemleri</h2>
                        <p class="text-xl drop-shadow-lg">SCADA işletmeler için, işletme içinde veya dışında herhangi
                            bir yerde
                            kullanılan bütün
                            cihazların
                            izlenmesi ve kontrol edilebilmesini sağlayan vazgeçilemez bir sistemdir. 2Win Scada Yazılımı
                            ile maksimum
                            erişilebilirlik ve hızlı müdahale hedeflenmiştir. Web tabanlı geliştirilen yazılımımız bu
                            hedefe ulaşırken
                            büyük kolaylık sağlamaktadır.</p>
                        <div class="card-actions justify-end">
                            <button class="btn">Detay</button>
                        </div>
                    </div>
                </div>

                <div class="card bg-slate-800 shadow-xl">
                    <figure class="w-11/12 2xl:ml-4 mt-4 self-center">
                        <img src="~/assets/2Mes_opt.svg" class="h-24" alt="2Mes" />
                    </figure>
                    <div class="card-body">
                        <h2 class="card-title text-5xl">2Mes- Veri Toplama Sistemi</h2>
                        <p class="text-xl drop-shadow-lg">Günümüz rekabet koşullarında kaliteden ödün vermeden
                            maliyetlerin
                            düşürülmesi işletmeler
                            için hayati önem
                            taşımaktadır. 2Das Veri Toplama Yazılımı ve Sistemlerimiz(İhtiyaç duyulan otomasyon
                            sistemleri ile
                            birlikte) gerçek zamanlı üretim yönetimini mümkün kılmaktadır.</p>
                        <div class="card-actions justify-end">
                            <button class="btn">Detay</button>
                        </div>
                    </div>
                </div>

                <div class="card bg-slate-800 shadow-xl">
                    <figure class="w-11/12 2xl:ml-4 mt-4 self-center">
                        <img src="~/assets/2Bee_opt.svg" class="h-24" alt="2Bee" />
                    </figure>
                    <div class="card-body">
                        <h2 class="card-title text-5xl">2Bee - ASRS</h2>
                        <p class="text-xl drop-shadow-lg">İşletmelerde ürün hacmi ve çeşitliliğinin artması ile
                            kullanılabilir depolama alanlarının daralması doğru
                            ve hızlı erişim ihtiyacı robotik yükleme/boşaltma sistemlerinin kullanılmasını gerekli hale
                            getirmiştir.
                            Bu kapsamda mekanik iş ortağımız GMM ile depolama robotu, plc ve bilgisayar yazılımını
                            kapsayan 2Bee AS/RS
                            çözümleri sunuyoruz.</p>
                        <div class="card-actions justify-end">
                            <button class="btn">Detay</button>
                        </div>
                    </div>
                </div>

                <div class="card bg-slate-800 shadow-xl">
                    <figure class="w-11/12 2xl:ml-4 2xl:h-24 mt-4 self-center">
                        <img src="~/assets/atolye.svg" class="h-24" alt="Atolye" />
                    </figure>
                    <div class="card-body">
                        <h2 class="card-title text-5xl">Elektrik Pano İmalatı</h2>
                        <p class="text-xl drop-shadow-lg"> SCADA otomasyon sistemlerinizin en önemli bileşenlerinden
                            biri olan
                            elektrik panoları,
                            sisteminizin sorunsuz ve güvenli bir şekilde çalışmasını sağlar. Uzman ekibimiz,
                            ihtiyaçlarınız
                            doğrultusunda özel olarak tasarlanmış ve üretilmiş elektrik panoları sunarak, otomasyon
                            sisteminizin en
                            yüksek performansı vermesini garanti eder.</p>
                        <div class="card-actions justify-end">
                            <button class="btn">Detay</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        <!-- Company Slider -->
        <div class="slider h-220 w-3/4 mx-auto relative grid place-items-center overflow-x-hidden">
            <div class="slide-track">
                <!-- LOGOS -->
                <div v-for="image in images" :key="image.name"
                    class="slide flex items-center justify-center w-56 h-full">
                    <NuxtImg :src="`images/${image.url}`" />
                </div>

                <div v-for="image in images" :key="image.name"
                    class="slide flex items-center justify-center w-56 h-full">
                    <NuxtImg :src="`/images/${image.url}`" />
                </div>
            </div>
        </div>
    </div>
    <Footer />
</template>

<script>
import { ref } from 'vue';
export default {
    name: 'Main Page',
    setup() {
        const images = ref([
            { name: 'altinay', url: 'altinay.png' },
            { name: 'anka', url: 'anka.png' },
            { name: 'arcelik', url: 'arcelik.png' },
            { name: 'argea', url: 'argea.png' },
            { name: 'bellona', url: 'bellona.png' },
            { name: 'boyteks', url: 'boyteks.png' },
            { name: 'calik_denim', url: 'calik_denim.png' },
            { name: 'dogtas', url: 'dogtas.png' },
            { name: 'form_sunger', url: 'form_sunger.png' },
            { name: 'gelal', url: 'gelal.png' },
            { name: 'guven_muhendislik_makina', url: 'guven_muhendislik_makina.png' },
            { name: 'istikbal', url: 'istikbal.png' },
            { name: 'kaski', url: 'kaski.png' },
            { name: 'kayseri_osb', url: 'kayseri_osb.png' },
            { name: 'kayseri_ulasim', url: 'kayseri_ulasim.png' },
            { name: 'kelebek', url: 'kelebek.png' },
            { name: 'lineer_makina', url: 'lineer_makina.png' },
            { name: 'melikgazi_belediyesi', url: 'melikgazi_belediyesi.png' },
            { name: 'mesa', url: 'mesa.png' },
            { name: 'mondi', url: 'mondi.png' },
            { name: 'nks_kablo', url: 'nks_kablo.png' },
            { name: 'nurol_teknoloji', url: 'nurol_teknoloji.png' },
            { name: 'orta_anadolu', url: 'orta_anadolu.png' },
            { name: 'ravago', url: 'ravago.png' },
            { name: 'simfer', url: 'simfer.png' },
            { name: 'sirikcioglu', url: 'sirikcioglu.png' },
            { name: 'smg_makina', url: 'smg_makina.png' },
            { name: 'tai', url: 'tai.png' },
            { name: 'talas_belediyesi', url: 'talas_belediyesi.svg' },
            { name: 'turkish_technic', url: 'turkish_technic.png' },
            { name: 'vibroblok', url: 'vibroblok.png' },

        ]);
        const currentIndex = ref(0);
        const carousel_images = ref([
            'slide1.jpg',
            'slide2.jpg',
            'slide3.jpg',
            'slide4.jpg'
        ]);

        const prevSlide = () => {
            currentIndex.value =
                currentIndex.value > 0 ? currentIndex.value - 1 : carousel_images.length - 1;
            console.log(currentIndex.value);
        }
        const nextSlide = () => {
            currentIndex.value =
                currentIndex.value < carousel_images.length - 1 ? currentIndex.value + 1 : 0;
            console.log(currentIndex.value);
        }
        return {
            images,
            currentIndex,
            carousel_images,
            prevSlide,
            nextSlide
        }

    }
}

</script>

<style scoped>
* {
    box-sizing: border-box;
}

@keyframes slide {
    from {
        transform: translateX(0);
    }

    to {
        transform: translateX(-50%);
    }
}

.slider:before,
.slider:after {
    position: absolute;
    top: 0;
    width: 250px;
    height: 100%;
    content: "";
    z-index: 1;
}

.slider:before {
    left: 0;
    background: linear-gradient(to left, transparent, #1d232a);
}

.slider:after {
    right: 0;
    background: linear-gradient(to right, transparent, #1d232a);
}

.slider:hover .slide-track {
    animation-play-state: paused;
}

.slide-track {
    display: flex;
    background-color: rgb(255, 255, 255);
    height: 80%;
    animation: 150s slide infinite linear;
}

.slide>img {
    object-fit: fill;
    min-width: 60%;
    max-width: 90%;
    max-height: 95%;
}

.slide>img:hover {
    scale: 1.2;
}
</style>