<template>
    <div class="aboutus-container">
        <div class="flex flex-col w-11/12 lg:w-9/12 mx-auto">
            <!-- Contact Form -->
            <div class="w-full gap-4 p-4 bg-base-200 rounded-lg shadow-lg">
                <h1 class="text-3xl font-bold mx-4 lg:mx-8 mt-4">Bize Ulaşın</h1>
                <p class="mx-4 lg:mx-8 my-4">Aşağıdaki formu kullanarak bize ulaşabilirsiniz</p>
                <form @submit.prevent="sendMessage" class="mx-4 lg:mx-8">
                    <div class="flex max-lg:flex-wrap gap-4">
                        <div class="lg:w-1/3 w-full">
                            <label for="name" class="label">İsim:</label>
                            <input type="text" id="name" v-model="name" required
                                class="input input-bordered input-info input-lg w-full">
                        </div>
                        <div class="lg:w-1/3 w-full">
                            <label for="email" class="label">E-posta:</label>
                            <input type="email" id="email" v-model="email" required
                                class="input input-bordered input-info input-lg w-full">
                        </div>
                        <div class="lg:w-1/3 w-full">
                            <label for="phone" class="label">Telefon:</label>
                            <input type="tel" id="phone" v-model="phone" required
                                class="input input-bordered input-info input-lg w-full">
                        </div>
                    </div>
                    <div class="w-full flex flex-col my-4">
                        <label for="message" class="label">Mesaj:</label>
                        <textarea id="message" v-model="message" required
                            class="textarea textarea-info input-lg w-full min-h-60"></textarea>
                    </div>
                    <div class="grid grid-cols-12 my-4">
                        <button type="submit"
                            class="btn btn-lg btn-success lg:col-start-9 lg:col-span-4 col-span-12 w-full text-gray-50 ">Gönder</button>
                    </div>
                </form>
            </div>
            <!-- Contact Info text -->
            <div class="flex max-md:flex-col justify-center items-center gap-6 lg:mt-16 mt-8">
                <div class="md:w-1/2 flex flex-col items-center justify-center">
                    <h1 class="card-title text-3xl text-center">Turkuvaz İnovasyon</h1>
                    <h2 class="text-xl mb-2">Sistem Çözümleri A.Ş.</h2>
                    <p class="text-center">Erciyes Üniversitesi Teknoloji Geliştirme Bölgesi</p>
                    <p>5.Bina Kat: 1 No: 67-4/66</p>
                    <p>Melikgazi / KAYSERİ</p>
                    <p>TÜRKİYE</p>
                    <a class="link link-hover" href="tel:+903523115567">Tel : +90 352 311 55 67</a>
                </div>
                <div class="md:w-1/2 flex flex-col items-center justify-center gap-4">
                    <div class="flex flex-col items-center">
                        <p class="font-semibold">Staj başvurularınız için</p>
                        <a href="mailto:staj@turkuvazinovasyon.com"
                            class="font-semibold link link-hover">staj@turkuvazinovasyon.com</a>
                    </div>
                    <div class="flex flex-col items-center">
                        <p class="font-semibold">İş başvurularınız için</p>
                        <a href="mailto:ik@turkuvazinovasyon.com"
                            class="font-semibold link link-hover">ik@turkuvazinovasyon.com</a>
                    </div>
                    <div class="flex flex-col items-center">
                        <p class="font-semibold">Bilgi için</p>
                        <a href="mailto:info@turkuvazinovasyon.com"
                            class="font-semibold link link-hover">info@turkuvazinovasyon.com</a>
                        <p class="text-center">S: Pazartesi - Cuma: 8:00'den 18:00'e</p>
                    </div>
                </div>
            </div>
        </div>
        <!-- Map -->
        <div class="mx-auto mt-8 lg:mt-16">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6226.292771129312!2d35.532266!3d38.714448!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x152b128d0e1746b5%3A0xe6e15ee6ff8f985b!2zVHVya3V2YXogxLBub3Zhc3lvbiBTaXN0ZW0gw4fDtnrDvG1sZXJpIEEuxZ4u!5e0!3m2!1str!2sus!4v1718009292203!5m2!1str!2sus"
                allowfullscreen="true" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
                class="w-11/12 lg:w-9/12 h-96 mx-auto"></iframe>
        </div>

        <div id="background" class="bg-base-300 absolute top-0 left-0 right-0 bottom-0 bg-cover bg-fixed -z-10"></div>
    </div>
</template>

<script>
import { ref } from 'vue';
export default {
    name: 'Contact',
    setup() {
        const name = ref('');
        const email = ref('');
        const phone = ref('');
        const message = ref('');

        const sendMessage = (e) => {
            const data = {
                name: name.value,
                email: email.value,
                phone: phone.value,
                message: message.value,
            };
            console.log(data);
            // TODO: Send mail to info@turkuvazinovasyon.com
            // TODO: Show success or error message
        };

        return {
            name,
            email,
            phone,
            message,
            sendMessage,
        };
    }
};
</script>

<style scoped>
@media (max-width: 768px) {
    #background {
        clip-path: polygon(100% 100%,
                0 100%,
                0 18%,
                25% 10%,
                50% 10%,
                75% 15%,
                100% 0) !important;
    }
}

#background {
    clip-path: polygon(100% 0,
            80% 10%,
            60% 18%,
            40% 10%,
            20% 18%,
            0 25%,
            0 100%,
            100% 100%);
    transition: clip-path 0.5s ease-in-out;
}
</style>
