<template>
  <AppPageTitle title="Категории" />
  <app-loader v-if="loading" />
  <app-category :category-list="categoryList" v-else />
  <app-things />
</template>

<script>
import AppPageTitle from '@/components/UI/AppPageTitle.vue'
import AppCategory from '@/components/AppCategory.vue'
import AppThings from '@/components/AppThings.vue'
import AppLoader from '@/components/UI/AppLoader.vue'

import { computed, onMounted, ref } from '@vue/runtime-core'
import { useStore } from 'vuex'

export default {
  setup() {
    const store = useStore()
    const loading = ref(true)

    onMounted(async () => {
      loading.value = true
      await store.dispatch('category/loadCategory')
      loading.value = false
    })

    return {
      categoryList: computed(() => store.state.category.categoryList),
      loading,
    }
  },
  components: { AppPageTitle, AppCategory, AppThings, AppLoader },
}
</script>
