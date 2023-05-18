<script setup>
import { useStudentStore } from '/src/stores/students/students.js'
import { useTeachersStore } from '/src/stores/teachers/teachers.js'
import { homeInfo } from '/src/constants/homeInfo.js'
import Rightbar from '/src/components/Rightbar/Rightbar.vue'

const studentStore = useStudentStore()
const teachersStore = useTeachersStore()
</script>
<template>
  <div class="pr-80 m-8">
    <Rightbar />
    <div class="bg-white flex items-center justify-between p-10 px-14 rounded-xl grid-cols-2">
      <div v-for="item in homeInfo" class="flex items-center justify-between">
        <div class="flex items-center justify-between gap-5">
          <span :class="'bg-' + item.color" class="p-3 text-white text-3xl rounded-full h-[55px]">
            <i :class="item.icon"></i
          ></span>
          <div class="block">
            <span class="text-md text-gray-500 block mb-2">{{ item.title }}</span>
            <span class="text-2xl font-bold">{{ studentStore.GET_USERS.length }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style></style>
