<template>
  <div class="px-2 py-4 rounded bg-gray-50">
    <div class="flex flex-col items-center justify-center mb-8">
      <div
        class="px-3 py-1 text-sm font-semibold text-red-900 bg-red-100 rounded-full"
      >
        Current Game
      </div>
      <div class="h-2" />
      <span class="text-sm text-gray-600">Playing to 15</span>
    </div>
    <div class="flex items-center">
      <div class="flex flex-col items-center flex-grow">
        <h3 class="team-name">Team Name</h3>
      </div>
      <div class="flex flex-col items-center px-2">
        <h4 class="mb-3 text-4xl font-semibold">3 : 2</h4>
        <p class="text-gray-600">(2 - 0)</p>
      </div>
      <div class="flex flex-col items-center flex-grow">
        <h3 class="team-name">Team Name</h3>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<style scoped>
.team-name {
  @apply text-xl;
}
</style>
