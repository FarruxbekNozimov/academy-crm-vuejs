<script setup>
import { navLinks } from '../../constants/navLink'
</script>

<template>
  <div>
    <aside
      id="logo-sidebar"
      class="fixed top-0 left-0 z-40 w-72 h-screen transition-transform -translate-x-full bg-[#4D44B5] sm:translate-x-0"
      aria-label="Sidebar"
    >
      <div class="text-3xl w-full text-center p-6">
        <span class="font-bold font-['Poppins'] text-white bg-orange-400 px-3 mx-3 rounded-xl"
          >A</span
        >
        <span class="font-bold font-['Poppins'] text-white">Academy</span>
      </div>
      <div class="h-full pl-8 pb-4 overflow-y-auto">
        <ul class="space-y-2 font-medium">
          <li v-for="link in navLinks" :key="link.id">
            <router-link
              :to="link.link"
              exact-active-class="router-link-active"
              class="flex items-center p-3 px-10 rounded-s-full bg-[#4D44B5] text-white rounded-lg hover:text-[#4D44B5] hover:bg-[#f3f4ff] duration-200 text-md"
            >
              <i :title="link.title" :class="link.icon" class="text-2xl"></i>
              <span class="ml-3">{{ link.title }}</span>
            </router-link>
          </li>
        </ul>
      </div>
    </aside>
  </div>
</template>

<style>
.router-link-active {
  background: #f3f4ff;
  color: #4d44b5;
  font-weight: bold;
}
</style>
