<template>
  <v-app>
    <Navbar :is-logged-in="isLoggedIn" @logout="onLogout" />
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import { mapState } from 'vuex';
import Navbar from './components/Navbar.vue';

export default {
  name: 'App',
  components: { Navbar },
  computed: mapState(['isLoggedIn']),
  methods: {
    onLogout() {
      this.$store.dispatch('logout');
    },
  },
};
</script>
