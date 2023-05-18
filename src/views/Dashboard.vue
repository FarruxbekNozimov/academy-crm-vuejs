<script setup>
import Sidebar from '../components/Sidebar/Sidebar.vue'
import Header from '../components/Header/Header.vue'
import { onMounted } from 'vue'
import { useHeaderStore } from '/src/stores/header/header.js'
const store = useHeaderStore()

onMounted(() => {
  store.CHANGE_TITLE('Dashboard')
})
</script>

<template>
  <main>
    <section id="main" class="w-full h-[100vh]">
      <Sidebar />
      <div class="bg-main-light-bg h-[100vh] sm:ml-72 overflow-y-scroll ">
        <Header />
        <router-view></router-view>
      </div>
    </section>
  </main>
</template>
