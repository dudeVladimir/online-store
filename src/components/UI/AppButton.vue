<template>
  <button
    :type="isSubmit ? 'submit' : 'button'"
    :class="[
      'btn',
      { primary: type === 'primary' },
      { danger: type === 'danger' },
    ]"
    @click.stop="$emit('clickHandler')"
    :disabled="isDisabled"
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
    isSubmit: { type: Boolean },
    isDisabled: {},
  },
}
</script>

<style></style>
