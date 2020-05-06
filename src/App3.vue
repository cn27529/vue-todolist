<template>
  <div id="app">
    <TopBar :subject="subject" />
    <router-view />
  </div>
</template>

<script>
import TopBar from './components/Header';

export default {
  name: 'App',
  components: {
    TopBar
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
