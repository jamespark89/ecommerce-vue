<template>
  <div class="home">
    <app-hero-vue />
  </div>
</template>

<script>
import AppHeroVue from '@/components/AppHero.vue';

export default {
  components: { AppHeroVue },
  data() {
    return {};
  },
};
</script>
<style lang="scss">
.home {
  display: flex;
  justify-content: center;
}
</style>
