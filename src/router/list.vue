<template>
<div class="v-lists">
  <div class="wrap" :style="{width: lists.length * 280 + 'px'}">
    <div class="v-list" v-for="l in lists">
      <ul class="cards">
        <h4>{{l.name}}</h4>
        <li v-for="c in l.cards" class="card">{{c.name}}</li>
      </ul>
    </div>
  </div>
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
  width: 100%;
  overflow: auto;
  .wrap
    width: 600px
    height: calc(100vh - 40px)
    display: flex
    padding: 10px
  .v-list
    flex: 1
    .cards
      background: #E2E4E6;
      border-radius: 6px;
      padding: 8px;
      list-style: none;
      margin-right: 8px;
      .card:last-child
        margin: 0
    .card
      background-color: white;
      border-radius: 5px;
      padding: 4px;
      margin-bottom: 6px;
    h4
      margin: 0

</style>
