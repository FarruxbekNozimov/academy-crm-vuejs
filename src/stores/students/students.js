import { ref, reactive, computed } from 'vue'
import { defineStore } from 'pinia'

export const useStudentStore = defineStore('student', () => {
  const state = reactive({
    user: []
  })

  const SET_USER = (data) => {
    state.user = data
  }

  const ADD_USER = (data) => {
    state.user.push(data)
  }

  const GENERATE_ID = () => {
    return state.user.length ? state.user[state.user.length-1].id_number + 1 : 1000
  }

  const GET_USERS = computed(() => state.user)

  return { SET_USER, GET_USERS, ADD_USER, GENERATE_ID }
})
