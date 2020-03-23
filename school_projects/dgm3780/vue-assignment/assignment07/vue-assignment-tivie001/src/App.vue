<template>
  <v-app id="app">
    <v-app-bar app clipped-left>
        <v-toolbar-title>Pomodoro App</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-subheader>Total Pomodoros Completed: {{ totalPomodoros }}</v-subheader>
    </v-app-bar>

    <v-content>
          <Header />
        <v-layout>
          <Table />
        </v-layout>
    </v-content>

    <v-footer app>
      <span>&copy; Tyler Ivie &bull; DGM 3780</span>
    </v-footer>
  </v-app>
</template>

<script>
// import Header from './components/Header';

import Header from "./components/Header";
import Table from "./components/Table";
export default {
  name: 'App',

  components: {
    Table,
    Header,
  },

  data: () => ({
    drawer: null,
  }),
  computed: {
      totalPomodoros () {
          return this.$store.state.totalCompleted;
      }
  }
};
</script>
<style>
</style>
