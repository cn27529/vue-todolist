<template>
  <div id="app">
    <h1>TodoList</h1>
    <Todos v-bind:todos="todos" />
  </div>
</template>

<script>
import Todos from './components/Todos'

export default {
  name: 'App',
  components: {
    Todos
  },
  data() {
    return {
      msg: 'Hello',
      todos: [
        {
          id: 1,
          title: '台灣捐千萬片口罩助防疫 這些國家拿得到',
          content: '',
          completed: false
        },
        {
          id: 2,
          title: '靠人民自律 瑞典「軟防疫」能堵疫情?',
          content: '',
          completed: true
        },
        {
          id: 3,
          title: '2020/04/01 連假前夕抱股意願弱 台股失守9700點',
          content: '',
          completed: false
        }
      ]
    }
  }
}
</script>

<style>
* {
  box-sizing: border-box;
  margin-top: 20;
  padding: 0;
}

body {
  font-family: Arial, Helvetica, sans-serif;
  line-height: 1.4;
}

h1 {
  text-align: center;
}
</style>
