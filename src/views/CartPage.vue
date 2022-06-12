<template>
  <AppPageTitle title="Корзина" />
  <AppCartThings />
</template>

<script>
import AppPageTitle from '@/components/UI/AppPageTitle.vue'
import AppCartThings from '@/components/AppCartThings.vue'

export default {
  components: { AppPageTitle, AppCartThings },
}
</script>
