<script setup lang="ts">
import Sidebar from '@/components/layouts/Sidebar.vue';
import Header from '@/components/layouts/Header.vue';
</script>

<template>
  <div class="flex h-screen bg-gray-100 text-gray-800">
     <Sidebar/>
    <div class="flex-1 flex flex-col">
       <Header/>
      <div class="overflow-auto">
        <RouterView />
      </div>
    </div>
  </div>
</template>