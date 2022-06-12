<template>
  <div class="order-result" v-if="order.length !== 0">
    <form class="order-result__order-form" @submit.prevent="onSubmit">
      <div :class="['form-control', { danger: aError }]">
        <label for="adress">Адрес</label>
        <input
          type="text"
          placeholder="Город, улица, номер дома, квартира, индекс"
          id="adress"
          v-model="adress"
          @blur="aBlur"
        />
        <small v-if="aError">{{ aError }}</small>
      </div>
      <div :class="['form-control', { danger: pError }]">
        <label for="phone">Телефон для связи</label>
        <input
          type="text"
          placeholder="+7(999)999-99-99"
          id="phone"
          v-model="phone"
          @blur="pBlur"
        />
        <small v-if="pError">{{ pError }}</small>
      </div>
      <div class="order-result__price">
        Общая сумма:
        <span class="order-result__price_count">{{ totalPrice }} $</span>
      </div>
      <AppButton value="Оформить заказ" :isSubmit="true" />
    </form>
    <transition-group tag="ul" name="list" class="cart">
      <li
        class="cart__item"
        v-for="item in order"
        :key="item.id"
        @click="$router.push(`${item.id}`)"
      >
        <img :src="item.image" :alt="item.title" />
        <div class="item">
          <div class="item-info">
            <span class="item-title">{{ item.title }}</span>
            <span class="item-price"
              >{{ item.price }}$ &times; {{ item.count }} =
              {{ (item.price * item.count).toFixed(2) }}$</span
            >
          </div>
          <div class="item-btn">
            <AppButton
              type="primary"
              value="Добавить"
              @clickHandler="$store.commit('cart/addItem', item)"
            />
            <AppButton
              value="Удалить"
              type="danger"
              @clickHandler="$store.commit('cart/removeItem', item.id)"
            />
          </div>
        </div>
      </li>
    </transition-group>
  </div>

  <span v-else>
    Корзина пуста,
    <router-link class="to" to="/">вернуться на главную</router-link>
  </span>
</template>

<script>
import AppButton from './UI/AppButton.vue'
import * as yup from 'yup'
import { useField, useForm } from 'vee-validate'
import { computed } from '@vue/runtime-core'
import { useStore } from 'vuex'

export default {
  setup() {
    const store = useStore()

    const { handleSubmit, isSubmitting } = useForm()

    const {
      value: adress,
      errorMessage: aError,
      handleBlur: aBlur,
    } = useField(
      'adress',
      yup
        .string()
        .trim()
        .min(5, 'Минимальное количество символов - 5')
        .required('Это поле обязательно!')
    )

    const {
      value: phone,
      errorMessage: pError,
      handleBlur: pBlur,
    } = useField(
      'phone',
      yup
        .string()
        .trim()
        .min(11, 'Минимальное количество символов - 11')
        .required('Это поле обязательно!')
    )

    const totalPrice = computed(() => store.getters['cart/totalPrice'])

    const onSubmit = handleSubmit(async (values) => {
      await store.dispatch('cart/createOrder', {
        ...values,
        date: new Date().toLocaleString(),
        order: JSON.parse(localStorage.getItem('order')),
      })
    })

    return {
      order: computed(() => store.getters['cart/order']),
      totalPrice,
      phone,
      pError,
      pBlur,
      adress,
      aError,
      aBlur,
      onSubmit,
    }
  },
  components: { AppButton },
}
</script>

<style>
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
