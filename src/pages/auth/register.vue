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
};
</script>

<template>
    <div class=" flex flex-col items-center mt-10 justify-center bg-white">
        <h2 class="text-[40px] text-[#000000] font-normal mb-8">Регистрация</h2>

        <form @submit.prevent="handleRegister" class="w-full max-w-4xl grid grid-cols-2 gap-7 px-10">

            <div>
                <label for="" class=" ml-2">Email</label>
                <input v-model="form.email" placeholder="email" class="border w-full rounded-3xl px-4 py-3" />
            </div>


            <div>
                <label for="" class=" ml-2">Логин</label>
                <input v-model="form.username" placeholder="Логин" class="border w-full rounded-3xl px-4 py-3" />
            </div>

            <div>
                <label for="" class=" ml-2">Есть промокод?</label>
                <input v-model="form.hasPromoCode" placeholder="Есть промокод?"
                    class="border w-full rounded-3xl px-4 py-3" />
            </div>

            <div>
                <label for="" class=" ml-2">Пароль</label>
                <input v-model="form.password" type="password" placeholder="Пароль"
                    class="border w-full rounded-3xl px-4 py-3" />
            </div>

            <div>
                <label for="" class=" ml-2">Имя</label>
                <input v-model="form.firstName" placeholder="Имя" class="border w-full rounded-3xl px-4 py-3" />
            </div>

            <div>
                <label for="" class=" ml-2">Повторите пароль</label>
                <input v-model="form.confirmPassword" type="password" placeholder="Повторите пароль"
                    class="border w-full rounded-3xl px-4 py-3" />
            </div>

            <div>
                <label for="" class=" ml-2">Фамилия</label>
                <input v-model="form.lastName" placeholder="Фамилия" class="border w-full rounded-3xl px-4 py-3" />
            </div>

            <div>
                <label for="" class=" ml-2">JShShIR</label>
                <input v-model="form.jsn" placeholder="JSHSHIR" class="border w-full rounded-3xl px-4 py-3" />
            </div>

            <div>
                <label for="" class=" ml-2">Партнёрский код</label>
                <input v-model="form.promoCode" placeholder="Партнерский код"
                    class="col-span-2 border w-full rounded-3xl px-4 py-3" />
            </div>

            <div>
                <label for="" class=" ml-2">Серия</label>
                <input v-model="form.city" placeholder="Город" class="col-span-2 border w-full rounded-3xl px-4 py-3" />
            </div>
        </form>

        <div class=" bg-green-800 w-full  mt-10">
            <div class="col-span-2 flex flex-col items-center py-10 gap-4">
                <button type="submit" class="bg-white rounded-2xl text-[#064E3B] px-6 py-2 w-full max-w-sm">
                Зарегистрироваться
            </button>

            <div class="flex items-center gap-4">
                <div class="flex-grow w-[150px] h-px bg-white/40"></div>
                <div class="text-white text-sm">или</div>
                <div class="flex-grow w-[150px] h-px bg-white/40"></div>
            </div>


            <button type="button"
                class="border bg-white text-black rounded-2xl py-2 px-4 w-full max-w-sm flex items-center justify-center gap-2 ">
                <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" class="h-5" />
                Продолжить с Google
            </button>
            </div>
        </div>
    </div>
</template>
