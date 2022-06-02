<template>
  <button
    :class="[
      'btn',
      { primary: type === 'primary' },
      { danger: type === 'danger' },
    ]"
  >
    {{ value }}
  </button>
</template>

<script>
export default {
  props: {
    type: { type: String },
    value: { type: String, required: true },
  },
}
</script>

<style></style>
