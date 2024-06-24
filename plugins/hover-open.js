import hoverOpen from '@/directives/hover-open';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('hover-open', hoverOpen);
});