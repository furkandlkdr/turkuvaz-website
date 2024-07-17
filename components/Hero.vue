<template>
    <div>
        <div class="bg-slate-200 top-0 start-0 end-0 min-h-screen overflow-hidden text-cyan-600" @mousemove="handleMouseMove">
            <!-- Floating Icons -->
            <div class="floating-container absolute top-0 start-0 end-0 h-full block fade-in-element" v-if="!isMobile">
                <div class="icon h-16" v-for="(icon, index) in icons" :style="`position: absolute; ${screenLocations[index]}`" :key="icon.name">
                    <NuxtImg :src="icon.location" class="h-16" />
                </div>
            </div>
            <div class="mt-8 gap-8">
                <!-- Heading -->
                <h1 class="text-center w-11/12 lg:w-9/12 mx-auto text-7xl lg:font-bold fade-in-element">
                    Endüstriyel Alanda <br /> Yenilikçi ve Profesyonel Çözümler
                </h1>
                <!-- Carousel -->
                <div class="mx-auto w-11/12 lg:w-9/12 fade-in-element">
                    <div class="carousel w-full relative mt-8 lg:mt-16 min-h-52">
                        <div class="carousel-item relative w-full max-lg:w-auto transition-opacity duration-700" :class="carouselOpacity">
                            <NuxtImg :src="`slides/${showenCarousel}`" class="w-full" />
                        </div>
                        <div class="absolute flex justify-between -translate-y-1/2 left-5 right-5 top-1/2">
                            <button @click="changeSlide(-1)" class="btn btn-circle">❮</button>
                            <button @click="changeSlide(1)" class="btn btn-circle">❯</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { useMediaQuery } from '@vueuse/core';

export default {
    name: 'Hero',
    setup() {
        const isMobile = useMediaQuery('(max-width: 1024px)');
        const icons = ref([
            { name: 'analytics', location: 'bg1_icons/analytics.png' },
            { name: 'automation', location: 'bg1_icons/automation.png' },
            { name: 'distributed', location: 'bg1_icons/distributed.png' },
            { name: 'electrical panel', location: 'bg1_icons/electrical-panel.png' },
            { name: 'factory', location: 'bg1_icons/factory.png' },
            { name: 'manufacture', location: 'bg1_icons/manufacture.png' },
            { name: 'racking', location: 'bg1_icons/racking-system.png' },
        ]);

        const screenLocations = ref([
            'top: 80%; right: 40%;',
            'top: 25%; right: 12%;',
            'top: 20%; left: 12%;',
            'top: 35%; left: 3%',
            'top: 85%; left: 4%;',
            'top: 53%; right: 8%;',
            'top: 90%; right: 5%;',
            'top: 35%;',
        ]);

        const slideCounter = ref(0);
        const carouselOpacity = ref('opacity-100');
        const carouselImages = [
            'slide1.jpg',
            'slide2.jpg',
            'slide3.jpg',
            'slide4.jpg',
        ];

        const showenCarousel = computed(() => carouselImages[slideCounter.value]);

        const handleMouseMove = (mouseEvent) => {
            const container = document.querySelector('.floating-container');
            const centerX = container.offsetWidth / 2;
            const centerY = container.offsetHeight / 2;

            const { clientX, clientY } = mouseEvent;
            const angleX = (clientY - centerY) * 0.02;
            const angleY = (clientX - centerX) * -0.02;

            container.style.transform = `rotateX(${angleX}deg) rotateY(${angleY}deg)`;

            document.querySelectorAll('.icon').forEach((move) => {
                move.style.transform = `rotateX(${-angleX}deg) rotateY(${-angleY}deg)`;
            });
        };

        const changeSlide = (direction) => {
            carouselOpacity.value = 'opacity-0';
            setTimeout(() => {
                slideCounter.value = (slideCounter.value + direction + carouselImages.length) % carouselImages.length;
                carouselOpacity.value = 'opacity-100';
            }, 600);
        };

        return {
            isMobile,
            icons,
            screenLocations,
            slideCounter,
            carouselOpacity,
            carouselImages,
            showenCarousel,
            handleMouseMove,
            changeSlide,
        };
    },
};
</script>

<style scoped>
.floating-container {
    width: 100%;
    height: 100vh;
    transform-origin: center;
    transition: transform 0.3s ease;
}
</style>
