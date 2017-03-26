<template>
<div class="v-lists">
  <ul class="v-list" v-for="l in lists">
    <h4>{{l.name}}</h4>
    <li v-for="c in l.cards">{{c.name}}</li>
  </ul>
</div>
</template>
<script>
export default {
  name: 'list',
  data() {
    return {
      lists: []
    }
  },
  created() {
    this.trell.get(`/boards/${this.$route.params.boardId}/lists`, {
      cards: 'all',
      card_fields: 'name'
    }).then(res => {
      this.lists = res;
    })
  }
}
</script>
<style lang="sass">
.v-lists

</style>
