<template>
  <app-page-title title="Все товары" />
  <app-loader v-if="loading" />
  <div class="all-things" v-else>
    <app-things :things="things" :showDescription="true" :showBtn="true" />
  </div>
</template>

<script>
import AppThings from '@/components/AppThings.vue'
import AppPageTitle from '@/components/UI/AppPageTitle.vue'
import AppLoader from '@/components/UI/AppLoader.vue'
import { useStore } from 'vuex'
import { computed, onMounted, ref } from '@vue/runtime-core'

export default {
  setup() {
    const store = useStore()
    const loading = ref(true)

    onMounted(async () => {
      loading.value = true
      await store.dispatch('loadThings')
      loading.value = false
    })

    return {
      things: computed(() => store.getters.things),
      loading,
    }
  },
  components: { AppThings, AppPageTitle, AppLoader },
}
</script>
