<template>
  <v-container class="grey lighten-5">
    <v-row
      v-for="rest in all_resturants" :key="rest.id"
      class="mb-6"
      justify="center"
      no-gutters
    >
      <keep-alive>
      <v-col class="blue-grey--text">
      <v-card
        class="mx-auto"
        max-width="400"
      >
        <v-img
          class="black white--text align-end"
          height="200px"
          v-bind:src = rest.image 
        >
        </v-img>

        <v-card-subtitle class="pb-0 blue-grey--text">{{ rest.name }}</v-card-subtitle>

        <v-card-text class="text--primary">
            <!-- <div>User {{ $route.params.id }}</div> -->
            <v-list
              :disabled="disabled"
              :dense="dense"
              :two-line="twoLine"
              :three-line="threeLine"
              :shaped="shaped"
              :flat="flat"
              :subheader="subheader"
              :sub-group="subGroup"
              :nav="nav"
              :avatar="avatar"
              :rounded="rounded"
            >
              <v-list-item-group color="primary">
                <v-list-item
                  v-for="product in rest.products"
                  :key="product.id"
                >
                  <v-list-item-content>
                    <router-link 
                    style="text-decoration: none; color: inherit;"
                    :to="`/product_detail/${product.id}`"
                    >
                      <v-list-item-title >{{ product.name }}</v-list-item-title>
                      <v-list-item-subtitle v-if="twoLine || threeLine" v-html="product.description"></v-list-item-subtitle>
                      <v-list-item-title >R {{ product.price }}</v-list-item-title>
                      <v-divider></v-divider>
                    </router-link>
                  </v-list-item-content>
                </v-list-item>
              </v-list-item-group>
            </v-list>
        </v-card-text>
        <router-view/>
      </v-card>
      </v-col>
      </keep-alive>
    </v-row>
   
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';


export default {
    name: 'Resturants',
    components: {
      // ProductList,
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
    }),
    
    methods: {
      ...mapActions(['fetchResturants']),
    },
    computed: mapGetters(['all_resturants']),
    created() {
      this.fetchResturants();
    },
}
</script>

<style>

</style>