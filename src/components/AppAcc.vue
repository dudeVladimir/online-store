<template>
  <AppLoader v-if="loading" />
  <div class="account" v-else>
    <pre>{{ acc }}</pre>
    <AppButton type="danger" value="Выйти" @clickHandler="logout" />
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
    }
  },
  components: { AppButton, AppLoader },
}
</script>

<style></style>
