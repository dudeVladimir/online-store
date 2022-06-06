<template>
  <AppPageTitle title="Категории" />
  <app-loader v-if="loadingCat" />
  <app-category :category-list="categoryList" @setCategory="loadByCat" v-else />

  <div class="all-things" v-if="$store.state.category.selectedCategory !== ''">
    <app-loader v-if="loading" />
    <app-things v-else :things="things" :showBtn="true" />
  </div>
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
    const loadingCat = ref(true)

    onMounted(async () => {
      store.commit('setThings', [])
      loadingCat.value = true
      await store.dispatch('category/loadCategory')
      loadingCat.value = false
    })

    const loadByCat = async (category) => {
      loading.value = true
      await store.dispatch('category/loadByCategory', category)
      loading.value = false
    }

    if (store.state.category.selectedCategory !== '') {
      loadByCat(store.state.category.selectedCategory)
    }

    return {
      categoryList: computed(() => store.state.category.categoryList),
      loading,
      loadingCat,
      loadByCat,
      things: computed(() => store.state.things),
    }
  },
  components: { AppPageTitle, AppCategory, AppThings, AppLoader },
}
</script>
