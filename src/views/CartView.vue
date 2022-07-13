<template>
  <div class="cart">
    <h1 style="margin-top: 24px">Your cart</h1>
    <section v-if="cart.length > 0">
      <table>
        <tr>
          <th>Product</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Total</th>
          <th></th>
        </tr>
        <tr v-for="item in cart" :key="item.id">
          <td style="width: 600px">
            <img :src="`${item.image}`" :alt="item.title" class="product-img" />
            <h3 class="product-name">{{ item.title }}</h3>
          </td>
          <td>
            <h4 class="price">${{ item.price }}</h4>
          </td>
          <td>
            <strong> {{ item.quantity }}</strong>
          </td>
          <td>${{ item.quantity * item.price }}</td>
          <td>
            <button @click="removeAllFromCart(item)" class="delete-product">x</button>
          </td>
        </tr>
      </table>
    </section>

    <section v-else class="center">
      <p>Your cart is empty, fill it up!</p>
      <button class="pay-with-stripe">
        <router-link exact to="/">Back Home</router-link>
      </button>
    </section>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState(['cart']),
  },
  methods: {
    addToCart(item) {
      this.$store.commit('addToCart', item);
    },
  },
};
</script>

<style lang="scss" scoped>
.cart {
  width: 80vw;
  text-align: center;
}
.product-img {
  float: left;
  width: 100px;
  margin-right: 16px;
}

table {
  width: 100%;
  margin-top: 20px;
}

tr {
  text-align: center;
}

th {
  padding: 10px 0;
}

td,
th {
  border-bottom: 1px solid #ccc;
}
.product-name {
  float: left;
  padding-top: 36px;
}
</style>
