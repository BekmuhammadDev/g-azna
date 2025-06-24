<script lang="ts" setup>
import { ref } from 'vue';

const email = ref('');
const password = ref('');
const rememberMe = ref(false);

const handleLogin = () => {
  console.log({ email: email.value, password: password.value, rememberMe: rememberMe.value });
};
</script>

<template>
  <div class="flex min-h-screen">
 
    <div class="w-1/2 p-10 bg-white flex flex-col justify-center">
      <h1 class="text-[40px] font-bold text-green-800">Lime Academy</h1>
      <h2 class="text-[48px] font-semibold mt-4">Войти</h2>

      <p class="text-[18px] mt-2">
        Нет аккаунта?
        <a href="/register" class="text-green-600 text-[16px] hover:underline">Создать здесь</a>
      </p>

      <form @submit.prevent="handleLogin" class="space-y-4 mt-6">
        <label>E-mail</label>
        <input v-model="email" type="email" placeholder="E-mail" class="w-full px-4 py-2 border rounded" />
        <label>password</label>
        <input v-model="password" type="password" placeholder="Пароль" class="w-full px-4 py-2 border rounded" />

        <div class="flex items-center justify-between text-sm">
          <label>
            <input type="checkbox" v-model="rememberMe" />
            Запомнить меня
          </label>
          <a href="/forgot" class="text-green-600">Забыли пароль?</a>
        </div>

        <button type="submit" class="w-full py-2 bg-green-800 text-white rounded">Войти</button>
        <div class="text-center text-sm text-gray-500">или</div>
        <button type="button" class="w-full py-2 border flex items-center justify-center gap-2 rounded">
          <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" class="h-5" />
          Продолжить с Google
        </button>
      </form>
    </div>

    <!-- Right Info Block -->
    <div class="w-1/2 bg-gradient-to-b from-green-900 to-green-700 text-white p-10 flex flex-col justify-center">
      <div class="mb-8">
        <p class="text-sm">Помощь</p>
      </div>
      <div class="bg-white text-black rounded p-6 w-[300px]">
        <h3 class="text-lg font-bold">Как это работает?</h3>
        <p class="text-sm mt-2">После регистрации вы попадаете в центр аналитики и получаете доступ к статистике.</p>
        <button class="mt-4 px-4 py-2 bg-green-800 text-white rounded">Читать дальше</button>
        <div class="mt-4 text-xs">Заработано: <strong>$350.40</strong></div>
      </div>

      <div class="mt-10 text-sm">
        <h4 class="font-bold">Lime Academy</h4>
        <p class="mt-2">
          Это больше, чем просто онлайн-платформа. Это пространство, где знание сочетается с возможностью построить свою систему дохода.
        </p>
      </div>
    </div>
  </div>
</template>
