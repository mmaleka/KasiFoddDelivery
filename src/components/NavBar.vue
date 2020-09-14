<template>
  <div>
    
    <v-main>

    
    <v-app-bar
      color="#a67650"
      dense
      dark
      app
    >
        <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

        <v-toolbar-title>
            <span class="font-weight-light">KasiFood</span>
            <span>Delivery</span>
        </v-toolbar-title>

        <v-spacer></v-spacer>

        
        <router-link 
        class="router_link" 
        to="/checkout"
        >
            <v-btn class="pr-10 pt-5" icon>
                <v-badge
                color="green"
                :content="`${ user_cart_sum }`"
                >

                <v-icon>mdi-cart</v-icon>
                </v-badge>
            </v-btn>
        </router-link>
        


    </v-app-bar>

    <v-navigation-drawer v-model="drawer" app class="">
        <v-list-item>
            <v-list-item-content>
            <v-list-item-title>
                hi {{ $store.getters.userName1 }}
            </v-list-item-title>
            </v-list-item-content>
        </v-list-item>
        <v-divider></v-divider>
        <v-list-item>
            <v-list-item-content>
                <router-link 
                class="router_link" 
                to="/"
                >
                    <v-btn color="" dark>Home</v-btn>
                </router-link>
                <router-link 
                class="router_link" 
                to="/register"
                >
                    <v-btn color="" dark>Register</v-btn>
                </router-link>
                <router-link 
                class="router_link" 
                to="/login"
                >
                    <v-btn color="" dark>Login</v-btn>
                </router-link>
                <router-link 
                class="router_link" 
                to="/checkout"
                >
                    <v-btn color="warning" dark>My Orders {{ user_cart_sum }} Items</v-btn>
                </router-link>
            </v-list-item-content>
        </v-list-item>
    </v-navigation-drawer>

    
    <router-view/>


    </v-main>
  </div>
</template>
<script>

import { mapGetters, mapActions } from 'vuex';
import VueJwtDecode from 'vue-jwt-decode';


export default {
    name: 'NavBar',
    components: {
        
    },
    data() {
        return {
            drawer: false
        }
    },
    methods: {
        ...mapActions(['fetchCartDetails']),
    },
    computed: mapGetters(['userjwt', 'user_cart', 'user_cart_sum']),
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