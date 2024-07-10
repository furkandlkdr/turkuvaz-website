<template>
    <div class="background-container">
        <div class="background-animation"></div>
    </div>
</template>

<script>
export default {
    name: 'BackgroundFirst',
    mounted() {
        // Add animation logic here
    }
}
</script>

<style scoped>
.background-container {
    position: fixed;
    width: 100%;
    height: 100vh;
    overflow: hidden;
}

.background-animation {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(to right, #ff0000, #00ff00, #0000ff);
    animation: infinite 1s backgroundAnimation;
}

@keyframes backgroundAnimation {
    0% {
        background-position: 0% 50
    }
    50% {
        background-position: 100% 50%;
    }
    100% {
        background-position: 0% 50%;
    }
}
</style>