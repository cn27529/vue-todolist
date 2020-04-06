<template>
  <div>
    <ul>
      <li v-for="(todo, id) in todos" v-bind:key="id">
        <TodoItem v-bind:todo="todo" />
      </li>
    </ul>
  </div>
</template>

<script>
import TodoItem from './TodoItem';

export default {
  name: 'Todos',
  components: {
    TodoItem
  },
  props: ['todos']
};
</script>

<style scoped>
h3 {
  margin: 10px;
}
ul {
  list-style-type: circle;
}
</style>
