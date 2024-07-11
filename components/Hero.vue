<template>
    <div id="" class="bg-primary top-0 start-0 end-0 min-h-screen overflow-hidden text-slate-100"
        @mousemove="handleMouseMove">
        <!-- Floating Icons -->
        <div class="floating-container absolute top-0 start-0 end-0 h-full hidden lg:block fade-in-element">
            <div class="icon h-16" v-for="(icon, index) in icons"
                :style="`position: absolute; ${screenLocations[index]}`" :key="icon.name" :data-value="icon.dataValue">
                <NuxtImg :src="icon.location" class="h-16" />
            </div>
        </div>
        <div class="mt-8 gap-8">
            <!-- Heading -->
            <h1 class="text-center w-11/12 lg:w-9/12 mx-auto lg:text-7xl text-4xl max-lg:font-bold fade-in-element">
                Endüstriyel Alanda <br /> Yenilikçi ve Profesyonel Çözümler
            </h1>
            <!-- Carousel -->
            <div class="mx-auto w-11/12 lg:w-9/12 fade-in-element">
                <div class="carousel w-full relative mt-8 lg:mt-16 min-h-52">
                    <div class="carousel-item relative w-full max-lg:w-auto transition-opacity duration-700"
                        :class="carouselOpacity">
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
</template>

<script>
export default {
    name: 'Hero',
    data() {
        return {
            icons: [
                { name: 'analytics', location: 'bg1 icons/analytics.png', dataValue: -1 },
                { name: 'automation', location: 'bg1 icons/automation.png', dataValue: 3 },
                { name: 'distributed', location: 'bg1 icons/distributed.png', dataValue: 2 },
                { name: 'electrical panel', location: 'bg1 icons/electrical-panel.png', dataValue: -3 },
                { name: 'factory', location: 'bg1 icons/factory.png', dataValue: -4 },
                { name: 'manufacture', location: 'bg1 icons/manufacture.png', dataValue: 2 },
                { name: 'racking', location: 'bg1 icons/racking-system.png', dataValue: 1 },
            ],
            screenLocations: [
                'top: 80%; right: 40%;',
                'top: 25%; right: 12%;',
                'top: 20%; left: 12%;',
                'top: 35%; left: 3%',
                'top: 85%; left: 4%;',
                'top: 53%; right: 8%;',
                'top: 90%; right: 2%;',
                'top: 35%;',
            ],
            slideCounter: 0,
            carouselOpacity: 'opacity-100',
            carouselImages: [
                'slide1.jpg',
                'slide2.jpg',
                'slide3.jpg',
                'slide4.jpg'
            ],
        };
    },
    computed: {
        showenCarousel() {
            return this.carouselImages[this.slideCounter];
        },
    },
    methods: {
        handleMouseMove(mouseEvent) {
            const container = document.querySelector('.floating-container');
            const centerX = container.offsetWidth / 2;
            const centerY = container.offsetHeight / 2;

            const { clientX, clientY } = mouseEvent;
            const angleX = (clientY - centerY) * 0.03;
            const angleY = (clientX - centerX) * -0.03;

            container.style.transform = `rotateX(${angleX}deg) rotateY(${angleY}deg)`;

            document.querySelectorAll('.icon').forEach((move) => {
                move.style.transform = `rotateX(${-angleX}deg) rotateY(${-angleY}deg)`;
            });
        },
        changeSlide(direction) {
            this.carouselOpacity = 'opacity-0';
            setTimeout(() => {
                this.slideCounter = (this.slideCounter + direction + this.carouselImages.length) % this.carouselImages.length;
                this.carouselOpacity = 'opacity-100';
            }, 600);
        },
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

#body {
    background-color: #17a2b8;
}
</style>
