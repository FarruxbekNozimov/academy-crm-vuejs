import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useHeaderStore = defineStore('header', () => {
  const title = ref('')

  const CHANGE_TITLE = (data) => {
    title.value = data
  }

  const GET_TITLE = computed(() => title.value)

  return { CHANGE_TITLE, GET_TITLE }
})
