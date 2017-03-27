<template>
  <form class="form login">
    <input type="text" v-model="token" placeholder="Enter your token"/>
    <input class="btn btn-primary btn-block" type="submit" value="OK" @click="setToken"/>
  </form>
</template>
<script>
export default {
  name: 'login',
  data() {
    return {
      token: ''
    }
  },
  methods: {
    setToken() {
      localStorage.token = this.token
      this.trell.setToken(this.token)
      this.$router.push('/')
    }
  }
}
</script>
<style lang="sass">
.login
  margin: 0 10px
</style>
