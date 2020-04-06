<template>
  <div id="app">
    <Header v-bind:subject="subject" />
    <AddTodo v-on:add-todo="addTodo" />
    <Todos v-bind:todos="todos" v-on:del-todo="deleteTodo" />
  </div>
</template>

<script>
import Header from './components/layout/Header';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import axios from 'axios';

export default {
  name: 'App',
  components: {
    Header,
    Todos,
    AddTodo
  },
  data() {
    return {
      subject: 'Todo List',
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
    };
  },
  methods: {
    deleteTodo(id) {
      console.log('deleteTodo', id);
      this.todos = this.todos.filter(todo => todo.id !== id);
    },
    addTodo(newTodo) {
      console.log('addTodo', newTodo);
      this.todos = [...this.todos, newTodo];
    }
  },
  created() {
    //console.log('created', 'hi created');
    axios
      .get('https://jsonplaceholder.typicode.com/todos')
      .then(res => (this.todos = res.data))
      .catch(err => console.log(err));
  }
};
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
  margin: 0px;
}

h1 {
  text-align: center;
}

.btn {
  display: inline-block;
  border: none;
  background: #555555;
  color: #ffffff;
  padding: 7px 20px;
  cursor: pointer;
}

.btn:hover {
  background: #666666;
}
</style>
