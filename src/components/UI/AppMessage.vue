<template>
  <transition name="message">
    <div
      :class="['message', { danger: message.title === 'ошибка' }]"
      v-if="message"
    >
      <img src="../../assets/logo.png" alt="logo" />
      <div>
        <h2>{{ message.title }}</h2>
        <span>{{ message.body }}</span>
      </div>
      <span
        class="message__close"
        @click="$store.commit('message/clearMessage')"
        >&times;</span
      >
    </div>
  </transition>
</template>

<script>
import { computed } from '@vue/runtime-core'
import { useStore } from 'vuex'

export default {
  setup() {
    const store = useStore()

    return {
      message: computed(() => store.getters['message/message']),
    }
  },
}
</script>
