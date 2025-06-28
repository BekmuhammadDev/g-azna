<script setup lang="ts">
const cards = [
    {
        title: 'История вашего действия:',
        list: ['Вывод суммы: -200000 сум', 'Вывод суммы: -200000 сум', 'Вывод суммы: -200000 сум', 'Вывод суммы: -200000 сум'],
        bg: 'bg-white',
        innerBg: 'bg-[#305845]',
        text: 'text-white',
    },
    {
        title: '',
        bg: 'bg-gradient-to-b from-[#1b3b2b] via-[#285d44] to-[#90b9a7] ',
        text: 'text-white',
    },
    {
        title: 'Ваши покупки:',
        list: ['Покупка ячейки: -300000 сум', 'Покупка ячейки: -300000 сум', 'Покупка ячейки: -300000 сум', 'Покупка ячейки: -300000 сум'],
        bg: 'bg-white',
        innerBg: 'bg-[#305845]',
        text: 'text-white',
    },
];
</script>

<template>
    <main>
        <div class="max-w-7xl w-full mx-auto p-4">
            <div class="flex justify-between relative bottom-4 items-start mb-6">
                <h1 class="text-2xl font-bold">История & Баланс</h1>

                <div class="flex gap-4 items-start">
                    <button class="bg-white text-black p-2 px-3 rounded shadow">‹</button>
                    <button class="bg-white text-black p-2 px-3 rounded shadow">›</button>
                </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 px-9 lg:grid-cols-3 gap-6">
                <div v-for="(card, index) in cards" :key="index" :class="card.bg"
                    class="h-[282px] rounded-xl shadow-lg px-8 py-7" :style="{ boxShadow: '0px 4px 12px #8698C5' }">
                    <div v-if="card.list && card.title" class="mb-2">
                        <h2 class="text-base text-center mb-3 font-normal text-[#1C4532]">
                            {{ card.title }}
                        </h2>
                    </div>

                    <ul v-if="card.list" class="text-sm font-medium p-4 rounded-lg" :class="[card.text, card.innerBg]">
                        <li v-for="(item, i) in card.list" :key="i"
                            class="border-b-2 border-white py-2 last:border-none">
                            {{ item }}
                        </li>
                    </ul>

                    <div v-else class="text-white flex flex-col justify-center items-center h-full text-center">
                        <div class="bg-white text-[#8597C4] font-semibold px-10 py-5 rounded-md mb-10 text-sm">
                            Ваш уровень 1
                        </div>
                        <p class="text-sm font-bold text-center px-10 max-w-xs">
                            Ваш уровень сам автоматически повышается полсе каждой покупки
                        </p>
                    </div>
                </div>

            </div>
        </div>
    </main>
</template>
