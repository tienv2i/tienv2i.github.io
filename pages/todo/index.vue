<template>
  <b-container class="mt-3">
    <b-row align-h="center">
      <b-col md="12" lg="10">
        <b-form @submit='addItem'>
          <b-input-group>
            <b-form-input placeholder="New todo item here" v-model='newTodo'></b-form-input>
            <b-input-group-append>
              <b-button variant="primary" type='submit'>Add</b-button>
            </b-input-group-append>
          </b-input-group>
        </b-form>
      </b-col>
    </b-row>
    <b-row>
      <b-col v-for="(todo, index) in todoList" :key="index" md="6" lg="4">
        <todo-item :todo="{header: 'Todo '+index, text: todo}" class="mt-3" @remove="todoList.splice(index,1)"></todo-item>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
import TodoItem from '~/components/Todo/TodoItem.vue'
export default {
  data () {
    return {
      todoList: ['todo 1', 'todo 2', 'todo 3', 'todo 4', 'todo 5', 'todo 6'],
      newTodo: ''
    }
  },
  methods: {
    addItem () {
      if (this.newTodo) {
        this.todoList.push(this.newTodo)
      }
      event.preventDefault()
    }
  },
  components: {
    'todo-item': TodoItem
  },
  mounted () {
    if (localStorage.todoList !== undefined) this.todoList = JSON.parse(localStorage.todoList)
    else localStorage.todoList = JSON.stringify(this.todoList)
  },
  watch: {
    todoList (value) {
      localStorage.todoList = JSON.stringify(this.todoList)
    }
  }
}
</script>
