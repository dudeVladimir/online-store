<template>
  <nav class="header__nav">
    <h3>Магазин</h3>
    <div class="header__link">
      <router-link to="/">Главная</router-link>
      <router-link to="/category">Категории</router-link>
      <router-link to="/cart"
        >Корзина
        <span v-if="count" class="nav__count">{{ count }}</span></router-link
      >
      <router-link to="/acc">Аккаунт</router-link>
      <a href="https://github.com/dudeVladimir/online-store" target="_blank"
        >GitHub</a
      >
    </div>
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
