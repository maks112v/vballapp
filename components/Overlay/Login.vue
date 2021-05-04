<template>
  <div>
    <button @click="google">Login with Google</button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  methods: {
    async google() {
      this.$fire.auth.signInWithRedirect(
        new this.$fireModule.auth.GoogleAuthProvider()
      )
    },
  },
})
</script>

<style></style>
