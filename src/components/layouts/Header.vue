<script setup>
import { Search,MessageCircle, Bell, User } from "lucide-vue-next";
import { RouterLink } from 'vue-router';
</script>

<template>
  <header class="bg-gradient-to-b from-[#AECAEC] to-[#8697C5] w-full z-50 px-6 py-4 flex items-center justify-between">
       <div className="relative w-1/4">
      <input
        type="text"
        placeholder="Искать"
        className=" pr-10 pl-4 py-2  placeholder-[#000000] bg-[#0000002a] rounded-md w-full"
      />
      <span  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
        <Search color="#000000"/>
      </span>
    </div>
      <div class="flex items-center gap-4">
    <RouterLink to="/messages" class="w-8 h-8 rounded-full  flex items-center justify-center hover:bg-gray-300 transition">
     <MessageCircle  class="w-5 h-5 text-gray-700"/>
    </RouterLink>
    <RouterLink to="/notifications" class="w-8 h-8 rounded-full  flex items-center justify-center hover:bg-gray-400 transition">
      <Bell class="w-5 h-5 text-gray-700" />
    </RouterLink>
    <RouterLink to="/profile" class="w-8 h-8 bg-gray-300 rounded-xl flex items-center justify-center hover:bg-gray-400 transition">
      <User class="w-5 h-5 text-gray-700" />
    </RouterLink>
  </div>
  </header>
</template>