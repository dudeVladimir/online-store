<template>
  <AppPageTitle :title="isSign ? 'Регистрация' : 'Вход'" />

  <SigninComponent v-if="isSign">
    <app-button value="На страницу входа" @clickHandler="isSign = !isSign" />
  </SigninComponent>

  <LoginComponent v-else>
    <app-button value="Зарегистрироваться" @clickHandler="isSign = !isSign" />
  </LoginComponent>
</template>

<script>
import AppPageTitle from '@/components/UI/AppPageTitle.vue'
import LoginComponent from '@/components/LoginComponent.vue'
import SigninComponent from '@/components/SigninComponent.vue'
import AppButton from '@/components/UI/AppButton.vue'
import { ref } from '@vue/reactivity'

export default {
  setup() {
    const isSign = ref(false)
    return { isSign }
  },
  components: { AppPageTitle, LoginComponent, SigninComponent, AppButton },
}
</script>
