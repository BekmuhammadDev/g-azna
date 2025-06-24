<script setup lang="ts">
import { ref } from 'vue';
import { RouterLink, useRoute } from 'vue-router'
import { User, Home, BookOpen, Wallet } from 'lucide-vue-next'

const userName = ref('Donyorov Nizomiddin');
const email = ref('example@gmail.com');
const route = useRoute();
</script>

<template>
  <div class="flex h-screen bg-gray-100 text-gray-800">
    <!-- Sidebar -->
    <aside class="w-64 bg-gradient-to-b from-[#98B4F3] to-[#BFD5FF] text-white flex flex-col p-4">
      <h1 class="text-[30px] text-black mt-6 font-bold">Lime Academy</h1>

      <nav class="space-y-2 font-medium py-7">
        <RouterLink to="/profile"
          class="flex items-center gap-3 px-7 py-2 rounded-[16px] transition-all duration-300 ease-in-out hover:bg-gray-700/80"
          :class="{ 'bg-black text-white': route.path === '/profile' }">
          <Home class="w-5 h-5" /> Главный
        </RouterLink>

        <RouterLink to="/home"
          class="flex items-center gap-3 px-7 py-2 rounded-[16px] transition-all duration-300 ease-in-out hover:bg-gray-700/80"
          :class="{ 'bg-black text-white': route.path === '/home' }">
          <User class="w-5 h-5" /> Профиль
        </RouterLink>

        <RouterLink to="/courses"
          class="flex items-center gap-3 px-7 py-2 rounded-[16px] transition-all duration-300 ease-in-out hover:bg-gray-700/80"
          :class="{ 'bg-black text-white': route.path === '/courses' }">
          <BookOpen class="w-5 h-5" /> Курсы
        </RouterLink>

        <RouterLink to="/balance"
          class="flex items-center gap-3 px-7 py-2 rounded-[16px] transition-all duration-300 ease-in-out hover:bg-gray-700/80"
          :class="{ 'bg-black text-white': route.path === '/balance' }">
          <Wallet class="w-5 h-5" /> Баланс
        </RouterLink>
      </nav>


      <hr class="text-[#1E1E1E80]">


      <div class="py-4">
        <p class="text-sm font-semibold mb-2">Сообщество</p>
        <ul class="text-sm space-y-1">
          <li class="text-base">Соревнования</li>
          <li class="text-base">Статьи</li>
          <li class="text-base">Партнеры</li>
        </ul>
      </div>

      <hr class="text-[#1E1E1E80]">


      <div class="mt-6">
        <p class="text-sm font-semibold mb-2">Сервисы</p>
        <ul class="text-sm space-y-1">
          <li class="text-base">Онлайн школа</li>
          <li class="text-base">P2P Market</li>
          <li class="text-base">Маркетплейс</li>
          <li class="text-base">Рекламный кабинет</li>
        </ul>
      </div>
    </aside>


    <!-- Main Content -->
    <div class="flex-1 flex flex-col">
      <!-- Header -->
      <header class="bg-gradient-to-b from-[#98B4F3] to-[#BFD5FF] shadow px-6 py-4 flex items-center justify-between">
        <input type="text" placeholder="Искать" class="border px-4 py-2 rounded w-1/3" />
        <div class="flex items-center gap-4">
          <button class="w-8 h-8 rounded-full bg-gray-200" />
          <button class="w-8 h-8 rounded-full bg-gray-300" />
        </div>
      </header>

      <RouterView />

    </div>
  </div>
</template>

<style scoped>
body {
  font-family: 'Segoe UI', sans-serif;
}
</style>
