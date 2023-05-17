<script setup>
import notification from '/src/assets/img/notification.png'
import settings from '/src/assets/img/settings.png'
</script>

<template>
  <div class="flex items-center justify-center gap-5 w-72">
    <button class="bg-white px-3 py-2 rounded-full h-[50px] relative">
      <img :src="notification" alt="" class="" />
      <div class="absolute h-[8px] w-[8px] rounded-full bg-purple-600 top-1 right-1"></div>
    </button>
    <button class="bg-white px-3 py-2 rounded-full h-[50px] relative">
      <img :src="settings" alt="" class="" />
    </button>
    <div class="flex items-center justify-center gap-2">
      <span class="">
        <h6 class="text-center w-full text-main-color text-semibold block">Ochilov M.</h6>
        <h6 class="text-center w-full text-gray-500">Admin</h6>
      </span>
      <img src="https://img.freepik.com/free-icon/arab_318-198038.jpg" class="h-[50px]" />
    </div>
  </div>
</template>

<style></style>
