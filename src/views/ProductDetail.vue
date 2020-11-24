<template>
  <v-container class="grey lighten-5">
    <v-row
      class="mb-6"
      justify="center"
      no-gutters
    >
      <keep-alive>
      <v-col class="blue-grey--text">
        <v-card
        :loading="loading"
        class="mx-auto my-12"
        max-width="400"
        >

        <v-img
        height="250"
        v-bind:src = product_detail.image 
        ></v-img>

        <v-card-title>{{ product_detail.name }}</v-card-title>

        <v-card-text>
        <v-row
            align="center"
            class="mx-0"
        >
        <v-col
        align="center"
        >
            <p>Quantity: {{ value }}</p>
            <vue-number-input v-model="value" :min="1" :max="10" :inputtable="false" placeholder="Quantity" size="small" inline center controls></vue-number-input>
        </v-col>
        </v-row>

        <v-row
            align="center"
        >
        <v-col cols="12" align="center">
            <v-btn block @click="AddtoCartNo1" :disabled="loading" color="warning" dark>
              Add to Cart
                <v-progress-circular
                  v-if=this.$store.getters.cart_loading
                  indeterminate
                  color="red"
                ></v-progress-circular>
            </v-btn>
        </v-col>
        <v-col cols-sm="12" align="center">
            <v-btn block @click="CheckOutNo1" color="success" dark>Checkout</v-btn>
        </v-col>
        </v-row>
        <v-row
            align="center"
        >
            <v-rating
            :value="4.5"
            color="amber"
            dense
            half-increments
            readonly
            size="14"
            ></v-rating>

            <div class="grey--text ml-4">4.5 (413)</div>
        </v-row>

        <div class="my-4 subtitle-1">
            R {{ product_detail.price }}
        </div>

        <div>{{ product_detail.description }}</div>
        </v-card-text>

        </v-card>
      </v-col>
      </keep-alive>
    </v-row>

    <Comments />
   
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import VueJwtDecode from 'vue-jwt-decode';
import router from '@/router/index.js'
import Comments from '@/components/Comments'


export default {
    name: "ProductDetail",

    components: {
      Comments,
    },

    data: () => ({
      disabled: false,
      dense: true,
      twoLine: true,
      threeLine: false,
      shaped: false,
      flat: false,
      subheader: false,
      inactive: false,
      subGroup: false,
      nav: false,
      avatar: false,
      rounded: false,

      loading: false,
      addCartLoading: false,
      value: 1,

    }),
    methods: {
      ...mapActions(['fetchProductDetail', 'AddtoCart', 'fetchCartDetails']),
      AddtoCartNo1(){
        let prod_id = this.$route.params.id
        let user_id = VueJwtDecode.decode(this.$store.getters.userjwt).user_id
        let user_quantity = this.value
        this.AddtoCart({ prod_id, user_id, user_quantity });
        this.fetchCartDetails(user_id);
      },
      CheckOutNo1() {
        router.push('/checkout')
      }
    },
    computed: mapGetters(['product_detail', 'userjwt', 'user_cart_sum']),
    created() {
      let prod_id = this.$route.params.id
      this.fetchProductDetail(this.$route.params.id);
      let user_id = VueJwtDecode.decode(this.$store.getters.userjwt).user_id
      this.fetchCartDetails(user_id);
      
      this.$store.dispatch('fetchComments', { prod_id })
      // add the user and viewed product by user
      this.$store.dispatch('UserProductView', { prod_id, user_id })
    },
}
</script>

<style scoped>
.v-progress-circular {
  margin: 1rem;
}
</style>