<script setup lang="ts">
import { ref } from 'vue';
import { RouterLink } from 'vue-router'

const userName = ref('Donyorov Nizomiddin');
const email = ref('example@gmail.com');
</script>

<template>
  <div class="flex h-screen bg-gray-100 text-gray-800">
      <!-- Sidebar -->
    <aside class="w-64 bg-gradient-to-b from-[#98B4F3] to-[#BFD5FF] text-white flex flex-col p-4">
      <h1 class="text-2xl font-bold mb-6">Lime Academy</h1>

      <nav class="space-y-2 font-medium">
         <RouterLink to="/home" class="block hover:bg-gray-700 p-2 rounded">Профиль</RouterLink>
         <RouterLink to="/profile" class="block hover:bg-gray-700 p-2 rounded">Главный</RouterLink>
         <RouterLink to="/courses" class="block hover:bg-gray-700 p-2 rounded">Курсы</RouterLink>
         <RouterLink to="/balance" class="block hover:bg-gray-700 p-2 rounded">Баланс</RouterLink>
      </nav>

      <div class="mt-10">
        <p class="text-sm font-semibold mb-2">Сообщество</p>
        <ul class="text-sm space-y-1">
          <li>Соревнования</li>
          <li>Статьи</li>
          <li>Партнеры</li>
        </ul>
      </div>

      <div class="mt-6">
        <p class="text-sm font-semibold mb-2">Сервисы</p>
        <ul class="text-sm space-y-1">
          <li>Онлайн школа</li>
          <li>P2P Market</li>
          <li>Маркетплейс</li>
          <li>Рекламный кабинет</li>
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
