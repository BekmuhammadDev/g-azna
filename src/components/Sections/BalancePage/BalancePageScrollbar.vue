<script setup>
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
    {
        title: 'Покупка ячейки',
        date: '01.04.2025',
        amount: '-300000 сум',
        type: 'negative',
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

    <div class="w-[600px] p-4">
        <div class="bg-gradient-to-b from-[#1b3b2b] via-[#285d44] to-[#90b9a7] rounded-xl shadow-lg w-[400px] h-[400px] overflow-auto divide-y divide-white/10">
            <div class="max-h-[400px] overflow-y-auto">
                <div v-for="(item, i) in transactions" :key="i"
                    class="flex items-center justify-between p-4 text-white hover:bg-white/10 transition">
                    <div class="flex items-center gap-3">
                        <div class="h-10 w-10 rounded-full bg-white"></div>
                        <div>
                            <p class="text-sm font-semibold mb-2">{{ item.title }}</p>
                            <p class="text-[11px] font-extrabold text-white/80">{{ item.date }}</p>
                        </div>
                    </div>
                    <div :class="[
                        'text-sm font-semibold whitespace-nowrap',
                    ]">
                        {{ item.amount }}
                    </div>
                </div>
            </div>

        </div>
    </div>

</template>