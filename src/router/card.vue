<template>
<div class="v-card">
  <h4>{{card.name}}</h4>
  <p>{{card.desc}}</p>
</div>
</template>
<script>
export default {
  name: 'card',
  data() {
    return {
      card: {}
    }
  },
  created() {
    this.trell.get(`/cards/${this.$route.params.cardId}`).then((res) => {
      this.card = res
    })
  }
}
</script>
<style lang="sass">
.v-card

</style>
