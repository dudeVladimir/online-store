<template>
  <div class="all-things">
    <ul>
      <li v-for="t in things" :key="t.id">
        <img src="../assets/logo.png" />
        <div>
          <h3>{{ t.title }}</h3>
          <span class="thing__description">{{ t.description }}</span>
          <div>
            <AppButton value="В корзину" type="primary" />
            <span class="thing__price">{{ t.price }} &#8381;</span>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import AppButton from './UI/AppButton.vue'

export default {
  props: {
    things: { type: Array },
  },
  components: { AppButton },
}
</script>
