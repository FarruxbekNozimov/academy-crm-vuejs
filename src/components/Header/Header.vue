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
            <div class="flex items-center justify-center relative">
              <i class="bx bx-search-alt-2 text-xl absolute left-3 z-50"></i>
              <input
                type="text"
                class="rounded-full border-0 focus: pl-[40px]"
                placeholder="Izlash"
              />
            </div>
            <Avatar />
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<style></style>
