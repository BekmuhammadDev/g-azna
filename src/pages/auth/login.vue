<template>
  <div class="flex min-h-screen">

    <div class="w-1/2 bg-white container flex flex-col justify-center  items-center !p-10">
      <div class="max-w-[580px] w-full flex flex-col">
        <h2 class="text-[48px] font-bold mb-8">Kirish</h2>

        <p class="text-lg mt-2 text-gray">
          Akkaunt yuqmi?
          <router-link to="/register" class="text-green-600 text-[16px] underline">Promocode orqali ro`yxatdan
            o`tish
          </router-link>
        </p>

        <form @submit.prevent="handleLogin" class="space-y-8 mt-10 w-full">
          <FGroup label-class="text-gray font-medium text-base leading-5" label="E-mail">
            <FInput placeholder="E-mail kiriting..."/>
          </FGroup>
          <FGroup label-class="text-gray font-medium text-base leading-5" label="Parol">
            <FInputPassword placeholder="Parol kiriting..."/>
          </FGroup>
          <div class="flex items-center justify-between text-sm">
            <label>
              <input type="checkbox" v-model="rememberMe"/>
              Eslab qolish
            </label>
            <a href="/forgot" class="text-green-600 underline">Parolni unutdingizmi?</a>
          </div>
          <CButton
              variant="primary"
              :disabled="disabled"
              :loading="loading"
              text="Kirish"
              class="w-full"
              type="submit"
              @click="onSubmit"
          />
          <div class="text-center text-sm text-gray-500">yoki</div>
          <button type="button" class="w-full py-2 border flex items-center justify-center gap-2 rounded">
            <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" class="h-5"/>
            Google bilan davom eting
          </button>
        </form>
      </div>
    </div>

    <div
        class="w-1/2 bg-green text-white container p-10 pr-[100px] flex flex-col justify-between items-end relative">
      <img src="/images/circle.png" alt="dec" class="absolute top-0 right-0 w-1/2"/>
      <img src="/images/logo.png" alt="logo" class="max-w-[180px]"/>
      <div class="relative max-w-[525px]">
        <img src="/images/add.png" alt="add" class="size-full aspect-video"/>
        <img src="/images/income.png" alt="income" class="max-w-[287px] absolute -bottom-[50px] right-0"/>
      </div>


      <div class="space-y-2">
        <h4 class="font-semibold text-white-100 text-end text-[40px] ">G'azna Platformasi</h4>
        <p class="text-right text-base text-gray-100 font-normal leading-[140px]">
          Bu nafaqat onlayn platforma. Bu bilim sizning daromad tizimingizni qurish imkoniyati bilan birlashtirilgan
          makon. Biz matritsa tuzilishi va zamonaviy raqamli vositalarni birlashtirdik, shunda har bir ishtirokchi
          o'sishi, o'rganishi va daromad olishi mumkin.
        </p>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import CButton from "@/components/Common/CButton.vue";
import {ref} from 'vue';
import FGroup from "@/components/Form/FGroup.vue";
import FInputPassword from "@/components/Form/Input/FInputPassword.vue";
import FInput from "@/components/Form/Input/FInput.vue";

const email = ref('');
const password = ref('');
const rememberMe = ref(false);

const handleLogin = () => {
  console.log({email: email.value, password: password.value, rememberMe: rememberMe.value});
};
</script>
