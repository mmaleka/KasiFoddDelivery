<template>
  <v-app>
    <NavBar />
    <BottomNav />
    <v-content>
    </v-content>
  </v-app>
</template>

<script>
import NavBar from './components/NavBar';
import BottomNav from './components/BottomNav';

export default {
  name: 'App',

  components: {
    NavBar,
    BottomNav,
  },

  data: () => ({
    //
  }),
};
</script>
