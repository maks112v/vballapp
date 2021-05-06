<template>
  <div
    class="flex flex-col items-center justify-center max-w-md min-h-screen mx-auto animate-pulse"
  >
    <h5 class="text-lg font-semibold">Loading</h5>
    <p class="mt-2 text-gray-700">{{ loadingText }}</p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import lodash from 'lodash'

export default Vue.extend({
  data() {
    return {
      loadingText: lodash.sample(['Warming Up', 'Stretching']),
    }
  },
})
</script>

<style scoped></style>
