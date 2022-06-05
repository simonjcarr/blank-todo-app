<template>
  <div class="flex space-x-2">
    <div class="font-bold text-sm">Total: {{ getTodoCount}}</div>
    <div class="font-bold text-sm">Complete: {{getCompletedCount}}</div>
    <div class="font-bold text-sm">ToDo: {{getNotCompletedCount}}</div>
  </div>
</template>

<script>
import { useTodoStore } from '@/stores/todos'
import { storeToRefs } from 'pinia'

export default {
  setup() {
    const todosStore = useTodoStore()
    let {getTodoCount, getCompletedCount, getNotCompletedCount} = storeToRefs(todosStore)
    return { getTodoCount, getCompletedCount, getNotCompletedCount }
  }
}
</script>

<style>

</style>