<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <h2>{{title}}</h2>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Personal',
  props: {
    title: {
      type: String,
      required: true,
    },
  },
};
</script>
