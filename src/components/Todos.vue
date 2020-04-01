<template>
  <div>
    <h1>Todos</h1>
    <div for="todo in todos">
        <h3>{{ todo.title }}</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Todos',
  props: ['todos']
};
</script>

<style scoped></style>
