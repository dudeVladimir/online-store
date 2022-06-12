<template>
  <app-loader v-if="loading" />
  <div class="thing-by-id" v-else>
    <img :src="thing.image" :alt="thing.title" />
    <div>
      <div class="thing-by-id__info">
        <h3>
          {{ thing.title }}
        </h3>
        <small>Категория: {{ thing.category }}</small>

        <span>{{ thing.description }}</span>
      </div>
      <div class="thing-by-id__footer">
        <app-button
          type="primary"
          value="В корзину"
          @clickHandler="$store.commit('cart/addItem', thing)"
        />
        <a href="#" class="to" @click.prevent="$router.go(-1)">Назад</a>
        <span class="thing-by-id__price">{{ thing.price }} $</span>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, onMounted, ref } from '@vue/runtime-core'
import { useStore } from 'vuex'
import AppButton from '@/components/UI/AppButton.vue'
import { useRoute } from 'vue-router'
import AppLoader from '@/components/UI/AppLoader.vue'

export default {
  components: { AppButton, AppLoader },
  setup() {
    const store = useStore()
    const route = useRoute()
    const loading = ref(true)

    onMounted(async () => {
      loading.value = true
      await store.dispatch('thing/loadById', route.params.id)
      loading.value = false
    })

    return { thing: computed(() => store.state.thing.thing), loading }
  },
}
</script>

<style></style>
