<template>
  <div class="store">
    <aside></aside>
    <transition-group name="items" tag="section" class="content">
      <div v-for="item in products" :key="item.id" class="item">
        <div class="img-container">
          <img :src="`${item.image}`" alt="" />
        </div>
        <h3>{{ item.title }}</h3>
        <h4 class="price">${{ item.price }}</h4>
        <router-link to="">
          <button class="multi-item">View Item ></button>
        </router-link>
      </div>
    </transition-group>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  data() {
    return {};
  },
  created() {
    this.$store.dispatch('fetchData');
  },
  computed: mapState(['products']),
};
</script>

<style lang="scss" scoped>
.store {
  width: 95%;
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: 1fr;
  grid-column-gap: 40px;
  grid-row-gap: 0px;
}
.content {
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
  padding: 0 !important;
}

.img-container {
  height: 200px;
  max-width: 200px;
  display: flex;
  align-content: center;
  align-items: center;
  img {
    width: 100%;
    max-height: 100%;
  }
}

.item {
  max-height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 20px 0;
}

aside {
  height: 100%;
  width: 100%;
}

@media (max-width: 600px) {
  .content {
    width: 100%;
    grid-template-columns: 1fr;
  }
}

@media (min-width: 601px) and (max-width: 900px) {
  .content {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media screen and (max-width: 550px) {
  .storegrid {
    width: 90%;
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-template-rows: 1fr;
    grid-column-gap: 10px;
  }
}
</style>
