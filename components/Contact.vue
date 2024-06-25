<template>
    <div>
        <div class="flex max-lg:flex-col w-9/12 mx-auto my-4">
            <!-- Info text -->
            <div class="w-full lg:w-1/3 flex lg:flex-col gap-6 py-12">
                <div class="h-64">
                    <h1 class="card-title text-3xl">Turkuvaz İnovasyon</h1>
                    <h2 class="text-xl mb-2">Sistem Çözümleri A.Ş.</h2>
                    <p>Erciyes Üniversitesi Teknoloji Geliştirme Bölgesi</p>
                    <p>5.Bina Kat: 1 No: 67-4/66</p>
                    <p>Melikgazi / KAYSERİ</p>
                    <p>TÜRKİYE</p>
                    <p>Tel : +90 352 311 55 67</p>
                    <p>Faks : +90 352 311 55 87</p>
                </div>
                <div class="flex flex-col gap-4 max-lg:mx-auto lg:gap-4">
                    <div>
                        <p class=" font-semibold">Staj başvurularınız için</p>
                        <p>E: <a href="mailto:staj@turkuvazinovasyon.com"
                                class="font-semibold underline">staj@turkuvazinovasyon.com</a></p>
                    </div>
                    <div>
                        <p class=" font-semibold">İş başvurularınız için</p>
                        <p>E: <a href="mailto:ik@turkuvazinovasyon.com"
                                class="font-semibold underline">ik@turkuvazinovasyon.com</a></p>
                    </div>
                    <div>
                        <p class=" font-semibold">Bilgi için</p>
                        <p>E: <a href="mailto:info@turkuvazinovasyon.com"
                                class="font-semibold underline">info@turkuvazinovasyon.com</a></p>
                        <p>S: Pazartesi - Cuma: 8:00 to 18:00</p>
                    </div>
                </div>
            </div>
            <!-- Contact Form -->
            <div class="w-full lg:w-2/3 gap-6 p-6 bg-base-200 rounded-lg shadow-lg ">
                <h1 class="text-3xl font-bold mb-4 mx-10">Bize Ulaşın</h1>
                <p class="mx-10">Aşağıdaki formu kullanarak bize ulaşabilirsiniz</p>
                <form class="mx-8">
                    <div class="flex gap-8">
                        <div class="w-1/3">
                            <label for="name" class="label">İsim:</label>
                            <input type="text" id="name" v-model="name" required
                                class="input input-bordered input-primary input-lg w-full">
                        </div>
                        <div class="w-1/3">
                            <label for="email" class="label">E-posta:</label>
                            <input type="email" id="email" v-model="email" required
                                class="input input-bordered input-primary input-lg w-full">
                        </div>
                        <div class="w-1/3">
                            <label for="phone" class="label">Telefon:</label>
                            <input type="tel" id="phone" v-model="phone" required
                                class="input input-bordered input-primary input-lg w-full">
                        </div>
                    </div>
                    <div class="w-full flex flex-col">
                        <label for="message" class="label">Mesaj:</label>
                        <textarea id="message" v-model="message" required
                            class="textarea textarea-primary input-lg w-full min-h-60 mb-4"></textarea>
                    </div>
                    <button type="submit" class="btn btn-success text-gray-50 ">Gönder</button>
                </form>
            </div>
        </div>
        <!-- Map -->
        <div class="card w-10/12 mx-auto mb-4">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6226.292771129312!2d35.532266!3d38.714448!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x152b128d0e1746b5%3A0xe6e15ee6ff8f985b!2zVHVya3V2YXogxLBub3Zhc3lvbiBTaXN0ZW0gw4fDtnrDvG1sZXJpIEEuxZ4u!5e0!3m2!1str!2sus!4v1718009292203!5m2!1str!2sus"
                allowfullscreen="true" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
                class="w-11/12 h-96 my-8 mx-auto"></iframe>
        </div>

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
        return {
            name,
            email,
            phone,
            message
        };
    }
};
</script>

<style scoped></style>
