import { defineStore } from 'pinia'

export const useTodoStore = defineStore('todos', {
  state: () => {
    return {
      todos: [
        {
          id: 1,
          title: "My First Todo",
          description: "This is my first todo",
          completed: false
        },
        {
          id: 2,
          title: "My Second Todo",
          description: "This is my second todo",
          completed: false
        },
        {
          id: 3,
          title: "My Third Todo",
          description: "This is my third todo",
          completed: false
        },
      ]
    }
  },
  actions: {
    addTodo(todo) {
      this.todos.push({...todo, id: this.todos.length + 1})
    },
    toggleComplete(id) {
      const todo = this.todos.find(todo => todo.id === id)
      todo.completed = !todo.completed
    }
  }
})