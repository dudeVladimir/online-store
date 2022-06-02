<template>
  <AppPageTitle title="Все товары" />
  <AppThings :things="things" />
</template>

<script>
import axios from 'axios'
import AppThings from '@/components/AppThings.vue'
import AppPageTitle from '@/components/UI/AppPageTitle.vue'
import { useStore } from 'vuex'
import { computed } from '@vue/runtime-core'

export default {
  setup() {
    const store = useStore()

    return {
      things: computed(() => store.getters.things),
    }
  },
  components: { AppThings, AppPageTitle },
}
</script>
