<template>
  <div>
    <title> {{ service.systemName + " " + service.title }} </title>
    <!-- Navbar -->
    <div class="h-12">
      <Navbar />
    </div>
    <!-- Page content -->
    <div class="container mx-auto my-10">
      <div class="flex">
        <div class="w-1/3">
          <h1 class="text-3xl font-bold">{{ service.systemName + " " + service.title }}</h1>
          <!-- TODO: Add a carusel or image gallery -->
          <div v-for="image in service.images">
            <NuxtImg :src="image" alt="" class="mt-4 w-full" />
          </div>
        </div>
        <div class="w-2/3 pl-8">
          <div v-for="desc in service.descriptions">
            <ol class="text-xl my-8" v-if="desc.isList">
              <li class="my-1" v-for="item in parseList(desc.text)">{{ item }}</li>
            </ol>
            <p class="text-xl my-8" v-else>{{ desc.text }}</p>
          </div>
        </div>
      </div>
    </div>

    <Footer />
  </div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router';
import { services } from '~/data/services.js';

const route = useRoute();
const router = useRouter();
const serviceId = route.params.id;
const service = services.find(service => service.id === parseInt(serviceId));

if (!service) {
  router.push('/'); // Redirect to home page if service not found
}

const parseList = (list) => {
  list = list.split('*').map(item => item.trim()).filter(item => item !== '');
  return list;
}
</script>

<style scoped></style>