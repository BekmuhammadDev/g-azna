<script setup>
import { SignalMedium } from 'lucide-vue-next';
import blackChart from "@/assets/img/blackchart.png"
import brownChart from "@/assets/img/brownchart.png"
</script>

<template>
  <!-- Main Section -->
  <main class="p-6 overflow-auto space-y-6">
    <div class="flex gap-8">
      <!-- About Section -->
      <div class="bg-gradient-to-b from-[#8798C5] to-[#8597C4] text-white p-6 rounded-xl shadow">
        <h2 class="text-[32px] text-center font-normal mb-2">О нас</h2>
        <p class="text-[32px] text-center font-normal">
          Мы команда энтузиастов и профессионалов в области цифровых технологий, маркетинга и автоматизации.
          Наша цель-дать каждому возможность развиваться, учиться и зарабатывать деньги в безопасной и современной
          онлайн-среде.
        </p>
        <div class="flex justify-end">
          <button class="mt-4 border text-white px-14 py-3 rounded">ещё</button>
        </div>
      </div>

      <!-- Balance div -->
      <div class="flex gap-6 w-full">
        <div class="bg-white p-4  rounded-xl shadow ">
          <p class="text-center mb-3 font-bold text-[#A9A9A9]">Ваш баланс</p>
          <div class="text-3xl font-bold flex justify-center items-center text-gray-800 gap-2"><span
              class="text-sm pt-3">Lime</span>
            <h1>21.533.10</h1>
          </div>
          <div class="mt-4 flex gap-5 justify-between text-sm">
            <div>
              <div class="flex items-center gap-3 mb-3">
                <div class="bg-[#0000001F] rounded-full flex items-center justify-center p-2">
                  <SignalMedium class="w-5 h-5 justify-center" stroke-width="4" />
                </div>

                <h2 class="text-sm font-bold text-black">Earnings</h2>
              </div>

              <div class="flex gap-2 mb-3">
                <h5 class="mt-1 font-bold text-xl">7.048</h5>
                <h1 class="text-2xl font-bold text-black">
                  Lime
                </h1>
              </div>
              <div class="w-32 h-32">
                <img :src="blackChart" alt="Black Chart" />
              </div>
            </div>

            <div>
              <div class="flex items-center gap-3 mb-3">
                <div class="bg-[#F9A1351F] rounded-full flex items-center justify-center p-2">
                  <SignalMedium color="#F9A135" class="w-5 h-5 justify-center" stroke-width="4" />
                </div>
                <h2 class="text-sm font-bold text-black">Earnings</h2>
              </div>

              <div class="flex gap-2 mb-3">
                <h5 class="mt-1 font-bold text-xl text-[#f9a135]">7.048</h5>
                <h1 class="text-2xl text-[#f9a135] font-bold">
                  Lime
                </h1>
              </div>
              <div class="w-32 h-32">
                <img :src="brownChart" alt="Brown Chart" />
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>

    <div class="bg-[#A4BCE9]  p-6 rounded-xl flex justify-between">

      <div class="w-[400px]">
        <div class="mb-5">
          <select name="" id="">
            <option value="">Uz</option>
            <option value="">Ru</option>
          </select>
        </div>

        <div class="bg-white p-6 rounded-2xl shadow px-14 flex flex-col gap-4">
          <input type="password" placeholder="Ваш старый пароль" class="border px-4 py-2 rounded-2xl" />
          <input type="password" placeholder="Ваш новый пароль" class="border px-4 py-2 rounded-2xl" />
          <button class="bg-blue-600 text-white px-10 py-2 rounded-lg">Изменить</button>
        </div>

      </div>

      <div>
        <h1 class="text-[32px]">Профиль</h1>
        <div class="flex items-center gap-4">
          <div class="w-12 h-12 rounded-full bg-white" />
          <div>
            <p class="font-medium">{{ userName }}</p>
            <p class="text-sm">{{ email }}</p>
          </div>
        </div>
        <div class="mt-4 text-sm space-y-1">
          <p>Подписки: 5</p>
          <p>Наставник: g‘azna099</p>
          <p>Подписчики: 50</p>
        </div>
        <button class="mt-4 bg-white text-blue-700 px-4 py-1 rounded">Добавить друга</button>
      </div>
    </div>

    <!-- Password Change -->

  </main>
</template>