<template>
  <ul>
    <li v-for="t in things" :key="t.id" @click="$router.push(`${t.id}`)">
      <img :src="t.image" />
      <div>
        <h3>{{ t.title }}</h3>
        <span class="thing__description" v-if="showDescription">{{
          t.description
        }}</span>
        <div>
          <AppButton
            value="В корзину"
            type="primary"
            @clickHandler="addToCart(t)"
            v-if="showBtn"
          />
          <span class="thing__price">{{ t.price }} $</span>
        </div>
      </div>
    </li>
  </ul>
</template>

<script>
import AppButton from './UI/AppButton.vue'

export default {
  props: {
    things: { type: Array },
    showDescription: { type: Boolean },
    showBtn: { type: Boolean },
  },
  setup() {
    const addToCart = (t) => {
      console.log(t)
    }
    return { addToCart }
  },
  components: { AppButton },
}
</script>
