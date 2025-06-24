<script lang="ts" setup>
import { ref } from 'vue';

const form = ref({
  email: '',
  hasPromoCode: '',
  firstName: '',
  lastName: '',
  promoCode: '',
  username: '',
  password: '',
  confirmPassword: '',
  jsn: '',
  city: '',
});

const handleRegister = () => {
  console.log('Registering:', form.value);
  // Registration logic
};
</script>

<template>
  <div class="min-h-screen flex flex-col items-center justify-center bg-white">
    <h2 class="text-2xl font-semibold mb-8">Регистрация</h2>

    <form @submit.prevent="handleRegister" class="w-full max-w-4xl grid grid-cols-2 gap-6 px-10">
      <input v-model="form.email" placeholder="email" class="border rounded px-4 py-2" />
      <input v-model="form.username" placeholder="Логин" class="border rounded px-4 py-2" />

      <input v-model="form.hasPromoCode" placeholder="Есть промокод?" class="border rounded px-4 py-2" />
      <input v-model="form.password" type="password" placeholder="Пароль" class="border rounded px-4 py-2" />

      <input v-model="form.firstName" placeholder="Имя" class="border rounded px-4 py-2" />
      <input v-model="form.confirmPassword" type="password" placeholder="Повторите пароль" class="border rounded px-4 py-2" />

      <input v-model="form.lastName" placeholder="Фамилия" class="border rounded px-4 py-2" />
      <input v-model="form.jsn" placeholder="JSHSHIR" class="border rounded px-4 py-2" />

      <input v-model="form.promoCode" placeholder="Партнерский код" class="col-span-2 border rounded px-4 py-2" />
      <input v-model="form.city" placeholder="Город" class="col-span-2 border rounded px-4 py-2" />

      <div class="col-span-2 flex flex-col items-center gap-4 mt-4">
        <button type="submit" class="bg-green-800 text-white px-6 py-2 rounded w-full max-w-sm">
          Зарегистрироваться
        </button>

        <div class="text-gray-500">или</div>

        <button type="button" class="border py-2 px-4 w-full max-w-sm flex items-center justify-center gap-2 rounded">
          <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" class="h-5" />
          Продолжить с Google
        </button>
      </div>
    </form>
  </div>
</template>
