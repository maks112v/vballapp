<template>
  <div>
    <OverlayLoading v-if="isLoading" />
    <div v-else-if="auth">
      <Nuxt />
    </div>
    <div v-else>
      <OverlayLogin />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import firebase from 'firebase'

export default Vue.extend({
  head: {
    titleTemplate: '%s - Volleyball',
  },
  data(): {
    sub: firebase.Unsubscribe | (() => {})
    isLoading: boolean
    auth: null | firebase.User
  } {
    return {
      sub: () => {},
      isLoading: true,
      auth: null,
    }
  },
  beforeMount() {
    this.sub = this.$fire.auth.onAuthStateChanged((auth) => {
      console.log(auth)
      this.isLoading = false
      this.auth = auth
    })
  },
  beforeDestroy() {
    this.sub()
  },
})
</script>

<style></style>
