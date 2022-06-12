<template>
  <teleport to="body">
    <header>
      <TheNavbar />
    </header>
    <MobileNavbar />
  </teleport>
  <main>
    <AppMessage />
    <router-view></router-view>
  </main>
</template>

<script>
import TheNavbar from './components/TheNavbar.vue'
import AppMessage from './components/UI/AppMessage.vue'
import MobileNavbar from './components/MobileNavbar.vue'

export default {
  components: { TheNavbar, AppMessage, MobileNavbar },
}
</script>
