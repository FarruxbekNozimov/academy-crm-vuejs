<script setup>
import moment from 'moment'
import { ref, onMounted } from 'vue'
import { useHeaderStore } from '/src/stores/header/header.js'
import { students } from '../../constants/students.js'
import Search from '/src/UI/Search.vue'
const store = useHeaderStore()
const toggleModal = () => {}

onMounted(() => {
  store.CHANGE_TITLE('Students')
})
</script>
<template>
  <div class="p-5 relative">
    <div class="w-full flex items-center justify-between">
      <Search />
      <button
        class="hover:bg-main-color duration-300 bg-main-bg text-white w-[200px] p-2 rounded-full"
      >
        <i class="bx bx-plus text-3xl"></i>
      </button>
    </div>

    <!-- Main modal -->
    <div
      id="defaultModal"
      tabindex="-1"
      aria-hidden="true"
      class="hidden absolute top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[100vh]"
    >
      <div class="relative w-full max-w-full h-[85vh]">
        <!-- Modal content -->
        <div class="relative bg-white rounded-xl shadow-xl">
          <!-- Modal header -->
          <div
            class="flex items-start justify-between p-4 border-b rounded-t-xl dark:border-gray-600 bg-main-bg"
          >
            <h3 class="text-xl text-white font-bold">O'quvchi ma'lumotlari</h3>
          </div>
          <!-- Modal body -->
          <div class="p-6 space-y-6">
            <div class="w-full flex items-start gap-10">
              <div class="block">
                <span class="text-main-color font-bold text-md">Rasm *</span>
                <div
                  class="h-[175px] w-[175px] mt-5 border-2 border-main-color border-dashed rounded-lg flex items-center text-center"
                >
                  Drag and drop or click here to select file
                </div>
              </div>
              <div class="block w-[50%]">
                <div class="mb-6">
                  <label for="first_name" class="block mb-2 text-md text-main-color font-bold"
                    >Ism *</label
                  >
                  <input
                    type="text"
                    id="first_name"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5"
                    placeholder="Jahon"
                    required
                  />
                </div>
                <div class="mb-6">
                  <label for="first_name" class="block mb-2 text-md text-main-color font-bold"
                    >Tug'ilgan sana *</label
                  >
                  <div class="relative max-w-sm">
                    <input
                      datepicker
                      type="text"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-2/2 pl-4 p-2.5"
                      placeholder="24/02/1997"
                    />
                  </div>
                </div>
                <div class="mb-6">
                  <label for="first_name" class="block mb-2 text-md text-main-color font-bold"
                    >Login *</label
                  >
                  <input
                    type="text"
                    id="first_name"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5"
                    placeholder="username"
                    required
                  />
                </div>
              </div>
              <div class="block w-[50%]">
                <div class="mb-6">
                  <label for="first_name" class="block mb-2 text-md text-main-color font-bold"
                    >Sharif *</label
                  >
                  <input
                    type="text"
                    id="first_name"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5"
                    placeholder="Jalilov"
                    required
                  />
                </div>
                <div class="mb-6">
                  <label for="first_name" class="block mb-2 text-md text-main-color font-bold"
                    >Guruhini tanlang *</label
                  >
                  <input
                    type="text"
                    id="first_name"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5"
                    placeholder="Guruhini tanlang"
                    required
                  />
                </div>
                <div class="mb-6">
                  <label for="first_name" class="block mb-2 text-md text-main-color font-bold"
                    >Parol *</label
                  >
                  <input
                    type="text"
                    id="first_name"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5"
                    placeholder="●●●●●●●●●●●●●"
                    required
                  />
                </div>
              </div>
            </div>
          </div>
          <!-- Modal footer -->
          <div class="flex items-center justify-end p-6 space-x-10 rounded-b">
            <button
              data-modal-hide="defaultModal"
              type="button"
              class="text-main-bg bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-purple-300 rounded-full border-[3px] border-main-bg text-lg font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10"
            >
              Saqlash
            </button>

            <button
              data-modal-hide="defaultModal"
              type="button"
              class="text-white bg-main-bg hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-full text-lg px-5 py-2.5 text-center"
            >
              Qo'shish
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- TABLE SECTION START -->
    <div class="max-w-full mt-10">
      <div class="flex flex-col">
        <div class="overflow-x-auto shadow-md sm:rounded-lg">
          <div class="inline-block min-w-full align-middle">
            <div class="overflow-hidden">
              <table class="min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-700">
                <thead class="bg-gray-100 dark:bg-gray-700">
                  <tr>
                    <th scope="col" class="p-4">
                      <div class="flex items-center">
                        <input
                          id="checkbox-all"
                          type="checkbox"
                          class="w-4 h-4 text-purple-600 bg-gray-100 rounded border-gray-300 focus:ring-purple-500 dark:focus:ring-purple-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        />
                        <label for="checkbox-all" class="sr-only">checkbox</label>
                      </div>
                    </th>
                    <th
                      scope="col"
                      class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                    >
                      F.I.SH
                    </th>
                    <th
                      scope="col"
                      class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                    >
                      Guruh raqami
                    </th>
                    <th
                      scope="col"
                      class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                    >
                      Bosqich
                    </th>
                    <th
                      scope="col"
                      class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                    >
                      Qo'shilgan sana
                    </th>
                    <th
                      scope="col"
                      class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                    >
                      ID raqami
                    </th>
                    <th scope="col" class="p-4">Actions</th>
                  </tr>
                </thead>
                <tbody
                  class="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700"
                >
                  <tr v-for="student in students" class="hover:bg-gray-100">
                    <td class="p-4 w-4">
                      <div class="flex items-center">
                        <input
                          id="checkbox-table-1"
                          type="checkbox"
                          class="w-4 h-4 text-purple-600 bg-gray-100 rounded border-gray-300 focus:ring-purple-500 dark:focus:ring-purple-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        />
                        <label for="checkbox-table-1" class="sr-only">checkbox</label>
                      </div>
                    </td>
                    <td class="py-4 px-6 text-sm font-medium text-gray-900 flex items-center gap-3">
                      <img :src="student.img" alt="avatar" class="rounded-full h-[50px]" />
                      {{ student.name }} {{ student.surname }}
                    </td>
                    <td class="py-4 px-6 text-sm font-medium text-gray-500">
                      {{ student.group_number }}
                    </td>
                    <td class="py-4 px-6 text-sm font-medium text-gray-900">
                      {{ student.grade }}
                    </td>
                    <td class="py-4 px-6 text-sm font-medium text-gray-900">
                      {{ moment(student.createdAt).format('LL') }}
                    </td>
                    <td class="py-4 px-6 text-sm font-medium text-gray-900">
                      {{ student.id_number }}
                    </td>
                    <td class="py-4 px-6 text-sm font-medium text-center">
                      <i
                        class="bx bx-trash text-2xl cursor-pointer hover:scale-110 duration-200 mr-5"
                      ></i>
                      <i
                        class="bx bx-pencil text-2xl cursor-pointer hover:scale-110 duration-200"
                      ></i>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div class="flex justify-between items-center text-md p-4 px-10 bg-white">
                <button class="rounded-lg border border-gray-300 text-button-cl p-2 px-4">
                  Avvalgisi
                </button>
                <span>Sahifa 1 dan 10</span>
                <button class="rounded-lg border border-gray-300 text-button-cl p-2 px-4">
                  Keyingisi
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
