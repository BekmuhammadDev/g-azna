<script setup lang="ts">
import Sidebar from '@/components/layouts/Sidebar.vue';
</script>

<template>
  <div class="flex h-screen bg-gray-100 text-gray-800">
    <!-- Sidebar -->
     <Sidebar/>
    <!--------->

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
</style>
