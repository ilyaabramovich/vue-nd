<template>
  <v-app>
    <v-toolbar dense>
      <v-toolbar-title>Demo app</v-toolbar-title>
        <div class="flex-grow-1"></div>
      <v-toolbar-items v-if="!isLogin">
        <v-btn text to="/">Home</v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  computed: {
    isLogin() {
      return this.$route.name === 'Login';
    },
  },
};
</script>
