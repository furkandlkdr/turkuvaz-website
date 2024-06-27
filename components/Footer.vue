<template>
  <footer class="bg-base-200 text-base-content">
    <div class="flex flex-col md:flex-row gap-10 lg:gap-1 p-6 mx-auto">
      <!-- Company Info -->
      <div class="w-full md:mr-auto max-md:text-center lg:w-2/6">
        <h2 class="font-bold text-lg mb-2">Turkuvaz İnovasyon</h2>
        <p>
          Tecrübeli kadrosuyla ekonomik ve yenilikçi endüstriyel çözümler sunar. Scada, veri toplama yazılımı ve
          otomasyon (elektrik projesi ve plc yazılımı) ihtiyaçlarınız için bize ulaşın.
        </p>
      </div>
      <!-- Menu 1 -->
      <div class="w-full max-lg:text-center lg:w-1/6">
        <h2 class="font-bold text-lg mb-2">Hizmetlerimiz</h2>
        <ul class="space-y-2">
          <li><a href="#" class="link link-hover">AS/RS Sistemleri</a></li>
          <li><a href="#" class="link link-hover">Endüstriyel Otomasyon</a></li>
          <li><a href="#" class="link link-hover">SCADA Sistemleri</a></li>
          <li><a href="#" class="link link-hover">Veri Toplama Sistemleri</a></li>
          <li><a href="#" class="link link-hover">Elektrik Pano İmalatı</a></li>
        </ul>
      </div>
      <!-- Menu 2 -->
      <div class="w-full max-lg:text-center lg:w-1/6">
        <h2 class="font-bold text-lg mb-2">Bağlantılar</h2>
        <ul class="space-y-2">
          <li><a href="#" class="link link-hover">Anasayfa</a></li>
          <li><a href="#" class="link link-hover">Hakkımızda</a></li>
          <li><a href="#" class="link link-hover">Hizmetler</a></li>
          <li><a href="#" class="link link-hover">İletişim</a></li>
          <li><a href="#" class="link link-hover">Müşterilerimiz</a></li>
        </ul>
      </div>
    </div>
    <!-- Copyright Section -->
    <div class="text-center mt-10">
      <p>&copy; 2011-{{ DateTime }} Turkuvaz İnovasyon A.Ş. Tüm Hakları Saklıdır.</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  setup() {
    return {
      DateTime: new Date().getFullYear()
    }
  }
}
</script>

<style scoped>
/*  */
</style>