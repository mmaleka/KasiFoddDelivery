<template>
  <v-container class="grey lighten-5">

    <v-row no-gutters>
      <v-col class="text-center">
        <p class="blue-grey--text">Please give us your details so that we can deliver</p>
      </v-col>
    </v-row>

    <v-divider></v-divider>

    <v-row align="center" justify="center">
        <v-col cols="8">
            <ValidationObserver ref="observer" v-slot="{ }">
                <form>
                <ValidationProvider v-slot="{ errors }" name="cell_number" rules="required">
                    <v-text-field
                    v-model="cell_number"
                    :error-messages="errors"
                    label="cell_number"
                    required
                    ></v-text-field>
                </ValidationProvider>
                <ValidationProvider v-slot="{ errors }" name="delivery_address" rules="required">
                    <v-text-field
                    v-model="delivery_address"
                    :error-messages="errors"
                    label="delivery_address"
                    required
                    ></v-text-field>
                </ValidationProvider>
                <ValidationProvider v-slot="{ errors }" name="comment">
                    <v-text-field
                    v-model="comment"
                    :error-messages="errors"
                    label="comment"
                    required
                    ></v-text-field>
                </ValidationProvider>

                <v-btn 
                block 
                type="submit" 
                @click="placeOrder" 
                value="Submit" 
                color="primary" 
                dark>
                  Place Order
                  <v-progress-circular
                    v-if=$store.getters.complete_cart_loading
                    indeterminate
                    color="purple"
                  ></v-progress-circular>
                </v-btn>
                </form>
            </ValidationObserver>
        </v-col>
    </v-row>


    <v-divider></v-divider>

    <v-row no-gutters>
      <v-col class="text-center">
        <p class="orange--text">whatsap us: 068 094 9256</p>
      </v-col>
    </v-row>
    
    <v-row
      v-for="item in user_cart.cart_item"
      :key="item.id"
      no-gutters
    >
      <v-col>
      <v-card
        class="mx-auto"
        max-width="400"
      >
        <v-card-text>
          <!-- <div>Word of the Day</div> -->
          <h2 class="blue-grey--text">{{ item.items.name }}</h2>
          <h3 class="grey--text">{{ item.quantity }} Items</h3>
          <h3 class="grey--text">{{ item.items.price }}</h3>
          <div class="text--primary">
            {{ item.items.description }}
          </div>
        </v-card-text>
        <v-card-actions>
          <v-btn
            block 
            @click="RemovefromCart1(item.id)"
            text
            color="red accent-4"
          >
            Remove
          </v-btn>
        </v-card-actions>
      </v-card>
      </v-col>
    </v-row>

    <v-row no-gutters>
      <v-col class="text-end">
        <h3 class="blue-grey--text">Service fee: R {{ user_cart.delivery_fee }}</h3>
      </v-col>
    </v-row>

    <v-row>
      <v-col class="text-end">
        <h2 class="blue-grey--text">Total: R {{ user_cart.get_cart_total }}</h2>
      </v-col>
    </v-row>

    <!-- <v-divider></v-divider>

    <v-row>
      <v-col class="text-center">
        <p class="blue-grey--text">{{ user_cart.cell_number }}</p>
      </v-col>
    </v-row>

    <v-divider></v-divider>

    <v-row>
      <v-col class="text-center">
        <p class="blue-grey--text">{{ user_cart.delivery_address }}</p>
      </v-col>
    </v-row> -->



  </v-container>
  
</template>

<script>
import { required, email, max } from 'vee-validate/dist/rules'
import { extend, ValidationObserver, ValidationProvider, setInteractionMode } from 'vee-validate'
import { mapGetters, mapActions } from 'vuex';
import VueJwtDecode from 'vue-jwt-decode';
// import Vue from 'vue'
// Vue.forceUpdate();

setInteractionMode('eager')

extend('required', {
  ...required,
  message: '{_field_} can not be empty',
})

extend('max', {
  ...max,
  message: '{_field_} may not be greater than {length} characters',
})

extend('email', {
  ...email,
  message: '{_field_} can not be empty',
})

export default {
  name: 'Cart',

  components: {
    ValidationProvider,
    ValidationObserver,
  },

  data: () => ({
        cell_number: '',
        delivery_address: '',
        comment: '',
        completeCartLoading: false,
        componentKey: 0,
    }),

  methods: {
    ...mapActions(['completeCart', 'RemovefromCart', 'getUserLocation']),
    submit () {
      this.$refs.observer.validate()
    },
    RemovefromCart1(item_id){
      let user_id = VueJwtDecode.decode(this.$store.getters.userjwt).user_id
      this.RemovefromCart({ item_id, user_id });
    },
    placeOrder(e){
      this.$refs.observer.validate()
      e.preventDefault();
        const CheckOutData  = {
            cell_number: this.cell_number,
            delivery_address: this.delivery_address,
            comment: this.comment
        }
        // will update the data to the api but still do form validation
        this.$emit('check-out', CheckOutData );
        let user_id = VueJwtDecode.decode(this.$store.getters.userjwt).user_id
        this.fetchCartDetails(user_id);

    },
  },
  computed: mapGetters(['user_cart', 'complete_cart_loading', 'user_location']),

  created() {
      this.getUserLocation();
      this.delivery_address = this.$store.getters.user_location;
  },

  // mounted: function () {
  //   // this.delivery_address = this.$store.getters.user_location;

  //   // this.$nextTick(function () {
  //   //     window.setInterval(() => {
  //   //         console.log(this.delivery_address);
  //   //         console.log(this.$store.getters.user_location);
  //   //         if (this.delivery_address != this.$store.getters.user_location) {
  //   //           console.log("not the same so change");
  //   //           this.delivery_address = this.$store.getters.user_location;
  //   //         }
  //   //     },1000);
  //   // })

  // }

  

}
</script>

<style>

</style>