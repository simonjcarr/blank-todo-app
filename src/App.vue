<template>
  <div class="flex flex-col min-h-screen bg-gray-600">
    <div class="h-16 bg-gray-900 shadow flex justify-between my-auto">
      <div class="text-gray-50 text-2xl font-bold p-4">My ToDo's</div>
    </div>
    <div class="bg-gray-200 flex flex-grow w-[80%] mx-auto p-5">
      <router-view/>
    </div>
  </div>
</template>