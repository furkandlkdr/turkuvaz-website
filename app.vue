<template>
  <title>Turkuvaz İnovasyon</title>
  <Navbar />
  <div id="container">
    <!-- Hero Content -->
    <div class="my-10 gap-8">
      <!-- Heading -->
      <div class="panel text-center mx-auto">
        <div class="flex-col items-center gap-2 text-white">
          <h1 class="xl:text-7xl md:text-3xl">
            Endüstriyel Alanda<br class="d-none sm:d-block">
            Yenilikçi ve Profesyonel Çözümler
          </h1>
        </div>
      </div>
      <!-- Carousel -->
      <div class="my-10 mx-auto w-9/12 justify-center items-center">
        <div class="carousel">
          <div id="slide1" class="carousel-item relative w-full">
            <img src="./assets/slide1.jpg" class="w-full" />
            <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide4" class="btn btn-circle">❮</a>
              <a href="#slide2" class="btn btn-circle">❯</a>
            </div>
          </div>
          <div id="slide2" class="carousel-item relative w-full">
            <img src="./assets/slide2.jpg" class="w-full" />
            <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide1" class="btn btn-circle">❮</a>
              <a href="#slide3" class="btn btn-circle">❯</a>
            </div>
          </div>
          <div id="slide3" class="carousel-item relative w-full">
            <img src="./assets/slide3.jpg" class="w-full" />
            <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide2" class="btn btn-circle">❮</a>
              <a href="#slide4" class="btn btn-circle">❯</a>
            </div>
          </div>
          <div id="slide4" class="carousel-item relative w-full">
            <img src="./assets/slide4.jpg" class="w-full" />
            <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide3" class="btn btn-circle">❮</a>
              <a href="#slide1" class="btn btn-circle">❯</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Company Slider -->
    <div class="slider">
      <div class="slide-track">
        <!-- LOGOS -->
        <div v-for="image in images" :key="image.name" class="slide">
          <NuxtImg :src="`/images/${image.url}`"/>
        </div>

        <div v-for="image in images" :key="image.name" class="slide">
          <NuxtImg :src="`/images/${image.url}`" />
        </div>
      </div>
    </div>
    <!-- Cardbox -->
    <div class="w-9/12 my-10 mx-auto justify-center items-center">
      <div id="card-box" class="grid grid-cols-1 lg:grid-cols-2 gap-8">

        <div class="card bg-slate-800 shadow-xl">
          <figure class="w-11/12 2xl:ml-4 mt-4 self-center">
            <img src="./assets/2Win_opt.svg" class="h-24" alt="2Win" />
          </figure>
          <div class="card-body">
            <h2 class="card-title text-5xl">2Win - SCADA Sistemleri</h2>
            <p class="text-xl drop-shadow-lg">SCADA işletmeler için, işletme içinde veya dışında herhangi bir yerde
              kullanılan bütün
              cihazların
              izlenmesi ve kontrol edilebilmesini sağlayan vazgeçilemez bir sistemdir. 2Win Scada Yazılımı ile maksimum
              erişilebilirlik ve hızlı müdahale hedeflenmiştir. Web tabanlı geliştirilen yazılımımız bu hedefe ulaşırken
              büyük kolaylık sağlamaktadır.</p>
            <div class="card-actions justify-end">
              <button class="btn">Detay</button>
            </div>
          </div>
        </div>

        <div class="card bg-slate-800 shadow-xl">
          <figure class="w-11/12 2xl:ml-4 mt-4 self-center">
            <img src="./assets/2Mes_opt.svg" class="h-24" alt="2Mes" />
          </figure>
          <div class="card-body">
            <h2 class="card-title text-5xl">2Mes- Veri Toplama Sistemi</h2>
            <p class="text-xl drop-shadow-lg">Günümüz rekabet koşullarında kaliteden ödün vermeden maliyetlerin
              düşürülmesi işletmeler
              için hayati önem
              taşımaktadır. 2Das Veri Toplama Yazılımı ve Sistemlerimiz(İhtiyaç duyulan otomasyon sistemleri ile
              birlikte) gerçek zamanlı üretim yönetimini mümkün kılmaktadır.</p>
            <div class="card-actions justify-end">
              <button class="btn">Detay</button>
            </div>
          </div>
        </div>

        <div class="card bg-slate-800 shadow-xl">
          <figure class="w-11/12 2xl:ml-4 mt-4 self-center">
            <img src="./assets/2Bee_opt.svg" class="h-24" alt="2Bee" />
          </figure>
          <div class="card-body">
            <h2 class="card-title text-5xl">2Bee - ASRS</h2>
            <p class="text-xl drop-shadow-lg">İşletmelerde ürün hacmi ve çeşitliliğinin artması ile
              kullanılabilir depolama alanlarının daralması doğru
              ve hızlı erişim ihtiyacı robotik yükleme/boşaltma sistemlerinin kullanılmasını gerekli hale getirmiştir.
              Bu kapsamda mekanik iş ortağımız GMM ile depolama robotu, plc ve bilgisayar yazılımını kapsayan 2Bee AS/RS
              çözümleri sunuyoruz.</p>
            <div class="card-actions justify-end">
              <button class="btn">Detay</button>
            </div>
          </div>
        </div>

        <div class="card bg-slate-800 shadow-xl">
          <figure class="w-11/12 2xl:ml-4 2xl:h-24 mt-4 self-center">
            <img src="./assets/atolye.svg" class="h-24" alt="Atolye" />
          </figure>
          <div class="card-body">
            <h2 class="card-title text-5xl">Elektrik Pano İmalatı</h2>
            <p class="text-xl drop-shadow-lg"> SCADA otomasyon sistemlerinizin en önemli bileşenlerinden biri olan
              elektrik panoları,
              sisteminizin sorunsuz ve güvenli bir şekilde çalışmasını sağlar. Uzman ekibimiz, ihtiyaçlarınız
              doğrultusunda özel olarak tasarlanmış ve üretilmiş elektrik panoları sunarak, otomasyon sisteminizin en
              yüksek performansı vermesini garanti eder.</p>
            <div class="card-actions justify-end">
              <button class="btn">Detay</button>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
  <Footer />
