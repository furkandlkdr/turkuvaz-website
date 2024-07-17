<template>
    <div class="cardbox-container">
        <div id="background" class="bg-base-300 absolute top-0 left-0 right-0 bottom-0 bg-cover bg-fixed"></div>
        <div class="w-11/12 lg:w-9/12 max-lg:text-center justify-center items-center mx-auto pb-8 relative z-10">
            <div id="card-box" class="flex flex-col gap-8">
                <div v-for="card in services" :key="card.id"
                    class="flex max-lg:flex-col relative rounded-sm bg-base-200 shadow-md p-8 fade-in-element">
                    <figure class="max-lg:h-24 max-md:h-16 self-center lg:w-1/6">
                        <NuxtImg :src="card.logo" class="max-h-full" :alt="card.title" />
                    </figure>
                    <div class="card-body max-lg:items-center lg:w-5/6">
                        <h2 class="card-title text-5xl">{{ `${card.systemName} ${card.title}` }}</h2>
                        <p class="text-xl drop-shadow-lg">{{ card.descriptions[0].text }}</p>
                        <div class="card-actions justify-end">
                            <NuxtLink class="btn btn-primary btn-outline" :to="`/services/${card.id}`">Detay</NuxtLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        services: {
            type: Array,
            required: true
        }
    }
}
</script>

<style scoped>
.cardbox-container {
    position: relative;
    min-height: 100vh;
}

@media (max-width: 768px) {
    #background {
        clip-path: polygon(0 0,
                100% 0,
                100% 82%,
                75% 90%,
                50% 90%,
                25% 85%,
                0 100%) !important;
    }
}

#background {
    clip-path: polygon(0 0,
            100% 0,
            100% 75%,
            80% 82%,
            60% 90%,
            40% 82%,
            20% 90%,
            0 100%);
    transition: clip-path 0.5s ease-in-out;
}
</style>
