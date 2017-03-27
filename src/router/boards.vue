<template>
  <div class="boards">
    <h3>个人看板</h3>
    <router-link tag="div" :to="{name: 'list', params: {boardId: b.id}}" class="board" v-for="b in boards" key="id">{{b.name}}</router-link>
  </div>
</template>
<script>
export default {
  name: 'boards',
  data() {
    return {
      boards: []
    }
  },
  created() {
    if (!localStorage.token) { // have no token
      this.$router.replace('login')
    }
    this.trell.setToken(localStorage.token)
    this.trell.get('/members/me', {
      boards: 'all',
      board_fields: 'name'
    }).then((res) => {
      this.boards = res.boards
    })
  }
}
</script>
<style lang="sass">
.boards
  padding: 0 10px
  .board
    height: 80px;
    background-color: #2196F3;
    border-radius: 4px;
    color: white;
    padding: 0 10px;
    margin-bottom: 10px;

</style>
