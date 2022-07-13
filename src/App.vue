<template>
  <div>
    <app-nav />
    <main>
      <router-view />
    </main>
    <app-footer />
  </div>
</template>
<script>
import AppNav from '@/components/AppNav.vue';
import AppFooter from '@/components/AppFooter.vue';

export default {
  components: {
    AppNav,
    AppFooter,
  },
  created() {
    this.$store.dispatch('fetchData');
  },
};
</script>
<style lang="scss">
/*------------ Variables -----------*/

$brandprimary: #d96528;
$brandsecondary: #03c1c1;
*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

a,
a:active,
a:visited {
  color: $brandprimary;
  text-decoration: none;
  transition: 0.3s all ease;
}

button {
  border: 1px solid #ccc;
  background: white;
  padding: 10px 14px;
  cursor: pointer;
  color: black;
  font-weight: 700;
  font-family: Arial, Helvetica, sans-serif;
  transition: 0.3s all ease;
  &:hover {
    background: black;
    border: 1px solid black;
    color: white;
  }
}
main {
  display: flex;
  justify-content: center;
}
</style>
