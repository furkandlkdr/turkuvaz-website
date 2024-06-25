<template>
    <div class="bg-base-100" data-theme="winter">
        <title>Turkuvaz İnovasyon </title>
        <div class="h-12">
            <Navbar />
        </div>
        <div>
            <!-- Hero Content -->
            <div class=" my-10 gap-8">
                <!-- Heading -->
                <div class="panel text-center mx-auto">
                    <div class="flex-col items-center gap-2">
                        <h1 class="xl:text-7xl md:text-3xl">
                            Endüstriyel Alanda<br class="d-none sm:d-block">
                            Yenilikçi ve Profesyonel Çözümler
                        </h1>
                    </div>
                </div>
                <!-- Carousel -->
                <div class="my-10 mx-auto w-9/12 justify-center items-center">
                    <div class="carousel relative">
                        <div v-for="(image, index) in carousel_images" :key="index"
                            class="carousel-item relative w-full transition-opacity duration-700"
                            :class="carouselOpacity">
                            <NuxtImg :src="`slides/${image}`" class="w-full" />
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

                    <div class="card bg-base-200 shadow-md">
                        <figure class="w-11/12 2xl:ml-4 mt-4 self-center">
                            <img src="~/assets/2Win_opt.svg" class="h-24" alt="2Win" />
                        </figure>
                        <div class="card-body">
                            <h2 class="card-title text-5xl">2Win - SCADA Sistemleri</h2>
                            <p class="text-xl drop-shadow-lg">SCADA işletmeler için, işletme içinde veya dışında
                                herhangi
                                bir yerde
                                kullanılan bütün
                                cihazların
                                izlenmesi ve kontrol edilebilmesini sağlayan vazgeçilemez bir sistemdir. 2Win Scada
                                Yazılımı
                                ile maksimum
                                erişilebilirlik ve hızlı müdahale hedeflenmiştir. Web tabanlı geliştirilen yazılımımız
                                bu
                                hedefe ulaşırken
                                büyük kolaylık sağlamaktadır.</p>
                            <div class="card-actions justify-end">
                                <button class="btn btn-neutral">Detay</button>
                            </div>
                        </div>
                    </div>

                    <div class="card bg-base-200 shadow-md">
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
                                <button class="btn btn-neutral">Detay</button>
                            </div>
                        </div>
                    </div>

                    <div class="card bg-base-200 shadow-md">
                        <figure class="w-11/12 2xl:ml-4 mt-4 self-center">
                            <img src="~/assets/2Bee_opt.svg" class="h-24" alt="2Bee" />
                        </figure>
                        <div class="card-body">
                            <h2 class="card-title text-5xl">2Bee - ASRS</h2>
                            <p class="text-xl drop-shadow-lg">İşletmelerde ürün hacmi ve çeşitliliğinin artması ile
                                kullanılabilir depolama alanlarının daralması doğru
                                ve hızlı erişim ihtiyacı robotik yükleme/boşaltma sistemlerinin kullanılmasını gerekli
                                hale
                                getirmiştir.
                                Bu kapsamda mekanik iş ortağımız GMM ile depolama robotu, plc ve bilgisayar yazılımını
                                kapsayan 2Bee AS/RS
                                çözümleri sunuyoruz.</p>
                            <div class="card-actions justify-end">
                                <button class="btn btn-neutral">Detay</button>
                            </div>
                        </div>
                    </div>

                    <div class="card bg-base-200 shadow-md">
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
                                <button class="btn btn-neutral">Detay</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <!-- Company Slider -->
            <div class="slider h-220 w-3/4 mx-auto relative grid place-items-center overflow-x-hidden">
                <div class="slide-track">
                    <!-- LOGOS -->
                    <div v-for="image in references" :key="image.name"
                        class="slide flex items-center justify-center w-56 h-full">
                        <NuxtImg :src="`images/${image.url}`" />
                    </div>

                    <div v-for="image in references" :key="image.name"
                        class="slide flex items-center justify-center w-56 h-full">
                        <NuxtImg :src="`/images/${image.url}`" />
                    </div>
                </div>
            </div>
        </div>
        <AboutUs id="AboutUs" />
        <Contact id="Contact" />
        <Footer />
    </div>
</template>

<script>
import { ref } from 'vue';
import { references } from '~/data/references.js';
export default {
    name: 'Main Page',
    setup() {

        const carouselOpacity = ref("opacity-100");
        const carousel_images = ref([
            'slide1.jpg',
            'slide2.jpg',
            'slide3.jpg',
            'slide4.jpg'
        ]);

        const prevSlide = () => {
            carouselOpacity.value = "opacity-0";
            setTimeout(() => {
                carousel_images.value.unshift(carousel_images.value.pop())
                carouselOpacity.value = "opacity-100";
            }, 400)
        }
        const nextSlide = () => {
            carouselOpacity.value = "opacity-0";
            setTimeout(() => {
                carousel_images.value.push(carousel_images.value.shift())
                carouselOpacity.value = "opacity-100";
            }, 400)
        }
        return {
            references,
            carouselOpacity,
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

@media (min-width: 1024px) {
    .slider:before {
        left: 0;
        background: linear-gradient(to left, transparent, oklch(var(--b1)));
    }
}

@media (min-width: 1024px) {
    .slider:after {
        right: 0;
        background: linear-gradient(to right, transparent, oklch(var(--b1)));
    }
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
    cursor: pointer;
}
</style>