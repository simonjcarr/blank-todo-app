<script>
export default {
  props: {
    todos: Array,
  }
}
</script>

<template>
  <div class="flex space-x-2">
    <div class="font-bold text-sm">
      Total: {{todos.length}}
    </div>
    
    <div class="font-bold text-sm">
      Complete: {{todos.filter(t => t.completed).length}}
    </div>
    
    <div class="font-bold text-sm">
      ToDo: {{todos.filter(t => !t.completed).length}}
    </div>
  </div>
</template>

<style>

</style>