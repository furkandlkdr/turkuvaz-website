<template>
    <div class="flex max-lg:flex-col mx-auto w-11/12 lg:w-9/12">
        <!-- Cards Box -->
        <div class="grid grid-cols-1 xl:grid-cols-2 
        lg:gap-4 2xl:gap-8 
        w-full xl:w-1/2 items-center">
            <!-- Card 1 - 2 -->
            <div class="flex flex-col gap-4 max-lg:gap-8">
                <!-- Card 1 -->
                <div class="card bg-base-200 shadow-md p-6">
                    <h2 class="text-2xl font-bold mb-4">Otomasyon Hakkında Her Şey</h2>
                    <p class="text-lg">Elektrik Panosu Dahil Otomasyon Sistemleri</p> <br>
                    <p class="text-lg">Scada Sistemleri</p> <br>
                    <p class="text-lg">Veri Toplama Sistemleri</p> <br>
                    <p class="text-lg">Otomatik Depolama Sistemleri</p> <br>
                </div>
                <!-- Card 2 -->
                <div class="card bg-base-200 shadow-md p-6">
                    <h2 class="text-2xl font-bold mb-4">Yenilikçi ve Profesyonel Çözümler</h2>
                    <p class="text-lg">İhtiyaçlarınıza Özel Çözümler</p>
                </div>
            </div>

            <!-- Card 3 -->
            <div class="card bg-base-200 shadow-md p-6 flex max-lg:mt-8">
                <h2 class="text-2xl font-bold mb-4">Ana İlkelerimiz:</h2>
                <ul class="text-xl">
                    <li>Müşterilerimize son teknolojiyi ekonomik bir biçimde sunmak</li> <br>
                    <li>Mümkün olan en iyi kullanıcı deneyimini sağlamak</li> <br>
                    <li>Yeni teknolojilerin geliştirilmesi için arge çalışmaları yapmak</li> <br>
                    <li>Müşterilerimizin isteklerini kaliteden ödün vermeden gerçekleştirmek</li>
                </ul>
            </div>
        </div>
        <!-- Info -->
        <div class="flex flex-col lg:mx-8 w-full xl:w-1/2 max-lg:mt-4 gap-4">
            <h2 class="text-2xl font-bold max-xl:text-center">Turkuvaz İnovasyon</h2>
            <p class="text-lg max-xl:text-center">Turkuvaz İnovasyon endüstriyel otomasyon sektöründe, bilgisayar ve PLC yazılımları
                konusunda hizmet
                vermek amacıyla 2011 yılında kurulmuştur. Firmamız AS/RS (Otomatik Yükleme / Boşaltma Sistemleri), Scada
                Sistemleri, Veri Toplama Sistemleri gibi başlıca konularda geliştirdiğimiz otomasyon projeleri ve
                yazılımları ile sektörde yerini almıştır. Bu temel konular yanında müşteri ihtiyacına göre özel çözümler
                de geliştirebilmekteyiz.</p>
            <p class="text-lg max-xl:text-center">Bilgisayar ve elektronik mühendislerinden oluşan tecrübeli ekibimiz, sizin için en uygun
                çözümleri üretmeyi amaç edinmiştir.</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AboutUs',
}
</script>