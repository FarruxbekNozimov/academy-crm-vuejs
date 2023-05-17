import { ref, reactive, computed } from 'vue'
import { defineStore } from 'pinia'

export const useHeaderStore = defineStore('students', () => {
  const state = reactive({
    user: []
  })

  const SET_USER = (data) => {
    state.user = data
  }

  const GET_USERS = computed(() => state.user)

  return { SET_USER, GET_USERS }
})
