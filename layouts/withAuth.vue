<template>
  <div>
    <div v-if="isLoading">
      <h1>loading</h1>
    </div>
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

export default Vue.extend({
  data() {
    return {
      sub: null,
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

<style scoped></style>
