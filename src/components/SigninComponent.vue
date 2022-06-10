<template>
  <form @submit.prevent="onSubmit">
    <div class="auth-form">
      <div :class="['form-control', { danger: nError }]">
        <label for="name">Имя</label>
        <input
          type="text"
          placeholder="Имя"
          id="name"
          v-model="name"
          @blur="nBlur"
        />
        <small v-if="nError">{{ nError }}</small>
      </div>

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
          @blur="eBlur"
        />
        <div class="password__mask" @click="show = !show">
          <img src="../assets/hide_icon.png" alt="Показать пароль" />
        </div>
        <small v-if="pError">{{ pError }}</small>
      </div>

      <div :class="['form-control', { danger: pSError }]">
        <label for="passwordSec">Повторите пароль</label>
        <input
          :type="show ? 'text' : 'password'"
          placeholder="Пароль"
          autocomplete="on"
          id="passwordSec"
          v-model="passwordSec"
        />
        <div class="password__mask" @click="show = !show">
          <img src="../assets/hide_icon.png" alt="Показать пароль" />
        </div>
        <small v-if="pSError">{{
          pSError ? 'Введенный пароль не совпадает' : ''
        }}</small>
      </div>

      <div class="auth-form__btn-box">
        <slot />
        <app-button
          :isSubmit="true"
          value="Зарегистрироваться"
          type="primary"
          :isDisabled="isSubmitting || eError || nError || pError || pSError"
        />
      </div>
    </div>
  </form>
</template>

<script>
import { useSigninForm } from '@/use/signin-form'
import AppButton from './UI/AppButton.vue'

export default {
  setup() {
    return {
      ...useSigninForm(),
    }
  },
  components: { AppButton },
}
</script>

<style></style>
