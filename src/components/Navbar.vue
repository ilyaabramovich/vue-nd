<template>
<nav>
      <v-toolbar>
      <v-toolbar-title>Demo app</v-toolbar-title>
        <div class="flex-grow-1"></div>
      <v-toolbar-items >
        <v-btn text to="/">Home</v-btn>
        <v-btn v-if="auth" text @click="$emit('logout')">Logout</v-btn>
        <v-btn v-else text to="/login">Log in</v-btn>
      </v-toolbar-items>
    </v-toolbar>
</nav>
</template>

<script>
export default {
  name: 'Navbar',
  props: {
    auth: {
      type: Boolean,
      required: true,
    },
  },
};
</script>
