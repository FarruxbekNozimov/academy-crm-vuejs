<script setup>
import Avatar from '../../UI/Avatar.vue'
</script>
<template lang="">
  <div
    class="absolute right-0 top-0 bg-gray-100 h-[100vh] w-80 py-7 px-5 overflow-y-scroll overflow-x-hidden"
  >
    <Avatar />

    <div class="list-none mt-10 px-2">
      <div class="mb-5 text-2xl text-main-color flex justify-between items-center">
        <span class="font-bold">Guruhlar</span>
        <span
          class="p-3 bg-main-bg text-white rounded-full h-[45px] flex items-center justify-center cursor-pointer"
        >
          <i class="bx bx-plus"></i
        ></span>
      </div>
      <div v-for="el in 3" class="mb-3 text-main-color flex justify-between items-center">
        <div class="flex items-center gap-2">
          <img
            src="https://img.freepik.com/free-icon/arab_318-198038.jpg"
            alt="avatar"
            class="w-[50px] h-[50px] rounded-full"
          />
          <div class="text-sm">
            <span class="block">Dasturi injinering </span>
            <span class="text-gray-400"> Class VII A</span>
          </div>
        </div>
        <span
          class="text-lg p-3 py-5 rounded-full h-[40px] flex items-center justify-center cursor-pointer border-2 border-gray-500 text-gray-500 hover:bg-main-bg hover:text-white"
        >
          <i class="bx bx-envelope"></i>
        </span>
      </div>
      <button
        class="bg-gray-200 w-full text-center p-4 rounded-full my-4 hover:bg-gray-300 font-semibold text-main-color"
      >
        Barchasi
      </button>

      <div class="mb-5 text-2xl text-main-color flex justify-between items-center py-2">
        <span class="font-bold">Guruhlar</span>
      </div>
      <div v-for="el in 3" class="mb-3 text-main-color flex justify-between items-center">
        <div class="flex items-center gap-2">
          <img
            src="https://img.freepik.com/free-icon/arab_318-198038.jpg"
            alt="avatar"
            class="w-[50px] h-[50px] rounded-full"
          />
          <div class="text-sm">
            <span class="block">Dasturi injinering </span>
            <span class="text-gray-400"> Class VII A</span>
          </div>
        </div>
        <span
          class="text-lg p-3 py-5 rounded-full h-[40px] flex items-center justify-center cursor-pointer border-2 border-gray-500 text-gray-500 hover:bg-main-bg hover:text-white"
        >
          <i class="bx bx-envelope"></i>
        </span>
      </div>
    </div>
  </div>
</template>
