export default {
  beforeMount(el) {
    const summary = el.querySelector('summary');
    summary.addEventListener('mouseover', () => {
      el.setAttribute('open', true);
    });
    el.addEventListener('mouseleave', () => {
      el.removeAttribute('open');
    });
  },
  unmounted(el) {
    const summary = el.querySelector('summary');
    summary.removeEventListener('mouseover', () => {
      el.setAttribute('open', true);
    });
    el.removeEventListener('mouseleave', () => {
      el.removeAttribute('open');
    });
  },
};