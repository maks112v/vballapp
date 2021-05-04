<template>
  <div class="container">
    <div v-if="isInLine">
      <p>You are in line</p>
    </div>
    <div v-else><JoinLine /></div>
    <div>
      <TeamCard v-for="team in line" :key="team.id" v-bind="team" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  layout: 'withAuth',
  head: {
    title: 'Schedule Stuff',
  },
  data(): { isLoading: boolean; line: any[]; isInLine: boolean } {
    return {
      isLoading: false,
      line: [],
      isInLine: false,
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
      console.log(newLine?.indexOf((item: any) => item?.user === userId))
      this.isInLine = !!newLine?.find((item: any, index) =>
        item?.user === userId ? index : null
      )
    },
  },
})
</script>

<style></style>
