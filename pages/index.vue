<template>
    <div class="bg-base-100 flex flex-col" data-theme="winter">
        <div class="flex-start h-16 mb-2">
            <Navbar />
        </div>
        <Hero />
        <CardBox :services="services" class="pt-8 lg:pt-16" />
        <!-- Company Slider -->
        <div
            class="slider w-11/12 lg:w-9/12 relative grid place-items-center overflow-x-hidden mx-auto mt-8 lg:mt-16 fade-in-element">
            <div class="slide-track">
                <div v-for="company in references" :key="company.name"
                    class="slide flex items-center justify-center w-56 h-full">
                    <!-- TODO: If you want to delete the company website link, you can delete the @click event. -->
                    <NuxtImg :src="`images/${company.url}`" @click="openCompanySite(company.website)"
                        :title="company.description" />
                </div>
            </div>
        </div>
        <AboutUs class="mt-8 lg:mt-16 fade-in-element" id="AboutUs" />
        <Contact class="mt-8 lg:mt-16 pb-8 lg:pb-16 fade-in-element" id="Contact" />
        <Footer />
    </div>
</template>

<script>
import { references } from '~/data/references.js';
import { services } from '~/data/services';

export default {
    name: 'MainPage',
    setup() {
        // SEO OPTIMIZATION
        useSeoMeta({
            title: 'Turkuvaz İnovasyon',
            description: `Endüstriyel alanda yenilikçi ve profesyonel çözümler sunan Turkuvaz İnovasyon, müşterilerine en iyi hizmeti
            sunmayı hedefler.Genellikle Veri toplama, AS/ RS, Scada, PLC sistemleri ve otomasyon alanlarında hizmet
            verir.`,
            twitterTitle: 'Turkuvaz İnovasyon Twitter',
            twitterDescription: 'Endüstriyel alanda yenilikçi ve profesyonel çözümler sunan Turkuvaz İnovasyon, müşterilerine en iyi hizmeti sunmayı hedefler.',
            twitterImage: 'assets\\onlylogo.svg',
            ogTitle: 'Turkuvaz İnovasyon Otomasyon ve Sistem Çözümleri',
            ogDescription: `Endüstriyel alanda yenilikçi ve profesyonel çözümler sunan Turkuvaz İnovasyon, müşterilerine en iyi hizmeti
            sunmayı hedefler.Genellikle Veri toplama, AS/ RS, Scada, PLC sistemleri ve otomasyon alanlarında hizmet
            verir.`,
            ogImage: 'assets\\onlylogo.svg',
            ogUrl: 'https://turkuvazinovasyon.com',
        })
        // ALSO SEO OPTIMIZATION
        useHead({
            htmlAttrs: {
                lang: 'tr'
            },
            link: [
                {
                    rel: 'icon',
                    type: 'image/x-icon',
                    href: '/favicon.ico'
                }
            ]
        })

        const openCompanySite = (website) => {
            window.open(website, '_blank');
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

        return {
            references,
            services,
            openCompanySite,
        };
    },
};
</script>

<style>
.fade-in-element {
    opacity: 0;
    transform: translateY(-20px);
    transition: opacity 1.5s ease, transform 1.5s ease;
}

.fade-in-active {
    opacity: 1;
    transform: translateY(0);
}
</style>

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
