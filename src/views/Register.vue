<template>
  <div>
      <RegisterComp v-on:sign-in="newRegister" />
  </div>
</template>

<script>
import RegisterComp from '@/components/RegisterComp';


export default {
  name: 'Register',
  components: {
    RegisterComp,
  },
  methods: {
    newRegister: function(registerdata) {
        this.$store.dispatch('newRegister', registerdata)
      },
  },
}
</script>

<style>

</style>