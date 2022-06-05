<script>
  export default {
    props: {
      todos: Array,
    }
  }
</script>

<template>
  <div>
    <div v-for="todo in todos" :key=todo.id class="mb-1 p-1 border-2 border-gray-300 rounded">
      <div class="font-semibold" :class="{'line-through': todo.completed}">{{todo.title}}</div>
      <div class="p-1 text-sm">{{todo.description}}</div>
      <div class="flex">
        <a 
        href="" 
        @click.prevent="$emit('toggleComplete', todo.id)"
        class="text-xs" :class="{'text-green-500': !todo.completed, 'text-red-500': todo.completed}"
        >
        {{ todo.completed? 'Mark Incomplete': 'Mark Complete' }}
        </a>
      </div>
    </div>
  </div>
</template>

