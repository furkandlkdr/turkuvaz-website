<template>
    <title> Referanslar </title>
    <div>
        <div class="h-24">
            <Navbar />
        </div>
        <div class="grid grid-cols-2 xl:grid-cols-4 w-11/12 2xl:w-9/12 mx-auto gap-2 xl:gap-6">
            <div v-for="company in references" :key="company.url" class="card bg-neutral-content shadow-lg">
                <div class="2xl:h-52 h-24 flex items-center justify-center mb-2">
                    <figure class="w-full h-full flex items-center justify-center mx-4 mt-2">
                        <NuxtImg :src="`images/${company.url}`" :alt="`${company.name} logo`"
                            class="w-full h-full object-contain" />
                    </figure>
                </div>
                <div class="items-center text-center">
                    <h2 class="text-2xl font-bold colorize-font">{{ company.name }}</h2>
                    <p class="text-xl font-medium colorize-font mt-2 mb-6 mx-4">{{ company.description }}</p>
                </div>
            </div>
        </div>

        <Footer class="mt-8"/>
    </div>
</template>

<script>
import { references } from '~/data/references.js';
export default {
    name: 'References',
    setup() {
        return {
            references,
        };
    }
}
</script>

<style scoped>
.colorize-font {
    color: oklch(var(--n));
}
</style>