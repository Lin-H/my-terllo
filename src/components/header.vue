<template>
<header class="header">
  <img src="https://d78fikflryjgj.cloudfront.net/images/01ef898811a879595cea8ac3cd77a155/header-logo-2x.png" alt="trell">
</header>
</template>
<style lang="sass">
.header
  background: #026AA7;
  height: 40px;
  text-align: left;
  img
    max-height: 100%;

</style>
<script>
export default {
  name: 'header',
  data() {
    return {
      boards: []
    }
  },
  // created() {
  //   this.trell.members().then((data) => {
  //     this.boards = data.idBoards;
  //   })
  // }
}
</script>
