<script setup>
</script>

<template>
     <!-- Main Section -->
      <main class="p-6 overflow-auto space-y-6">
        <!-- About Section -->
        <section class="bg-[#A4BCE9] text-white p-6 rounded-xl shadow">
          <h2 class="text-xl font-semibold mb-2">О нас</h2>
          <p>
            Мы команда энтузиастов и профессионалов в области цифровых технологий, маркетинга и автоматизации.
            Наша цель — дать каждому возможность развиваться, учиться и зарабатывать деньги в безопасной и современной онлайн-среде.
          </p>
          <button class="mt-4 bg-white text-blue-700 px-4 py-1 rounded">ещё</button>
        </section>

        <!-- Balance Section -->
        <section class="flex gap-6">
          <div class="bg-white p-6 rounded-xl shadow w-1/2">
            <h3 class="text-gray-600 mb-2">Ваш баланс</h3>
            <div class="text-3xl font-bold text-gray-800">21.533.10 <span class="text-sm">Lime</span></div>
            <div class="mt-4 flex justify-between text-sm">
              <div><strong>Доход:</strong> 7.048 Lime</div>
              <div><strong>Расходы:</strong> 2.013 Lime</div>
            </div>
          
          </div>

        
          <div class="bg-[#A4BCE9] text-white p-6 rounded-xl shadow w-1/2 flex flex-col justify-between">
            <div>
              <h3 class="text-xl font-semibold mb-2">Профиль</h3>
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
            </div>
            <button class="mt-4 bg-white text-blue-700 px-4 py-1 rounded">Добавить друга</button>
          </div>
        </section>

        <!-- Password Change -->
         <section class="bg-white p-6 rounded-xl shadow flex flex-col gap-4 w-full md:w-1/2">
          <div class="flex items-center gap-2">
            <img src="https://flagcdn.com/w40/ru.png" alt="ru" class="w-6" />
            <span class="text-sm">Rus</span>
          </div>
          <input type="password" placeholder="Ваш старый пароль" class="border px-4 py-2 rounded" />
          <input type="password" placeholder="Ваш новый пароль" class="border px-4 py-2 rounded" />
          <button class="bg-blue-600 text-white px-4 py-2 rounded">Изменить</button>
        </section>
      </main>
</template>