<script setup>
import {Bell, MessageCircle, User} from "lucide-vue-next";
import {RouterLink} from 'vue-router';
</script>

<template>
  <header class="bg-gradient-header w-full z-50 px-6 py-4 flex items-center justify-end">
    <div class="flex items-center gap-4">
      <RouterLink to="/messages"
                  class="w-8 h-8 rounded-full  flex items-center justify-center hover:bg-gray-300 transition">
        <MessageCircle class="w-5 h-5 text-gray-700"/>
      </RouterLink>
      <RouterLink to="/notifications"
                  class="w-8 h-8 rounded-full  flex items-center justify-center hover:bg-gray-400 transition">
        <Bell class="w-5 h-5 text-gray-700"/>
      </RouterLink>
      <RouterLink to="/profile"
                  class="w-8 h-8 bg-gray-300 rounded-xl flex items-center justify-center hover:bg-gray-400 transition">
        <User class="w-5 h-5 text-gray-700"/>
      </RouterLink>
    </div>
  </header>
</template>