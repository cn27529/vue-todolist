<template>
  <div>
    <ul>
      <li v-for="(todo, id) in todos" v-bind:key="id">
        <TodoItem v-bind:todo="todo" v-on:del-todo="$emit('del-todo', todo.id)" />
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
  margin: 0px;
}
ul {
  list-style-type: circle;
  margin-top: 0;
}
</style>
