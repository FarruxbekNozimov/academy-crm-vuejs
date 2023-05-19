<script setup>
import moment from 'moment'
import { ref, reactive, onMounted } from 'vue'
import { useTeachersStore } from '/src/stores/teachers/teachers.js'
import { useHeaderStore } from '/src/stores/header/header.js'
import { teachers } from '/src/constants/teachers.js'
import Search from '/src/UI/Search.vue'
import { toast } from 'vue3-toastify'

const headStore = useHeaderStore()
const modalTogg = ref(false)
const store = useTeachersStore()
const deleteModalTogg = ref(false)
const deletedID = ref(null)
const editUser = ref(0)

const toggleModal = () => {
  for (let i in teachersInfo) teachersInfo[i] = ''
  headStore.CHANGE_TITLE(modalTogg.value ? 'Teachers' : "Yangi o'qituvchi qo'shish")
  modalTogg.value = !modalTogg.value
}
const toggleDelete = () => {
  headStore.CHANGE_TITLE(modalTogg.value ? 'Teachers' : "Yangi o'qituvchi qo'shish")
  deleteModalTogg.value = !deleteModalTogg.value
}
const closeEdit = () => {
  editUser.value = null
}

let teachersInfo = reactive({
  name: '',
  surname: '',
  login: '',
  password: '',
  description: '',
  birthday: '',
  subject: ''
})

let editTeacherInfo = reactive({
  name: '',
  surname: '',
  login: '',
  password: '',
  description: '',
  birthday: '',
  subject: ''
})

const addStudent = () => {
  const teacher = {
    id: Date.now(),
    name: teachersInfo.name,
    surname: teachersInfo.surname,
    subject: teachersInfo.subject,
    birthday: teachersInfo.birthday,
    img: 'https://c8.alamy.com/comp/2HATM0Y/muslim-businessman-avatar-arab-person-flat-icon-2HATM0Y.jpg',
    description: teachersInfo.description,
    login: teachersInfo.login,
    password: teachersInfo.password,
    createdAt: Date.now()
  }
  try {
    store.ADD_TEACHER(teacher)
    toast.success(`Added successfuly`, {
      autoClose: 1000,
      theme: 'light'
    })
    toggleModal()
    for (let i in teachersInfo) teachersInfo[i] = ''
  } catch (err) {
    console.log(err)
    toast.error(`Error`, {
      autoClose: 1000,
      theme: 'light'
    })
  }
}

const deleteStudent = () => {
  try {
    store.DELETE_TEACHER(deletedID)
    toast.success(`Deleted successfuly`, {
      autoClose: 1000,
      theme: 'light'
    })
    toggleDelete()
    for (let i in teachersInfo) teachersInfo[i] = ''
  } catch (err) {
    console.log(err)
    toast.error(`Error`, {
      autoClose: 1000,
      theme: 'light'
    })
  }
}

const openEdit = (teacher) => {
  editUser.value = teacher.id
  const currentUser = store.GET_TEACHER(editUser)
  editTeacherInfo = {
    id: currentUser.id,
    name: currentUser.name,
    surname: currentUser.surname,
    birthday: currentUser.birthday,
    subject: currentUser.subject,
    login: currentUser.login,
    password: currentUser.password,
    img: 'https://c8.alamy.com/comp/2HATM0Y/muslim-businessman-avatar-arab-person-flat-icon-2HATM0Y.jpg',
    grade: 'Freelance',
    id_number: currentUser.id_number,
    createdAt: currentUser.createdAt
  }
}

const editTeacher = () => {
  try {
    store.EDIT_TEACHER(editUser, editTeacherInfo)
    toast.success(`Edited successfuly`, {
      autoClose: 1000,
      theme: 'light'
    })
    closeEdit()
    editUser.value = null
  } catch (err) {
    console.log(err)
    toast.error(`Error`, {
      autoClose: 1000,
      theme: 'light'
    })
  }
}

