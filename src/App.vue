<template>
  <v-app>
    <Navbar :auth="auth" @logout="logout" />
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
  computed: mapState(['auth']),
  methods: {
    logout() {
      this.$store.dispatch('logout');
    },
  },
};
</script>