</template>

<script>
import { ref } from 'vue';
export default {
  name: 'Main Page',
  setup() {
    const images = ref([
      { name: 'altek', url: 'altek.jpg' },
      { name: 'altinay', url: 'altinay.png' },
      { name: 'ankalogo', url: 'ankalogo.png' },
      { name: 'arcelik', url: 'arcelik.jpg' },
      { name: 'arel', url: 'arel.jpg' },
      { name: 'besler_tekstil', url: 'besler_tekstil.jpg' },
      { name: 'boydak', url: 'boydak.jpg' },
      { name: 'boytas', url: 'boytas.jpg' },
      { name: 'boyteks', url: 'boyteks.jpg' },
      { name: 'calik-denim-logo', url: 'calik-denim-logo.jpg' },
      { name: 'capar', url: 'capar.jpg' },
      { name: 'corobo', url: 'corobo.jpg' },
      { name: 'emekkablo', url: 'emekkablo.png' },
      { name: 'erciyes_mikron', url: 'erciyes_mikron.jpg' },
      { name: 'erciyeskirec', url: 'erciyeskirec.jpg' },
      { name: 'etk', url: 'etk.jpg' },
      { name: 'ezinc', url: 'ezinc.jpg' },
      { name: 'formsunger', url: 'formsunger.jpg' },
      { name: 'gmm', url: 'gmm.jpg' },
      { name: 'hes_kablo', url: 'hes_kablo.jpg' },
      { name: 'istikbal', url: 'istikbal.jpg' },
      { name: 'kaftan', url: 'kaftan.jpg' },
      { name: 'kaski', url: 'kaski.jpg' },
      { name: 'kaybitas', url: 'kaybitas.jpg' },
      { name: 'kayseriukasim', url: 'kayseriulasim.png' },
      { name: 'lenze', url: 'lenze.jpg' },
      { name: 'lineer', url: 'lineer.jpg' },
      { name: 'logoBoytas', url: 'logoBoytas.png' },
      { name: 'melikgazi', url: 'melikgazi.png' },
      { name: 'merkez_celik', url: 'merkez_celik.jpg' },
      { name: 'mert_makine', url: 'mert_makine.jpg' },
      { name: 'mesa', url: 'mesa.jpg' },
      { name: 'mondi', url: 'mondi.jpg' },
      { name: 'nil', url: 'nil.jpg' },
      { name: 'nkskablo', url: 'nkskablo.png' },
      { name: 'nurol_1', url: 'nurol_1.jpg' },
      { name: 'ortaanadolu', url: 'ortaanadolu.jpg' },
      { name: 'ravaber', url: 'ravaber.png' },
      { name: 'simfer', url: 'simfer.jpg' },
      { name: 'sirikcioglu-logo', url: 'sirikcioglu-logo.png' },
      { name: 'smgmuh', url: 'smgmuh.png' },
      { name: 'tai', url: 'tai.png' },
      { name: 'talas', url: 'talas.png' },
      { name: 'tmo', url: 'tmo.jpg' }
    ]);
    return {
      images
    }
  }
}

</script>

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

.slider {
  height: 150px;
  width: 75%;
  margin: auto;
  position: relative;
  display: grid;
  place-items: center;
  overflow-x: hidden;
}

.slider:before,
.slider:after {
  position: absolute;
  top: 0;
  width: 250px;
  height: 100%;
  content: "";
  z-index: 2;
}

.slider:before {
  left: 0;
  background: linear-gradient(to left, transparent, #1d232a);
}

.slider:after {
  right: 0;
  background: linear-gradient(to right, transparent, #1d232a);
}

.slider:hover .slide-track {
  animation-play-state: paused;
}

.slide-track {
  display: flex;
  height: 100%;
  animation: 150s slide infinite linear;
}

.slide {
  display: flex;
  align-items: center;
  justify-content: center;
  border-right: 1px dashed oklch(var(--pc));
  border-left: 1px transparent;
  width: 215px;
  justify-content: center;
}

.slide>img {
  object-fit: fill;
  min-width: 60%;
  max-width: 90%;
  max-height: 90%;
}
</style>