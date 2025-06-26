<script setup lang="ts">
defineProps<{
  balance: string;
  title?: string;
  description?: string;
  buttonText?: string;
}>();
</script>

<template>
     <div>
    <div class="bg-gradient-to-b from-[#8798C5] to-[#8597C4] h-3/4 text-white p-6 rounded-xl shadow">
      <h2 class="text-[32px] text-center font-normal mb-2">{{ title || 'О нас' }}</h2>
      <p class="text-[32px] text-center font-normal leading-[1.1]">
        {{ description ||
          'Мы команда энтузиастов и профессионалов в области цифровых технологий, маркетинга и автоматизации. Наша цель - дать каждому возможность развиваться, учиться и зарабатывать деньги в безопасной и современной онлайн-среде.' }}
      </p>
      <div class="flex justify-end">
        <button class="mt-4 border text-white px-14 py-3 rounded">
          {{ buttonText || 'ещё' }}
        </button>
      </div>
    </div>
  </div>
</template>