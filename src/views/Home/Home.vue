<script setup>
import { useStudentStore } from '/src/stores/students/students.js'
import { useTeachersStore } from '/src/stores/teachers/teachers.js'

const studentStore = useStudentStore()
const teachersStore = useTeachersStore()
</script>
<template>
  <div class="p-5">
    <div class="bg-white flex items-center justify-between p-10 px-14 rounded-xl">
      <div class="flex items-center justify-between">
        <div class="flex items-center justify-between gap-5">
          <span class="p-3 bg-main-color text-white text-5xl rounded-full h-[70px]">
            <i class="bx bx-user"></i
          ></span>
          <div class="block">
            <span class="text-lg text-gray-500 block mb-2">O'quvchilar</span>
            <span class="text-3xl font-bold">{{ studentStore.GET_USERS.length }}</span>
          </div>
        </div>
      </div>
      <div class="flex items-center justify-between">
        <div class="flex items-center justify-between gap-5">
          <span class="p-3 bg-main-color text-white text-5xl rounded-full h-[70px]">
            <i class="bx bx-user"></i
          ></span>
          <div class="block">
            <span class="text-lg text-gray-500 block mb-2">O'quvchilar</span>
            <span class="text-3xl font-bold">{{ teachersStore.GET_USERS.length }}</span>
          </div>
        </div>
      </div>

      <div class="flex items-center justify-between">
        <div class="flex items-center justify-between gap-5">
          <span class="p-3 bg-main-color text-white text-5xl rounded-full h-[70px]">
            <i class="bx bx-user"></i
          ></span>
          <div class="block">
            <span class="text-lg text-gray-500 block mb-2">O'quvchilar</span>
            <span class="text-3xl font-bold">932</span>
          </div>
        </div>
      </div>
      <div class="flex items-center justify-between">
        <div class="flex items-center justify-between gap-5">
          <span class="p-3 bg-main-color text-white text-5xl rounded-full h-[70px]">
            <i class="bx bx-user"></i
          ></span>
          <div class="block">
            <span class="text-lg text-gray-500 block mb-2">O'quvchilar</span>
            <span class="text-3xl font-bold">932</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style></style>
