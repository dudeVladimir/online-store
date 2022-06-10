<template>
  <teleport to="body">
    <header>
      <TheNavbar></TheNavbar>
    </header>
  </teleport>
  <main>
    <AppMessage />
    <router-view></router-view>
  </main>
</template>

<script>
import TheNavbar from './components/TheNavbar.vue'
import AppMessage from './components/UI/AppMessage.vue'

export default {
  components: { TheNavbar, AppMessage },
}
</script>
