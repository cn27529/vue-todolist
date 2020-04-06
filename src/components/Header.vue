<template>
    <header class="header">
        <h1>{{ subject }}</h1>
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
    </header>
</template>

<script>
export default {
  name: 'Header',
  props: {
    subject: String
  }
};
</script>

<style scoped>
.header {
  background: #333333;
  color: #ffffff;
  text-align: center;
  padding: 1px;
  padding-bottom: 20px;
}

.header a {
  color: #ffffff;
  padding: 5px 5px 5px 5px;
  text-decoration: none;
}
</style>

