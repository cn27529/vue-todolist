<template>
  <div id="app">
    <AddTodo @add-todo="addTodo" />
    <Todos
      :todos="todos"
      @del-todo="deleteTodo"
    />
  </div>
</template>

<script>
//import Header from '../components/Header';
import Todos from '../components/Todos';
import AddTodo from '../components/AddTodo';
import axios from 'axios';

export default {
  name: 'Home',
  components: {
    //Header,
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
      //this.todos = this.todos.filter(todo => todo.id !== id);

      const url = `http://localhost:3004/todos/${id}`;
      const httpReqHeaders = {
        Authorization: null,
        'Content-Type': 'application/json'
      };
      // check the structure here: https://github.com/axios/axios#request-config
      const axiosConfigObject = { headers: httpReqHeaders };

      axios
        .delete(url, axiosConfigObject)
        .then(res => {
          console.log('res', res);
          this.todos = this.todos.filter(todo => todo.id !== id);
        })
        .catch(err => console.log(err));
    },
    addTodo(newTodo) {
      console.log('addTodo', newTodo);
      //this.todos = [...this.todos, newTodo];

      const { title, completed } = newTodo;

      axios
        .post('http://localhost:3004/todos', {
          title,
          completed
        })
        .then(res => {
          console.log('res', res);
          this.todos = [...this.todos, res.data];
        })
        .catch(err => console.log(err));
    }
  },
  created() {
    //console.log('created', 'hi created')
    //.get('http://localhost:3004/todos?_limit=10')
    axios
      .get('http://localhost:3004/todos')
      .then(res => {
        console.log('res', res);
        this.todos = res.data;
      })
      .catch(err => console.log(err));
  }
};
</script>

<style>
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
