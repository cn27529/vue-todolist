<template>
    <header class="header">
        <h1>{{ subject }}</h1>
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
  padding: 5px;
}

.header a {
  color: #ffffff;
  padding-right: 5px;
}
</style>

