<template>
  <title>Turkuvaz İnovasyon</title>
  <div id="container">
    <div class="navbar bg-base-200 justify-between">
      <div class="">
        <link class="btn btn-ghost text-xl">
        <img src="assets\onlylogo.svg">
        </link>
        <ul class="menu menu-horizontal px-1 gap-x-4">
          <!-- Services -->
          <li>
            <details class="dropdown">
              <summary>Hizmetler</summary>
              <ul class="p-2 shadow menu dropdown-content z-[1] w-52 bg-base-100 rounded-t-none">
                <li><a>AS/RS Sistemleri</a></li>
                <li><a>Endüstriyel Otomasyon</a></li>
                <li><a>SCADA Sistemleri</a></li>
                <li><a>Veri Toplama Sistemleri</a></li>
                <li><a>Elektrik Pano İmalatı</a></li>
              </ul>
            </details>
          </li>
          <li><a>Müşterilerimiz</a></li>
          <li><a>Hakkımızda</a></li>
          <li><a>İletişim</a></li>
        </ul>
      </div>
      <!-- Language Change -->
      <div class="mx-10">
        <ul class="menu menu-horizontal px-1 gap-x-4">
          <li>
            <details>
              <summary>
                Dil
              </summary>
              <ul class="p-2 bg-base-100 rounded-t-none">
                <li><button>Türkçe</button></li>
                <li><button>English</button></li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </div>
    <!-- Hero Content -->
    <div class="my-10 gap-8">
      <!-- Heading -->
      <div class="panel text-center mx-auto">
        <div class="flex-col items-center gap-2 text-white">
          <h1 class="h2 sm:h1 lg:display-6 xl:display-4 my-4 sm:mt-0 text-4xl sm:text-5xl lg:text-6xl xl:text-7	"
            style="transform: translateY(0px); opacity: 1;">
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
    <!-- Cardbox -->
    <div class="w-9/12 my-10 mx-auto justify-center items-center">
      <div id="card-box" class="grid grid-cols-1 lg:grid-cols-2 gap-8">

        <div class="card bg-base-100 shadow-xl image-full">
          <img src="./assets/2Win_opt.svg" alt="2Win" />
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

        <div class="card bg-base-100 shadow-xl image-full">
          <img src="./assets/2Mes_opt.svg" alt="2Mes" />
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

        <div class="card bg-base-100 shadow-xl image-full">
          <img src="./assets/2Bee_opt.svg" alt="2Bee" />
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

        <div class="card bg-base-100 shadow-xl image-full">
          <img src="./assets/atolye.svg" alt="Atolye" />
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
    <!-- Company Slider -->
    <div class="logos">
      <div class="logos-slide">
        <!-- LOGOLAR -->
      </div>
    </div>
    <script>
      var copy = document.querySelector(".logos-slide").cloneNode(true);
      document.querySelector(".logos").appendChild(copy);
    </script>
  </div>
</template>

<script>
export default {
  name: 'Main Page',
}
</script>

<style scoped>
* {
  font-weight: 500;
}

@keyframes slide {
  from {
    transform: translateX(0);
  }

  to {
    transform: translateX(-100%);
  }
}

.logos {
  overflow: hidden;
  padding: 60px 0 0 0;
  background-color: white;
  white-space: nowrap;
  position: relative;
}

.logos:before,
.logos:after {
  position: absolute;
  top: 0;
  width: 250px;
  height: 100%;
  content: "";
  z-index: 2;

}

.logos:before {
  left: 0;
  background: linear-gradient(to left, rgba(255, 255, 255, 0), rgb(255, 255, 255));
}

.logos:after{
  right: 0;
  background: linear-gradient(to right, rgba(255, 255, 255, 0), rgb(255, 255, 255));

}

.logos:hover .logos-slide {
  animation-play-state: paused;
}

.logos-slide {
  display: inline-block;
  animation: 20s slide infinite linear;
}

.logos-slide img {
  height: 50px;
  margin: 0 40px;
}
</style>