<script setup>
import Avatar from '../../UI/Avatar.vue'
</script>

<template>
  <div>
    <nav class="bg-[#E5E5E5] w-full">
      <div class="px-3 py-4 lg:px-5">
        <div class="flex items-center justify-between">
          <div class="flex items-center justify-start">
            <span
              class="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap text-main-color"
              >Dashboard</span
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
