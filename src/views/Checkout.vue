<template>
  <div>
      <Cart v-on:check-out="checkout" />
  </div>
</template>

<script>
import Cart from '@/components/Cart';
import { mapGetters, mapActions } from 'vuex';
import VueJwtDecode from 'vue-jwt-decode';
// import router from '@/router/index.js'

export default {
    name: 'Checkout',
    components: {
       Cart 
    },
    methods: {
      ...mapActions(['completeCart', 'fetchCartDetails']),
      checkout: function(checkoutdata) {
        let cell_number = checkoutdata.cell_number
        let delivery_address = checkoutdata.delivery_address
        let comment = checkoutdata.comment
        let user_id = VueJwtDecode.decode(this.$store.getters.userjwt).user_id
        this.$store.dispatch('completeCart', { cell_number, delivery_address, comment, user_id })
        
      },
    },
    computed: mapGetters(['userjwt', 'user_cart']),
    created() {
        let user_id = VueJwtDecode.decode(this.$store.getters.userjwt).user_id
        this.fetchCartDetails(user_id);
    },
}
</script>

<style>

</style>