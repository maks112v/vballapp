<template>
  <div class="w-full p-3 rounded bg-gray-50">
    <h1>{{ name }}</h1>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: ['name'],
  created() {
    // console.log(team)
  },
})
</script>

<style scoped></style>
