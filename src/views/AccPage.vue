<template>
  <AppPageTitle title="Аккаунт" />
  <AppButton type="danger" value="Выйти" @clickHandler="logout" />
</template>

<script>
import AppPageTitle from '@/components/UI/AppPageTitle.vue'
import AppButton from '@/components/UI/AppButton.vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'

export default {
  setup() {
    const router = useRouter()
    const store = useStore()

    return {
      logout: () => {
        store.commit('auth/logout')
        router.push('/')
      },
    }
  },
  components: { AppPageTitle, AppButton },
}
</script>
