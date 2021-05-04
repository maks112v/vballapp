<template>
  <div class="container max-w-2xl px-2 py-5">
    <div v-if="isInLine">
      <p>You are {{ isInLine }} line</p>
    </div>
    <JoinLine v-else />
    <TeamCard v-for="team in line" :key="team.id" v-bind="team" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  layout: 'withAuth',
  head: {
    title: 'Schedule Stuff',
  },
  data(): { isLoading: boolean; line: any[]; isInLine: number | null } {
    return {
      isLoading: false,
      line: [],
      isInLine: null,
    }
  },
  created() {
    this.$fire.firestore.collection('line').onSnapshot((snap) => {
      let fullLine: any = []
      snap.docs?.forEach((doc) => {
        fullLine.push({ id: doc.id, ...doc.data() })
      })
      this.line = fullLine
    })
  },
  watch: {
    line: function (newLine) {
      const userId = this.$fire.auth.currentUser?.uid
      newLine.forEach((item, index) => {
        console.log(item)
        if (item?.user === userId) {
          console.log(index)
          this.isInLine = index + 1
        }
      })
    },
  },
})
</script>

<style></style>
