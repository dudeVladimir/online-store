<template>
  <button
    :class="[
      'btn',
      { primary: type === 'primary' },
      { danger: type === 'danger' },
    ]"
    @click.stop="$emit('clickHandler')"
  >
    {{ value }}
  </button>
</template>

<script>
export default {
  emits: ['clickHandler'],
  props: {
    type: { type: String },
    value: { type: String, required: true },
  },
}
</script>

<style></style>
