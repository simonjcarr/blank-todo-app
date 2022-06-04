<template>
  <div class="flex space-x-2">
    <div class="font-bold text-sm">Total: {{todosStore.todos.length}}</div>
    <div class="font-bold text-sm">Complete: {{todosStore.todos.filter(t => t.completed).length}}</div>
    <div class="font-bold text-sm">ToDo: {{todosStore.todos.filter(t => !t.completed).length}}</div>
  </div>
</template>

<script>
import { useTodoStore } from '@/stores/todos'

export default {
  setup() {
    const todosStore = useTodoStore()
    return { todosStore }
  }
}
</script>

<style>

</style>