<template>
  <form @submit.prevent="onSubmit">
    <div class="auth-form">
      <div :class="['form-control', { danger: eError }]">
        <label for="email">Электронная почта</label>
        <input
          type="text"
          placeholder="Email"
          id="email"
          v-model="email"
          @blur="eBlur"
        />
        <small v-if="eError">{{ eError }}</small>
      </div>
      <div :class="['form-control', { danger: pError }]">
        <label for="password">Пароль</label>
        <input
          :type="show ? 'text' : 'password'"
          placeholder="Пароль"
          autocomplete="on"
          id="password"
          v-model="password"
          @blur="pBlur"
        />
        <div class="password__mask" @click="show = !show">
          <img src="../assets/hide_icon.png" alt="Показать пароль" />
        </div>
        <small v-if="pError">{{ pError }}</small>
      </div>
      <div class="auth-form__btn-box">
        <app-button
          value="Войти"
          type="primary"
          :isSubmit="true"
          :isDisabled="isSubmitting || eError || pError"
        />
        <slot />
      </div>
    </div>
  </form>
</template>

<script>
import AppButton from './UI/AppButton.vue'
import { useLoginForm } from '@/use/login-form'

export default {
  setup() {
    return { ...useLoginForm() }
  },
  components: { AppButton },
}
</script>

<style></style>
