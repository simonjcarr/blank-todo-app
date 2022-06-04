<template>
  <div class="w-full">
    <div class="text-xl font-semibold">Manage your todos</div>
    <TodoForm class="mt-8" />
    <TodoStats class="mt-2"/>
    <TodoList class="mt-2" />
  </div>
</template>

<script setup>
import TodoForm from '@/components/TodoForm.vue'
import TodoStats from '@/components/TodoStats.vue'
import TodoList from '@/components/TodoList.vue'

</script>
