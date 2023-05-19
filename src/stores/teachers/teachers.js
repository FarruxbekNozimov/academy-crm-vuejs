import { reactive, computed } from 'vue'
import { defineStore } from 'pinia'
import { teachers } from '../../constants/teachers.js'

export const useTeachersStore = defineStore('teachers', () => {
  const state = reactive({
    teachers: [...teachers],
    currentPage: 1,
    itemsPerPage: 4
  })

  const SET_TEACHER = (data) => {
    state.teachers = data
  }

  const ADD_TEACHER = (data) => {
    state.teachers.push(data)
  }

  const GET_TEACHER = (id) => {
    for (let i in state.teachers) {
      if (state.teachers[i].id == id.value) {
        return state.teachers[i]
      }
    }
  }

  const DELETE_TEACHER = (id) => {
    for (let i in state.teachers) {
      if (state.teachers[i].id == id.value) state.teachers.splice(i, 1)
    }
  }

  const EDIT_TEACHER = (id, data) => {
    for (let i in state.teachers) {
      if (state.teachers[i].id == id.value) {
        state.teachers[i] = data
      }
    }
  }

  const GENERATE_ID = () => {
    return state.teachers.length ? state.teachers[state.teachers.length - 1].id_number + 1 : 1000
  }

  const GET_TEACHERS = computed(() => state.teachers)

  return {
    currentPage: state.currentPage,
    itemsPerPage: state.itemsPerPage,
    EDIT_TEACHER,
    SET_TEACHER,
    GET_TEACHER,
    ADD_TEACHER,
    GENERATE_ID,
    DELETE_TEACHER,
    GET_TEACHERS
  }
})
