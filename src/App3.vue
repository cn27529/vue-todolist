<template>
  <div id="app">
    <Navbar :subject="subject" />
    <router-view />
  </div>
</template>

<script>
import Navbar from './components/Navbar';

export default {
  name: 'App',
  components: {
    Navbar
  },
  data() {
    return {
      subject: 'Todo List'
    };
  }
};
</script>

<style lang="scss">
@import '../node_modules/bootstrap/scss/bootstrap';
</style>
