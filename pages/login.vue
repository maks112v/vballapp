<template>
  <div>
    <h1>Login</h1>
    <button @click="google">Login with Google</button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import firebase from 'firebase'

export default Vue.extend({
  methods: {
    // google: async () => {
    //   console.log('google ran', this)
    //   // await this.$fire.auth.
    // },
    async google() {
      console.log(
        'google ran',
        this.$fire.auth.signInWithRedirect(
          new firebase.auth.GoogleAuthProvider()
        )
      )
    },
  },
})
</script>

<style></style>
