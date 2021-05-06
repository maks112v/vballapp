<template>
  <div
    class="flex flex-col items-center justify-center max-w-md min-h-screen mx-auto"
  >
    <h1>Login or Sign up</h1>
    <p class="text-gray-700">Sign in to view and join the game queue.</p>
    <div class="h-5" />
    <button @click="google">Login with Google</button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  head: {
    title: 'Login',
  },
  methods: {
    async google() {
      this.$fire.auth.signInWithRedirect(
        new this.$fireModule.auth.GoogleAuthProvider()
      )
    },
  },
})
</script>

<style scoped>
h1 {
  @apply text-4xl font-semibold mb-3;
}
button {
  @apply border py-1 w-full rounded-full font-semibold hover:shadow duration-200 focus:outline-none;
}
</style>
