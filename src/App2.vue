<template>
  <div id="app">
    <Header :subject="subject" />
    <router-view />
  </div>
</template>

<script>
import Header from './components/Header';

export default {
  name: 'App',
  components: {
    Header
  },
  data() {
    return {
      subject: 'Todo List'
    };
  }
};
</script>


<style>
@import 'https://stackpath.bootstrapcdn.com/bootstrap/4.1.2/css/bootstrap.min.css';

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

* {
  box-sizing: border-box;
  margin-top: 20;
  padding: 0;
}

body {
  font-family: Arial, Helvetica, sans-serif;
  line-height: 1.4;
  margin: 0px;
}

h1 {
  text-align: center;
}
</style>