onMounted(() => {
  store.SET_TEACHER(teachers)
})
</script>
<template>
  <div class="p-5 relative">
    <div class="w-full flex items-center justify-between">
      <Search />
      <button
        @click="
          () => {
            editUser = null
            toggleModal()
          }
        "
        class="hover:bg-main-color duration-300 bg-main-bg text-white w-[200px] p-2 rounded-full"
      >
        <i class="bx bx-plus text-3xl"></i>
      </button>
    </div>

    <!-- DELETE TEACHER MODAL -->
    <div
      id="deleteModal"
      tabindex="-1"
      aria-hidden="true"
      class="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-modal md:h-full bg-[#4d44b565]"
      :class="deleteModalTogg ? 'flex' : 'hidden'"
    >
      <div class="relative p-4 w-full max-w-md h-full md:h-auto">
        <!-- Modal content -->
        <div class="relative p-4 text-center bg-white rounded-lg shadow-xl dark:bg-gray-800 sm:p-5">
          <button
            @click="toggleDelete"
            type="button"
            class="text-gray-400 absolute top-2.5 right-2.5 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white w-full text-start"
          >
            <svg
              aria-hidden="true"
              class="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
          <svg
            class="text-gray-400 dark:text-gray-500 w-11 h-11 mb-3.5 mx-auto"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <p class="mb-4 text-gray-500 dark:text-gray-300">
            Rostan ushbu o'quvchini o'chirmoqchimisiz ?
          </p>
          <div class="flex justify-center items-center space-x-4">
            <button
              @click="toggleDelete"
              type="button"
              class="py-2 px-3 text-sm font-medium rounded-lg border border-gray-200 focus:ring-4 focus:outline-none focus:ring-primary-300 hover:bg-purple-900 focus:z-10 bg-main-bg text-white"
            >
              Yo'q, hazillashdim
            </button>
            <button
              @click="deleteStudent"
              type="submit"
              class="py-2 px-3 text-sm font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-500 dark:hover:bg-red-600 dark:focus:ring-red-900"
            >
              Ha, o'chirmoqchiman
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- CREATE TEACHER MODAL -->
    <div
      id="defaultModal"
      tabindex="-1"
      aria-hidden="true"
      class="absolute hs-overlay top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-hidden md:inset-0 h-[120vh] bg-main-light-bg"
      :class="modalTogg ? '' : 'hidden'"
    >
      <div class="relative w-full max-w-full h-[90vh]">
        <!-- Modal content -->
        <form @submit.prevent="addStudent" class="relative bg-white rounded-xl shadow-xl">
          <!-- Modal header -->
          <div class="flex items-start justify-between p-4 border-b rounded-t-xl bg-main-bg">
            <h3 class="text-xl text-white font-bold">O'quvchi ma'lumotlari</h3>
            <button
              @click="toggleModal"
              type="button"
              class="text-purple-400 bg-transparent hover:bg-purple-200 hover:text-purple-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
            >
              <svg
                aria-hidden="true"
                class="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span class="sr-only">Close modal</span>
            </button>
          </div>
          <!-- Modal body -->
          <div class="p-6 space-y-6">
            <div class="w-full flex items-start gap-10">
              <div class="block w-[50%]">
                <div class="mb-10">
                  <label for="first_name" class="block mb-2 text-md text-main-color font-bold"
                    >Ism *</label
                  >
                  <input
                    type="text"
                    id="first_name"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5"
                    placeholder="Maria"
                    required
                    v-model="teachersInfo.name"
                  />
                </div>

                <div class="mb-10">
                  <label for="first_name" class="block mb-2 text-md text-main-color font-bold"
                    >Login *</label
                  >
                  <input
                    type="text"
                    id="first_name"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5"
                    placeholder="History@mai.com"
                    required
                    v-model="teachersInfo.login"
                  />
                </div>
                <div class="mb-10">
                  <label for="message" class="block mb-2 text-md text-md text-main-color font-bold"
                    >Ma'lumot *</label
                  >
                  <textarea
                    id="message"
                    rows="9"
                    class="block p-2 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-purple-500 focus:border-purple-500"
                    placeholder="Write your thoughts here..."
                    v-model="teachersInfo.description"
                  ></textarea>
                </div>
                <div class="mb-10">
                  <label for="first_name" class="block mb-2 text-md text-main-color font-bold"
                    >Tug'ilgan sana *</label
                  >
                  <div class="relative max-w-sm">
                    <input
                      type="text"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-2/2 pl-4 p-2.5"
                      placeholder="24 February 1997"
                      v-model="teachersInfo.birthday"
                    />
                  </div>
                </div>
              </div>
              <div class="block w-[50%]">
                <div class="mb-10">
                  <label for="first_name" class="block mb-2 text-md text-main-color font-bold"
                    >Sharif *</label
                  >
                  <input
                    type="text"
                    id="first_name"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5"
                    placeholder="Jalilov"
                    required
                    v-model="teachersInfo.surname"
                  />
                </div>
                <div class="mb-10">
                  <label for="first_name" class="block mb-2 text-md text-main-color font-bold"
                    >Parol *</label
                  >
                  <input
                    type="text"
                    id="first_name"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5"
                    placeholder="●●●●●●●●●●●●●"
                    required
                    v-model="teachersInfo.password"
                  />
                </div>
                <div class="mb-10">
                  <label class="text-main-color font-bold text-md">Rasm *</label>
                  <div
                    class="h-[200px] w-[200px] mt-2 border-4 border-gray-300 border-dashed rounded-lg flex items-center text-center p-3"
                  >
                    Drag and drop or click here to select file
                  </div>
                </div>
                <div class="mb-10">
                  <label for="first_name" class="block mb-2 text-md text-main-color font-bold"
                    >Fan nomi *</label
                  >
                  <input
                    type="text"
                    id="first_name"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5"
                    placeholder=""
                    required
                    v-model="teachersInfo.subject"
                  />
                </div>
              </div>
            </div>
          </div>
          <!-- Modal footer -->
          <div class="flex items-center justify-end p-6 space-x-10 rounded-b">
            <button
              type="submit"
              class="text-white bg-main-bg hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-full text-lg px-5 py-2.5 text-center"
            >
              Qo'shish
            </button>
          </div>
        </form>
      </div>
    </div>

    <!-- UPDATE TEACHER MODAL -->
    <div
      id="defaultModal"
      tabindex="-1"
      aria-hidden="true"
      class="absolute hs-overlay top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-hidden md:inset-0 h-[120vh] bg-main-light-bg"
      :class="editUser ? '' : 'hidden'"
    >
      <div class="relative w-full max-w-full h-[90vh]">
        <!-- Modal content -->
        <form @submit.prevent="editTeacher" class="relative bg-white rounded-xl shadow-xl">
          <!-- Modal header -->
          <div class="flex items-start justify-between p-4 border-b rounded-t-xl bg-main-bg">
            <h3 class="text-xl text-white font-bold">O'quvchi ma'lumotlari</h3>
            <button
              @click="closeEdit()"
              type="button"
              class="text-purple-400 bg-transparent hover:bg-purple-200 hover:text-purple-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
            >
              <svg
                aria-hidden="true"
                class="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span class="sr-only">Close modal</span>
            </button>
          </div>
          <!-- Modal body -->
          <div class="p-6 space-y-6">
            <div class="w-full flex items-start gap-10">
              <div class="block w-[50%]">
                <div class="mb-10">
                  <label for="first_name" class="block mb-2 text-md text-main-color font-bold"
                    >Ism *</label
                  >
                  <input
                    type="text"
                    id="first_name"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5"
                    placeholder="Maria"
                    required
                    v-model="editTeacherInfo.name"
                  />
                </div>

                <div class="mb-10">
                  <label for="first_name" class="block mb-2 text-md text-main-color font-bold"
                    >Login *</label
                  >
                  <input
                    type="text"
                    id="first_name"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5"
                    placeholder="History@mai.com"
                    required
                    v-model="editTeacherInfo.login"
                  />
                </div>
                <div class="mb-10">
                  <label for="message" class="block mb-2 text-md text-md text-main-color font-bold"
                    >Ma'lumot *</label
                  >
                  <textarea
                    id="message"
                    rows="9"
                    class="block p-2 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-purple-500 focus:border-purple-500"
                    placeholder="Write your thoughts here..."
                    v-model="editTeacherInfo.description"
                  ></textarea>
                </div>
                <div class="mb-10">
                  <label for="first_name" class="block mb-2 text-md text-main-color font-bold"
                    >Tug'ilgan sana *</label
                  >
                  <div class="relative max-w-sm">
                    <input
                      type="text"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-2/2 pl-4 p-2.5"
                      placeholder="24 February 1997"
                      v-model="editTeacherInfo.birthday"
                    />
                  </div>
                </div>
              </div>
              <div class="block w-[50%]">
                <div class="mb-10">
                  <label for="first_name" class="block mb-2 text-md text-main-color font-bold"
                    >Sharif *</label
                  >
                  <input
                    type="text"
                    id="first_name"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5"
                    placeholder="Jalilov"
                    required
                    v-model="editTeacherInfo.surname"
                  />
                </div>
                <div class="mb-10">
                  <label for="first_name" class="block mb-2 text-md text-main-color font-bold"
                    >Parol *</label
                  >
                  <input
                    type="text"
                    id="first_name"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5"
                    placeholder="●●●●●●●●●●●●●"
                    required
                    v-model="editTeacherInfo.password"
                  />
                </div>
                <div class="mb-10">
                  <label class="text-main-color font-bold text-md">Rasm *</label>
                  <div
                    class="h-[200px] w-[200px] mt-2 border-4 border-gray-300 border-dashed rounded-lg flex items-center text-center p-3"
                  >
                    Drag and drop or click here to select file
                  </div>
                </div>
                <div class="mb-10">
                  <label for="first_name" class="block mb-2 text-md text-main-color font-bold"
                    >Fan nomi *</label
                  >
                  <input
                    type="text"
                    id="first_name"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5"
                    placeholder=""
                    required
                    v-model="editTeacherInfo.subject"
                  />
                </div>
              </div>
            </div>
          </div>
          <!-- Modal footer -->
          <div class="flex items-center justify-end p-6 space-x-10 rounded-b">
            <button
              type="submit"
              class="text-white bg-main-bg hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-full text-lg px-5 py-2.5 text-center"
            >
              Qo'shish
            </button>
          </div>
        </form>
      </div>
    </div>

    <!-- TABLE SECTION START -->
    <div class="w-full mt-10 grid-cols-2" :class="modalTogg || editUser ? 'hidden' : ''">
      <div class="grid-rows-2">
        <div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div v-for="teacher in store.GET_TEACHERS" class="inline-block min-w-full align-middle">
            <div
              class="w-full max-w-sm bg-white border border-gray-200 rounded-2xl shadow dark:bg-gray-800 dark:border-gray-700"
            >
              <div class="flex justify-end px-4 pt-4">
                <button
                  id="dropdownButton"
                  data-dropdown-toggle="dropdown"
                  class="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5"
                  type="button"
                >
                  <span class="sr-only">Open dropdown</span>
                  <svg
                    class="w-6 h-6"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"
                    ></path>
                  </svg>
                </button>
                <!-- Dropdown menu -->
                <div
                  id="dropdown"
                  class="z-10 hidden text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
                >
                  <ul class="py-2" aria-labelledby="dropdownButton">
                    <li>
                      <button
                        @click="() => openEdit(teacher)"
                        class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white w-full text-start"
                      >
                        Edit
                      </button>
                    </li>
                    <li>
                      <button
                        href="#"
                        class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white w-full text-start"
                      >
                        Export Data
                      </button>
                    </li>
                    <li>
                      <button
                        @click="
                          () => {
                            toggleDelete()
                            deletedID = teacher.id
                          }
                        "
                        class="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white w-full text-start"
                      >
                        Delete
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="flex flex-col items-center pb-10">
                <img
                  class="w-24 h-24 mb-3 rounded-full shadow-lg"
                  src="https://cdn4.iconfinder.com/data/icons/arabic-avatars/100/arab_avatar_muslim_arabic_religion_islam-02-512.png"
                  alt="Bonnie image"
                />
                <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                  {{ teacher.name }}
                </h5>
                <span class="text-sm text-gray-500 dark:text-gray-400">{{ teacher.subject }}</span>
                <div class="flex mt-4 space-x-3 md:mt-6">
                  <button
                    class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-main-bg hover:bg-main-color rounded-full h-[50px] duration-300"
                  >
                    <i class="bx bx-phone text-xl"></i>
                  </button>
                  <button
                    class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-main-bg border border-gray-300 hover:bg-main-color rounded-full h-[50px] duration-300"
                  >
                    <i class="bx bx-envelope text-xl"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
