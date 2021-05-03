<template>
  <div>
    <div v-if="isLoading"></div>
    <div v-else>
      <Nuxt />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return { isLoading: true }
  },
  fetch() {
    this.isLoading = false
  },
})
</script>

<style scoped></style>
