import { reactive, computed } from 'vue'
import { defineStore } from 'pinia'

export const useTeachersStore = defineStore('teachers', () => {
  const state = reactive({
    teachers: [],
    currentPage: 1,
    itemsPerPage: 5
  })

  const SET_USER = (data) => {
    state.teachers = data
  }

  const ADD_USER = (data) => {
    state.teachers.push(data)
  }

  const GET_USER = (id) => {
    for (let i in state.teachers) {
      if (state.teachers[i].id == id.value) {
        return state.teachers[i]
      }
    }
  }

  const DELETE_USER = (id) => {
    for (let i in state.teachers) {
      if (state.teachers[i].id == id.value) state.teachers.splice(i, 1)
    }
  }

  const EDIT_USER = (id, data) => {
    for (let i in state.teachers) {
      if (state.teachers[i].id == id.value) {
        state.teachers[i] = data
      }
    }
  }

  const GENERATE_ID = () => {
    return state.teachers.length ? state.teachers[state.teachers.length - 1].id_number + 1 : 1000
  }

  const GET_USERS = computed(() => state.teachers)

  return { state, EDIT_USER, SET_USER, GET_USERS, ADD_USER, GENERATE_ID, DELETE_USER, GET_USER }
})
