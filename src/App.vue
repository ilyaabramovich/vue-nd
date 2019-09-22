<template>
  <v-app>
    <Navbar :auth="this.$root.$data.auth" @logout="logout" />
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import Navbar from './components/Navbar.vue';

export default {
  name: 'App',
  components: { Navbar },
  methods: {
    logout() {
      this.$root.$data.auth = false;
      localStorage.removeItem('user');
      this.$router.push('/login');
    },
  },
};
</script>
