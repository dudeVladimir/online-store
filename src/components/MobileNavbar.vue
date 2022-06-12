<template>
  <nav class="mobile">
    <router-link to="/"
      ><img src="../assets/nav/home.png" alt="home"
    /></router-link>
    <router-link to="/category"
      ><img src="../assets/nav/cat.png" alt="category"
    /></router-link>
    <router-link to="/cart"
      ><img src="../assets/nav/cart.png" alt="cart" id="cart" />
      <span v-if="count" class="nav__count">{{ count }}</span></router-link
    >
    <router-link to="/acc"
      ><img src="../assets/nav/acc.png" alt="account"
    /></router-link>
    <a href="https://github.com/dudeVladimir/online-store" target="_blank"
      ><img src="../assets/nav/git.png" alt="github"
    /></a>
  </nav>
</template>

<script>
import { computed } from '@vue/runtime-core'
import { useStore } from 'vuex'
export default {
  setup() {
    const store = useStore()
    return {
      count: computed(() => store.getters['cart/order'].length),
    }
  },
}
</script>

<style></style>
