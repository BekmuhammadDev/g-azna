<script setup lang="ts">
import { ref } from 'vue';
import { SignalMedium } from 'lucide-vue-next';
import blackChart from "@/assets/img/blackchart.png";
import brownChart from "@/assets/img/brownchart.png";

 defineProps<{
  balance: string;
  currencyLabel: string;
  tokenName: string;
  tokenLogo: string;
  earnings1: string;
  earnings2: string;
}>();

const open = ref(false);
const toggleDropdown = () => {
  open.value = !open.value;
};
</script>

<template>
  <div class="flex gap-6 w-[400px]">
    <div class="bg-gradient-to-b  from-[#1b3b2b] via-[#285d44] to-[#90b9a7]  p-4 shadow-md rounded-xl w-full">
      <p class="text-center mb-3 font-bold text-white">Ваш баланс</p>
      <div class="text-3xl font-bold flex justify-center items-center text-gray-800 gap-2">
        <span class="text-sm pt-3 text-white-100">Lime</span>
        <h1 class="text-white"> 21.533.10</h1>
      </div>

      <div class="flex justify-center mt-3">
        <div
          class="flex items-center gap-2 px-4 py-2 rounded-full cursor-pointer"
          @click="toggleDropdown"
        >
          <img
            :src="tokenLogo"
            alt="Token logo"
            class="w-10 h-10 rounded-full object-cover"
          />
          <span class="font-medium text-white mr-7">{{ tokenName }}</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4 transition-transform ml-5 text-white-100 duration-200"
            :class="{ 'rotate-180': open }"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>

      <div class="mt-4 flex gap-5 justify-between text-sm">
        <div>
          <div class="flex items-center gap-3 mb-3">
            <div class="bg-[#FFFEFE1F] rounded-full flex items-center justify-center p-2">
              <SignalMedium class="w-7 h-7 relative left-1 bottom-1 justify-center" color="white" stroke-width="5" />
            </div>
            <h2 class="text-sm font-bold text-white">Earnings</h2>
          </div>

          <div class="flex gap-2 mb-3">
            <h5 class="mt-1 font-bold text-xl text-white">{{ earnings1 }}</h5>
            <h1 class="text-2xl font-bold text-white">{{ currencyLabel }}</h1>
          </div>
          <img :src="brownChart" alt="Black Chart" />
        </div>

        <div>
          <div class="flex items-center gap-3 mb-3">
            <div class="bg-[#F9A1351F] rounded-full flex items-center justify-center p-2">
              <SignalMedium color="red" class="w-7 h-7 relative left-1 bottom-1 justify-center" stroke-width="5" />
            </div>
            <h2 class="text-sm font-bold text-white">Spendings</h2>
          </div>

          <div class="flex gap-2 mb-3">
            <h5 class="mt-1 font-bold text-xl text-red-600">{{ earnings2 }}</h5>
            <h1 class="text-2xl text-red-600 font-bold">{{ currencyLabel }}</h1>
          </div>
          <img :src="blackChart" alt="Brown Chart" />
        </div>
      </div>
    </div>
  </div>
</template>
