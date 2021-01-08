<template>
  <v-container class="grey lighten-5">
    <ul
      v-for="cat in all_categories" 
      :key="cat.id"
    >

    
    <v-row
      v-if="cat.available"
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
          v-bind:src = cat.image 
        >
        </v-img>

        <v-card-subtitle class="pb-0 blue-grey--text">{{ cat.name }}</v-card-subtitle>

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

                <ul
                  v-for="product in cat.products"
                  :key="product.id"
                >
                <v-list-item
                  v-if="product.available"
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
                </ul>

              </v-list-item-group>
            </v-list>
        </v-card-text>
        <router-view/>
      </v-card>
      </v-col>
      </keep-alive>
    </v-row>
   
    </ul>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';


export default {
    name: 'Category',
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
      ...mapActions(['fetchCatergories']),
    },
    computed: mapGetters(['all_categories']),
    created() {
      this.fetchCatergories();
    },
}
</script>

<style>

</style>