<script setup>
import Avatar from '../../UI/Avatar.vue'
import { useHeaderStore } from '/src/stores/header/header.js'
const store = useHeaderStore()
</script>

<template>
  <div>
    <nav class="bg-main-light-bg w-full">
      <div class="px-3 py-4 lg:px-5">
        <div class="flex items-center justify-between">
          <div class="flex items-center justify-start">
            <span
              class="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap text-main-color"
              >{{ store.GET_TITLE }}</span
            >
          </div>
          <div class="flex items-center justify-center gap-10">
            <Avatar />
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<style></style>
