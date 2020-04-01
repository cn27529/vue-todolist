<template>
  <div>
    <ul>
      <li v-for="(todo, id) in todos" v-bind:key="id">
        <h3>
          {{ todo.title }}
        </h3>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Todos',
  props: ['todos']
}
</script>

<style scoped>
h3 {
  margin: 10px;
}
ul {
  list-style-type: circle;
}
</style>
