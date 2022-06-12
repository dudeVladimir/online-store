<template>
  <AppLoader v-if="loading" />
  <div class="account" v-else>
    <div class="account__info">
      <div class="name">{{ acc.name }}</div>
      <AppButton type="danger" value="Выйти" @clickHandler="logout" />
    </div>
    <ul class="account__orders" v-if="orders">
      <li v-for="(order, idx) in orders" :key="order.id" class="account__order">
        <span>{{ idx + 1 }}. Дата оформления: {{ order.date }}</span>
        <span>Адрес доставки: {{ order.adress }}</span>
        <span>Телефон для связи: {{ order.phone }}</span>
        <div>
          Цена заказа:
          <span class="order__price">{{ order.totalPrice }} $</span>
        </div>
        <ul class="account__items">
          <li class="account__item" v-for="item in order.order" :key="item.id">
            <img :src="item.image" :alt="item.title" />
            <span>
              {{ item.title }} &times; {{ item.count }} =
              {{ item.count * item.price }} $
            </span>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
import AppLoader from './UI/AppLoader.vue'
import AppButton from '@/components/UI/AppButton.vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import { computed, onMounted, ref } from '@vue/runtime-core'

export default {
  setup() {
    const router = useRouter()
    const store = useStore()

    const loading = ref(true)

    onMounted(async () => {
      loading.value = true
      await store.dispatch('acc/loadAccInfo')
      loading.value = false
    })

    return {
      logout: () => {
        store.commit('auth/logout')
        router.push('/')
      },
      acc: computed(() => store.getters['acc/acc']),
      loading,
      orders: computed(() => store.getters['acc/orders']),
    }
  },
  components: { AppButton, AppLoader },
}
</script>

<style></style>
