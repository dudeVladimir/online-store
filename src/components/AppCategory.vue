<template>
  <ul class="category">
    <li v-for="c in categoryList" :key="c.name" class="category__item">
      <img :src="c.categoryImg" :alt="c.name" />
      <span>{{ c.name }}</span>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    categoryList: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style></style>
