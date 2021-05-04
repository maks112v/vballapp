<template>
  <div v-if="isSubmitted">
    <p>You are in the line</p>
  </div>
  <div v-else-if="isLoading">
    <p>Jumping into que</p>
  </div>
  <div v-else>
    <button @click="joinLine">Join Line</button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data(): { isLoading: boolean; isSubmitted: boolean } {
    return {
      isLoading: false,
      isSubmitted: false,
    }
  },
  methods: {
    async joinLine() {
      try {
        this.isLoading = true
        await this.$fire.firestore.collection('line').add({
          user: this.$fire.auth.currentUser?.uid,
          name: this.$fire.auth.currentUser?.displayName,
          joined: new Date().toISOString(),
        })
        this.isSubmitted = true
      } catch (err) {
        this.isSubmitted = false
      } finally {
        this.isLoading = false
      }
    },
  },
})
</script>

<style scoped></style>
