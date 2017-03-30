<template>
<div class="v-lists">
  <div class="wrap" :style="{width: lists.length * 280 + 'px'}">
    <div class="v-list" v-for="l in lists">
      <ul class="cards">
        <h4>{{l.name}}</h4>
        <router-link tag="li" v-for="c in l.cards" class="card" :to="{name: 'card', params: {cardId: c.id}}" :key="c.id">{{c.name}}</router-link>
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
    margin-right: 8px
    &:last-child
      margin: 0
    .cards
      background: #E2E4E6;
      border-radius: 4px;
      padding: 8px;
      list-style: none;
      margin: 0;
      .card:last-child
        margin: 0
    .card
      background-color: white;
      border-radius: 4px;
      padding: 4px;
      margin-bottom: 6px;
    h4
      margin: 0 0 6px;

</style>
