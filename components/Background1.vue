<template>
    <div @mousemove="handleMouseMove"
        class="background-container position-absolute top-0 start-0 end-0 min-h-screen overflow-hidden d-none lg:d-block">
        <div class="icon" v-for="(icon, index) in icons" :key="icon.name" :data-value="icon.dataValue">
            <NuxtImg :src="icon.location" :style="`position: absolute; ${screenLocations[index]}`" class="h-16" />
        </div>
    </div>
</template>

<script>
export default {
    name: 'BackgroundFirst',
    setup() {
        const icons = [
            { name: 'analytics', location: 'bg1 icons/analytics.png', dataValue: '-1' },
            { name: 'automation', location: 'bg1 icons/automation.png', dataValue: '3' },
            { name: 'distributed', location: 'bg1 icons/distributed.png', dataValue: '2' },
            { name: 'electrical panel', location: 'bg1 icons/electrical-panel.png', dataValue: '-3' },
            { name: 'factory', location: 'bg1 icons/factory.png', dataValue: '-4' },
            { name: 'manufacture', location: 'bg1 icons/manufacture.png', dataValue: '2' },
            { name: 'racking', location: 'bg1 icons/racking-system.png', dataValue: '1' },
        ];

        const handleMouseMove = (e) => {
            const { clientX, clientY } = e;

            const container = document.querySelector('.background-container');
            const centerX = container.offsetWidth / 2;
            const centerY = container.offsetHeight / 2;

            const angleX = (clientY - centerY) * 0.04;
            const angleY = (clientX - centerX) * -0.04;

            container.style.transform = `rotateX(${angleX}deg) rotateY(${angleY}deg)`;
            console.log(angleX, angleY);
        };

        onMounted(() => {
            // 
        });


        const screenLocations = [
            'top: 40%; left: 25%;',
            'top: 25%; right: 12%;',
            'top: 20%; left: 12%;',
            'top: 35%;',
            'top: 80%; left: 4%;',
            'top: 53%; right: 18%;',
            'top: 80%; right: 8%;',
            'top: 35%;',
        ];

        return {
            icons,
            screenLocations,
            handleMouseMove
        };
    },
};
</script>

<style scoped>
.background-container {
    position: absolute;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    transform-origin: center;
    transition: transform 0.3s ease;
}

@keyframes backgroundAnimation {
    0% {
        background-position: 0% 50;
    }

    50% {
        background-position: 100% 50%;
    }

    100% {
        background-position: 0% 50%;
    }
}
</style>
