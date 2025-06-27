<script setup>
import { useKeenSlider } from 'keen-slider/vue';

const cards = [
    {
        title: 'История вашего действия:',
        list: ['Вывод суммы: -200000 сум', 'Вывод суммы: -200000 сум', 'Вывод суммы: -200000 сум'],
        bg: 'bg-white',
        innerBg: 'bg-gradient-to-b from-[#305845] to-[#90b9a7]',
        text: 'text-white',
    },
    {
        title: '',
        bg: 'bg-gradient-to-b from-[#305845] to-[#90b9a7]',
        text: 'text-white',
    },
    {
        title: 'Ваши покупки:',
        list: ['Покупка ячейки: -300000 сум', 'Покупка ячейки: -300000 сум'],
        bg: 'bg-white',
        innerBg: 'bg-gradient-to-b from-[#305845] to-[#90b9a7]',
        text: 'text-white',
    },
];

const [sliderRef, slider] = useKeenSlider({
    slides: { perView: 1, spacing: 15 },
    loop: true,
    breakpoints: {
        '(min-width: 768px)': {
            slides: { perView: 2, spacing: 20 },
        },
        '(min-width: 1024px)': {
            slides: { perView: 3, spacing: 30 },
        },
    },
});

const nextSlide = () => slider.value?.next();
const prevSlide = () => slider.value?.prev();
</script>

<template>
    <main>
        <div class=" max-w-7xl w-full overflow-hidden p-4">
            <div class="flex justify-between">
                <h1 class="text-2xl font-bold mb-6">История & Баланс</h1>
                <div class="flex gap-10">
                    <div class="  left-0 z-10">
                        <button @click="prevSlide" class="bg-white text-black p-2 px-3 w-full rounded shadow">‹</button>
                    </div>
                    <div class=" right-0 z-10">
                        <button @click="nextSlide" class="bg-white text-black p-2 px-3 rounded shadow">›</button>
                    </div>
                </div>
            </div>


            <div class="relative flex">
                <div ref="sliderRef" class="keen-slider flex">
                    <div class="keen-slider__slide " v-for="(card, index) in cards" :key="index">
                        <div class="h-[262px] rounded-xl shadow p-4" :class="card.bg">
                            <h2 v-if="card.title" class="text-lg font-semibold mb-3" :class="card.text">{{ card.title
                            }}</h2>
                            <ul v-if="card.list" class="space-y-2 text-sm font-medium p-4 rounded-lg"
                                :class="[card.text, card.innerBg]">
                                <li v-for="(item, i) in card.list" :key="i">{{ item }}</li>
                            </ul>
                            <div v-else class="text-white flex flex-col justify-center items-center h-full text-center">
                                <div
                                    class="bg-white/80 text-[#305845] font-semibold px-4 py-2 rounded-full mb-4 text-sm">
                                    Ваш уровень 1
                                </div>
                                <p class="text-sm font-medium max-w-xs">
                                    Ваш уровень сам автоматически повышается после каждой покупки
                                </p>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    </main>
</template>