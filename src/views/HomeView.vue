<template>
  <div class="home">
    <app-hero-vue />
    <app-sales-boxes-vue />
  </div>
</template>

<script>
import AppHeroVue from '@/components/AppHero.vue';
import AppSalesBoxesVue from '@/components/AppSalesBoxes.vue';

export default {
  components: { AppHeroVue, AppSalesBoxesVue },
  data() {
    return {};
  },
};
</script>
<style lang="scss">
.home {
  display: flex;
  justify-content: center;
  flex-direction: column;
}
</style>
