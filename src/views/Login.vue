<template>
  <div>
    <LoginComp v-on:log-in="login" />
  </div>
</template>

<script>
import LoginComp from '@/components/LoginComp';


export default {
  name: 'Login',
  components: {
    LoginComp,
  },
  computed: {
    currentUser() {
      return this.$store.getters.isLoggedIn
    }
  },
  methods: {
    login: function(logindata) {
        let username = logindata.username
        let password = logindata.password
        this.$store.dispatch('obtainToken', { username, password })
        
      },
    testapi: function() {
        this.$store.dispatch('getTestAPI')
      },
  }
}
</script>

<style>

</style>