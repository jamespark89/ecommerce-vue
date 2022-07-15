<template>
  <div class="product">
    <section class="img-container">
      <img :src="`${product.image}`" alt="" />
    </section>
    <section class="product-info">
      <h1 style="margin-top: 1rem">{{ product.title }}</h1>
      <h2 class="price" style="margin-top: 1rem">${{ product.price }}</h2>
      <p style="font-size: 1.2rem; margin-top: 1rem">{{ product.description }}</p>
      <div class="quantity" style="margin-top: 1rem">
        <button @click="this.quantity > 0 ? this.quantity-- : (this.quantity = 0)">-</button>
        <strong style="margin: 1rem"> {{ quantity }}</strong>
        <button @click="this.quantity++">+</button>
      </div>
      <button style="font-size: 1.2rem; margin-top: 1rem" class="button purchase" @click="cartAdd">
        Add to Cart
      </button>
    </section>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  data() {
    return {
      id: this.$route.params.id,
      quantity: 1,
    };
  },
  computed: {
    ...mapState(['products']),
    product() {
      return this.products.find((el) => el.id === Number(this.id));
    },
  },
  methods: {
    cartAdd() {
      let item = this.product;
      item = {
        ...item,
        quantity: this.quantity,
      };
      this.$store.commit('addToCart', { ...item });
    },
  },
};
</script>

<style lang="scss" scoped>
.product {
  display: flex;
  width: 80%;
  margin: 1rem auto 1rem auto;
}
.img-container {
  width: 400px;
}
img {
  max-width: 100%;
  height: 100%;
  max-height: 300px;
}
.product-info {
  width: 50%;

  margin-left: 2rem;
}
@media (max-width: 600px) {
  .product {
    flex-direction: column;
  }
  .img-container {
    width: 80%;
    height: auto;
  }
  .product-info {
    width: 90%;
    margin: 0;
  }
}
</style>
