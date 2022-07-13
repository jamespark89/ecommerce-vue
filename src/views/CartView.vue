<template>
  <div class="cart">
    <h1>Your cart</h1>
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
            <button @click="removeOneFromCart(item)">-</button>
            <strong style="margin: 1rem"> {{ item.quantity }}</strong>
            <button @click="addOneToCart(item)">+</button>
          </td>
          <td>${{ item.quantity * item.price }}</td>
          <td>
            <button @click="removeAllFromCart(item)" class="delete-product">x</button>
          </td>
        </tr>
      </table>
    </section>

    <section v-else class="center">
      <p style="margin-top: 24px">Your cart is empty, fill it up!</p>
      <router-link exact to="/shop"
        ><button style="margin: 24px" class="pay-with-stripe">Go to Shop</button></router-link
      >
    </section>
    <div class="total">
      <div class="list">
        <p>
          <strong>Subtotal:</strong>
        </p>
        <p>Shipping:</p>
        <p class="golden">ToTal:</p>
      </div>
      <div class="num">
        <p>
          <strong>${{ cartTotal }}</strong>
        </p>
        <p>Free Shipping</p>
        <p class="golden">${{ cartTotal }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';

export default {
  computed: {
    ...mapState(['cart']),
    ...mapGetters(['cartTotal']),
  },
  methods: {
    addToCart(item) {
      this.$store.commit('addToCart', item);
    },
    removeAllFromCart(item) {
      this.$store.commit('removeAllFromCart', item);
    },
    removeOneFromCart(item) {
      this.$store.commit('removeOneFromCart', item);
    },
    addOneToCart(item) {
      this.$store.commit('addOneToCart', item);
    },
  },
};
</script>

<style lang="scss" scoped>
.cart {
  width: 80vw;
  text-align: center;
  margin: 1rem;
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
.total {
  float: right;
  width: 50%;
  display: flex;
  justify-content: space-between;

  p {
    margin-top: 1rem;
  }
  .golden {
    background: #f2eee2;
    font-weight: bold;
    padding: 10px;
  }
}
</style>
