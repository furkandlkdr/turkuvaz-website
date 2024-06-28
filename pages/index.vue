<template>
    <div class="bg-base-100" data-theme="winter">
        <title>Turkuvaz İnovasyon </title>
        <div class="h-20">
            <Navbar />
        </div>
        <div class="mt-8 gap-8">
            <!-- Heading -->
            <h1 class="text-center w-11/12 lg:w-9/12 mx-auto lg:text-7xl text-4xl max-lg:font-bold">
                Endüstriyel Alanda <br> Yenilikçi ve Profesyonel Çözümler
            </h1>
            <!-- Carousel -->
            <div class="mx-auto w-11/12 lg:w-9/12">
                <div class="carousel relative mt-8 lg:mt-16 min-h-52">
                    <div v-for="(image, index) in carousel_images" :key="index"
                        class="carousel-item relative w-full max-md:w-auto transition-opacity duration-700" :class="carouselOpacity">
                        <NuxtImg :src="`slides/${image}`" class="w-full" />
                    </div>
                    <div class="absolute flex justify-between -translate-y-1/2 left-5 right-5 top-1/2">
                        <button @click="prevSlide" class="btn btn-circle">❮</button>
                        <button @click="nextSlide" class="btn btn-circle">❯</button>
                    </div>
                </div>
            </div>
        </div>
        <!-- Cardbox -->
        <div class="w-11/12 lg:w-9/12 max-lg:text-center justify-center items-center mt-8 mx-auto ">
            <div id="card-box" class="flex flex-col gap-8">
                <div v-for="card in services" :key="card.id"
                    class="flex max-md:flex-col relative rounded-sm bg-base-200 shadow-md p-8">
                    <figure class="max-md:h-24 self-center md:w-1/6">
                        <NuxtImg :src="card.logo" class="max-h-full" :alt="card.title" />
                    </figure>
                    <div class="card-body md:w-5/6">
                        <h2 class="card-title text-5xl">{{ card.systemName + " " + card.title }}</h2>
                        <p class="text-xl drop-shadow-lg">{{ card.descriptions[0].text }}</p>
                        <div class="card-actions justify-end">
                            <NuxtLink class="btn btn-primary btn-outline" :to="'/services/' + card.id">Detay</NuxtLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Company Slider -->
        <div class="slider w-11/12 lg:w-9/12 relative grid place-items-center overflow-x-hidden mx-auto my-8 lg:my-16">
            <div class="slide-track">
                <div v-for="company in references" :key="company.name"
                    class="slide flex items-center justify-center w-56 h-full">
                    <NuxtImg :src="`images/${company.url}`" :title="company.description" />
                </div>
            </div>
        </div>
        <AboutUs class="my-8 lg:my-16" id="AboutUs" />
        <Contact class="my-8 lg:my-16" id="Contact" />
        <Footer />
    </div>
</template>

<script>
import { ref } from 'vue';
import { references } from '~/data/references.js';
import { services } from '~/data/services';
export default {
    name: 'MainPage',
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
            services,
            carouselOpacity,
            carousel_images,
            prevSlide,
            nextSlide,
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

@media (min-width: 1024px) {

    .slider:before,
    .slider:after {
        width: 250px !important;
    }
}

.slider:before,
.slider:after {
    position: absolute;
    top: 0;
    width: 20px;
    height: 100%;
    content: "";
    z-index: 1;
}

.slider:before {
    left: 0;
    background: linear-gradient(to left, transparent, oklch(var(--b1)));
}

.slider:after {
    right: 0;
    background: linear-gradient(to right, transparent, oklch(var(--b1)));
}

.slider:hover .slide-track {
    animation-play-state: paused !important;
}

@media (min-width: 1024px) {
    .slide-track {
        animation: 150s slide infinite linear !important;
    }
}

.slide-track {
    display: flex;
    background-color: #fff;
    height: 80%;
    animation: 75s slide infinite linear;
}

.slide>img {
    object-fit: fill;
    min-width: 60%;
    max-width: 90%;
    max-height: 95%;
}

.slide>img:hover {
    transform: scale(1.2);
    cursor: pointer;
}
</style>