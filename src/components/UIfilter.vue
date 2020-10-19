<template>
  <div>
    <v-container fluid>
      <v-row align="center" justify="center">
        <v-col cols="8">
          <h3 class="blue-grey--text">Filter by:</h3>
        </v-col>
      </v-row>
      <v-row align="center" justify="center">
        <v-col cols="8">
          <router-link 
            class="router_link" 
            to="/resturant"
            >
                <v-btn
                  rounded
                  color="primary"
                  dark
                >
                  Resturant
                </v-btn>
            </router-link>

            <router-link 
            class="router_link" 
            to="/category"
            >
                <v-btn
                  rounded
                  color="primary"
                  dark
                >
                  Food Type
                </v-btn>
            </router-link>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
    name: "UIfilter",
}
</script>

<style>

</style>