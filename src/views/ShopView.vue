<template>
  <div class="store">
    <section v-if="filteredProducts.length === 0">
      <app-loading />
    </section>
    <div class="filter">
      <button @click="showFilter" class="filterbtn">Filter</button>
      <aside :class="{ active: isActive, deactive: isDeactive }" class="filter-container">
        <button @click="closeFilter" class="xbtn">x</button>
        <h3 style="margin-top: 10%">Filter</h3>
        <p style="margin-top: 1rem">
          Max Price :
          <strong>${{ pricerange }}</strong>
        </p>
        <label for="pricebar">
          <input
            class="pricebar"
            type="range"
            step="10"
            v-model="pricerange"
            :min="min"
            :max="max"
          />
        </label>
        <span class="min">${{ min }}</span>
        <span class="max">${{ max }}</span>
      </aside>
    </div>
    <transition-group name="items" tag="section" class="content">
      <div v-for="item in filteredProducts" :key="item.id" class="item">
        <div class="img-container">
          <img :src="`${item.image}`" alt="" />
        </div>
        <h4 class="title">{{ item.title }}</h4>
        <h4 class="price">${{ item.price }}</h4>
        <router-link :to="`products/${item.id}`">
          <button class="multi-item">View Item ></button>
        </router-link>
      </div>
    </transition-group>
  </div>
</template>

<script>
import AppLoading from '../components/AppLoading.vue';

export default {
  data() {
    return {
      isActive: false,
      isDeactive: false,
      min: 10,
      max: 1000,
      pricerange: 1000,
    };
  },
  methods: {
    showFilter() {
      this.isActive = true;
      this.isDeactive = false;
    },
    closeFilter() {
      this.isActive = false;
      this.isDeactive = true;
    },
  },
  computed: {
    filteredProducts() {
      return this.$store.state.products.filter((el) => el.price < this.pricerange);
    },
  },
  components: { AppLoading },
};
</script>

<style lang="scss" scoped>
.store {
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  .content {
    height: 100%;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 10px;
    padding: 0 !important;
    .price {
      margin: 1rem;
      font-size: 1.2rem;
    }
    .item {
      max-height: 500px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      margin: 20px 0;
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
    }
  }
}

@media (max-width: 600px) {
  .content {
    width: 100%;
    grid-template-columns: 1fr !important;
  }
}

@media (min-width: 601px) and (max-width: 900px) {
  .content {
    grid-template-columns: repeat(2, 1fr) !important;
  }
}
// aside
.filterbtn {
  position: absolute;
  right: 5%;
}
.filter-container {
  position: fixed;
  top: 0;
  right: 0;
  padding: 1rem;
  width: 300px;
  background: #fafafa;
  height: 100vh;
  display: none;
  .pricebar {
    width: 100%;
  }
  .max {
    float: right;
  }
  .xbtn {
    float: right;
  }
}
.active {
  display: block;
  animation: openFilter 0.2s;
}

.deactive {
  display: block;
  animation: closeFilter 0.2s forwards;
}
@keyframes openFilter {
  0% {
    right: -300px;
  }
  100% {
  }
}
@keyframes closeFilter {
  0% {
  }
  100% {
    right: -300px;
  }
}
</style>
