<template>
    <div data-theme="winter">
        <title> Referanslar </title>
        <div class="xl:h-16 h-20">
            <Navbar />
        </div>
        <div class=" xl:w-9/12 w-11/12 flex justify-center items-center my-10 mx-auto">
            <h2 class="xl:text-5xl text-3xl font-bold">Müşterilerimiz</h2>
        </div>
        <div class="grid xl:grid-cols-2 w-11/12 2xl:w-9/12 mx-auto gap-2 xl:gap-6">
            <!-- <div v-for="company in references" :key="company.url" class="card card-side bg-neutral-content shadow-lg">
                <div class="2xl:h-52 h-24 flex items-center justify-center mb-2"></div>
            </div> -->
            <div v-for="company in references" :key="company.url" class="card lg:card-side bg-base-200 shadow-lg items-center p-4 xl:my-0 my-2">
                <div class="2xl:w-80 lg:w-64 lg:h-44 h-32 flex items-center justify-center mb-2">
                    <figure class="w-full h-full flex items-center justify-center mx-4 mt-2">
                        <NuxtImg :src="`images/${company.url}`" :alt="`${company.name} logo`"
                            class="w-full h-full object-contain" />
                    </figure>
                </div>
                <div class="text-center lg:self-start card-body">
                    <h2 class="text-2xl font-bold colorize-font">{{ company.name }}</h2>
                    <ul>
                        <li v-for="desc in parseDescriptions(company)" :key="desc"
                            class="text-xl font-medium colorize-font mt-2 mx-4">{{ desc }}</li> 
                    </ul>
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
        const parseDescriptions = (company) => {
            return company.description.split('*');
        }
        return {
            references,
            parseDescriptions
        };
    }
}
</script>

<style scoped>
.colorize-font {
    color: oklch(var(--n));
}
</style>