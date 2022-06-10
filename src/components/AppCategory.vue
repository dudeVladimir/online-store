<template>
  <ul class="category">
    <li
      v-for="c in categoryList"
      :key="c.name"
      :class="[
        'category__item',
        { active: c.name === $store.state.category.selectedCategory },
      ]"
      @click="$emit('setCategory', c.name)"
    >
      <img
        :src="require(`../assets/category/${c.categoryImg}.png`)"
        :alt="c.name"
      />
      <span>{{ c.name }}</span>
    </li>
  </ul>
</template>

<script>
export default {
  emits: ['setCategory'],
  props: {
    categoryList: {
      type: Array,
      required: true,
    },
  },
}
</script>
