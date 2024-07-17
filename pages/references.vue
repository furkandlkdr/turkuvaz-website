<template>
    <div data-theme="winter">
        <title>Referanslar</title>
        <div class="xl:h-16 h-20">
            <Navbar />
        </div>
        <div class="xl:w-9/12 w-11/12 flex justify-center items-center my-10 mx-auto">
            <h2 class="xl:text-5xl text-3xl font-bold fade-in-element">Müşterilerimiz</h2>
        </div>
        <div class="grid xl:grid-cols-2 w-11/12 2xl:w-9/12 mx-auto gap-2 xl:gap-6">
            <div v-for="company in references" :key="company.url" @click="openCompanySite(company.website)"
                class="card lg:card-side bg-base-300 shadow-lg items-center p-4 xl:my-0 my-2 fade-in-element company">
                <div class="2xl:w-80 lg:w-64 lg:h-44 h-32 self-center mb-2">
                    <figure class="w-full h-full mx-4 mt-2">
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

        <Footer class="mt-8" />
    </div>
</template>

<script>
import { references } from '~/data/references.js';

export default {
    name: 'References',
    setup() {
        const parseDescriptions = (company) => {
            return company.description.split('*');
        };

        onMounted(() => {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('fade-in-active');
                        observer.unobserve(entry.target);
                    }
                });
            });

            document.querySelectorAll('.fade-in-element').forEach((element) => {
                observer.observe(element);
            });
        });

        const openCompanySite = (website) => {
            window.open(website, '_blank');
        };

        return {
            references,
            parseDescriptions,
            openCompanySite,
        };
    },
};
</script>

<style scoped>
.colorize-font {
    color: oklch(var(--n));
}

.company:hover {
    scale: 1.01;
    transition: scale 0.1s;
    background-color: oklch(var(--b1));
    outline: 6px solid rgb(8, 145, 178);
    cursor: pointer;
}
</style>
style