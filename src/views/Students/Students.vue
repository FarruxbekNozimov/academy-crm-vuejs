<script setup>
import { useHeaderStore } from '/src/stores/header/header.js'
import Search from '/src/UI/Search.vue'
const store = useHeaderStore()
store.CHANGE_TITLE('Students')
</script>
<template>
  <div class="p-5">
    <div class="w-full flex">
      <Search />
    </div>
  </div>
</template>
