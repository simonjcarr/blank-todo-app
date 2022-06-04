<script>
import { ref } from 'vue'
export default {
  setup(props, context) {
    let title = ref("")
    let description = ref("")
    
    const onClick = () => {
      context.emit("add", {
        title: title.value,
        description: description.value,
      })
      title.value = ""
      description.value = ""
    }
    
    return { onClick, title, description }
  }
}


</script>

<template>
  <div>
    <div>
      <input v-model="title" type="text" placeholder="Start typing to add a todo" class="p-2 w-full rounded">
    </div>
    <div class="mt-2">
      <textarea v-model="description" rows="3" placeholder="Description <optional>" class="p-2 w-full rounded"></textarea>
    </div>
    <div class="mt-2">
      <button @click="onClick" class="rounded bg-gray-900 border-gray-900 border-2 text-gray-50 font-bold p-2 hover:bg-transparent hover:text-gray-900">Submit</button>
    </div>
  </div>
</template>
