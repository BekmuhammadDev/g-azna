<script setup>
import ProfileSection from '@/components/Sections/ProfileSection.vue';
import ProfileStatsSection from '@/components/Sections/ProfileStatsSection.vue';

const userData = {
   name: 'Donyorov Nizomiddin',
   email: 'example@gmail.com',
   avatarUrl: 'https://i.pravatar.cc/100', // test image
   followers: 50,
   following: 5,
   mentors: 1,
};
const transactions = [
   {
      title: 'Вывод на карту',
      date: '25.05.2025',
      amount: '-200000 сум',
      type: 'negative',
   },
   {
      title: 'Покупка ячейки',
      date: '20.04.2025',
      amount: '-300000 сум',
      type: 'negative',
   },
   {
      title: 'Пополнение карты',
      date: '10.04.2025',
      amount: '+400000 сум',
      type: 'positive',
   },
   {
      title: 'Вывод на карту',
      date: '09.04.2025',
      amount: '-200000 сум',
      type: 'negative',
   },
   {
      title: 'Покупка ячейки',
      date: '01.04.2025',
      amount: '-300000 сум',
      type: 'negative',
   },
];
</script>

<template>
   <main>
      <div class="p-6 overflow-auto space-y-6">
         <div class="flex justify-between">

            <div class=" w-full p-4">
               <div class="flex justify-end mb-2">
                  <button class="text-black font-medium">Выбрать число ▾</button>
               </div>
               <div
                  class="bg-gradient-to-b from-[#1d442f] to-[#85b0a1] rounded-xl shadow-lg overflow-hidden divide-y divide-white/10">
                  <div v-for="(item, i) in transactions" :key="i"
                     class="flex items-center justify-between p-4 text-white hover:bg-white/10 transition">
                     <div class="flex items-center gap-3">
                        <div class="h-8 w-8 rounded-full bg-white/70"></div>
                        <div>
                           <p class="text-sm font-medium">{{ item.title }}</p>
                           <p class="text-xs text-white/80">{{ item.date }}</p>
                        </div>
                     </div>
                     <div :class="[
                        'text-sm font-semibold whitespace-nowrap',
                        item.type === 'positive' ? 'text-green-300' : 'text-red-300',
                     ]">
                        {{ item.amount }}
                     </div>
                  </div>
               </div>
            </div>
            <ProfileSection :user="userData" @add-friend="handleAddFriend" />

         </div>

         <div class="flex justify-between">
            <ProfileStatsSection :balance="balance" currency-label="Lime" token-name="Lime/LIME"
               token-logo="https://picsum.photos/id/1/200/300" earnings1="7.048" earnings2="7.048" />


            <div class="w-full max-w-7xl mx-auto p-4">
               <h1 class="text-2xl font-bold mb-6">История & Баланс</h1>
               <div class="flex flex-col md:flex-row justify-center gap-6">

                  <div class="flex-1 h-[262px] bg-white rounded-xl shadow p-4">
                     <h2 class="text-lg font-semibold mb-3">История вашего действия:</h2>
                     <ul
                        class="space-y-2 text-sm text-white font-medium bg-gradient-to-b from-[#305845] to-[#90b9a7] p-4 rounded-lg">
                        <li>Вывод суммы: -200000 сум</li>
                        <li>Вывод суммы: -200000 сум</li>
                        <li>Вывод суммы: -200000 сум</li>
                        <li>Вывод суммы: -200000 сум</li>
                     </ul>
                  </div>

                  <div
                     class="flex-1 bg-gradient-to-b h-[262px] from-[#305845] to-[#90b9a7] rounded-xl shadow text-center p-6 text-white flex flex-col justify-center items-center">
                     <div class="bg-white/80 text-[#305845] font-semibold px-4 py-2 rounded-full mb-4 text-sm">
                        Ваш уровень 1
                     </div>
                     <p class="text-sm font-medium">
                        Ваш уровень сам автоматически повышается после каждой покупки
                     </p>
                  </div>

                  <div class="flex-1 bg-white h-[262px] rounded-xl shadow p-4">
                     <h2 class="text-lg font-semibold mb-3">Ваши покупки:</h2>
                     <ul
                        class="space-y-2 text-sm text-white font-medium bg-gradient-to-b from-[#305845] to-[#90b9a7] p-4 rounded-lg">
                        <li>Покупка ячейки: -300000 сум</li>
                        <li>Покупка ячейки: -300000 сум</li>
                        <li>Покупка ячейки: -300000 сум</li>
                     </ul>
                  </div>
               </div>

            </div>
         </div>
      </div>
   </main>
</template>