<template>
  <v-bottom-navigation
    :value="value"
    color="teal"
    fixed
    grow
  >

    <router-link 
      class="router_link" 
      to="/checkout"
      >
      <v-btn>
        <span
        color="orange darken-2"
        >
        {{ user_cart_sum }} items
          <v-icon
          class="ma-2"
          color="orange darken-2"
          >
          mdi-heart
          </v-icon> 
        R {{ user_cart.get_cart_total }}
        </span>
      </v-btn>
    </router-link>

    
  </v-bottom-navigation>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import VueJwtDecode from 'vue-jwt-decode';

export default {
  name: 'BottomNav',
  data: () => ({ value: 1 }),
  methods: {
        ...mapActions(['fetchCartDetails']),
    },

  computed: mapGetters(['user_cart', 'user_cart_sum']),

  created() {
    let user_id = VueJwtDecode.decode(this.$store.getters.userjwt).user_id
    this.fetchCartDetails(user_id);
  },
}
</script>

<style>

.router_link{
    text-decoration: none; color: inherit;
}

</style>