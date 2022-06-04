<template>
  <div class="w-full">
    <div class="text-xl font-semibold">Manage your todos</div>
    <TodoForm @add="addTodo"  class="mt-8" />
    <TodoStats :todos="todos" class="mt-2" />
    <TodoList :todos="todos" @toggleComplete="toggleComplete" class="mt-2" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import TodoForm from '@/components/TodoForm.vue'
import TodoStats from '@/components/TodoStats.vue'
import TodoList from '@/components/TodoList.vue'

let todos = ref([
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
])
const addTodo = (todo) => {
  todos.value.push({...todo, id: todos.value.length + 1})
}
const toggleComplete = (id) => {
  const todo = todos.value.find(todo => todo.id === id)
  todo.completed = !todo.completed
}

</script>
