<script lang="ts" setup>
import {ref} from 'vue';
import FGroup from "@/components/Form/FGroup.vue";
import FInput from "@/components/Form/Input/FInput.vue";

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
    <h2 class="text-[40px] text-[#000000] font-normal mb-8">Ro`yxatdan o`tish</h2>

    <form @submit.prevent="handleRegister" class="w-full max-w-4xl grid grid-cols-2 gap-7 px-10">
      <FGroup label-class="text-gray font-medium text-base leading-5" label="E-mail">
        <FInput class="!rounded-full !px-5 !py-5" placeholder="E-mail kiriting..."/>
      </FGroup>
      <FGroup label-class="text-gray font-medium text-base leading-5" label="E-mail">
        <FInput class="!rounded-full !px-5 !py-5" placeholder="E-mail kiriting..."/>
      </FGroup>
      <FGroup label-class="text-gray font-medium text-base leading-5" label="E-mail">
        <FInput class="!rounded-full !px-5 !py-5" placeholder="E-mail kiriting..."/>
      </FGroup>
      <FGroup label-class="text-gray font-medium text-base leading-5" label="E-mail">
        <FInput class="!rounded-full !px-5 !py-5" placeholder="E-mail kiriting..."/>
      </FGroup>
      <FGroup label-class="text-gray font-medium text-base leading-5" label="E-mail">
        <FInput class="!rounded-full !px-5 !py-5" placeholder="E-mail kiriting..."/>
      </FGroup>
      <FGroup label-class="text-gray font-medium text-base leading-5" label="E-mail">
        <FInput class="!rounded-full !px-5 !py-5" placeholder="E-mail kiriting..."/>
      </FGroup>
      <FGroup label-class="text-gray font-medium text-base leading-5" label="E-mail">
        <FInput class="!rounded-full !px-5 !py-5" placeholder="E-mail kiriting..."/>
      </FGroup>
      <FGroup label-class="text-gray font-medium text-base leading-5" label="E-mail">
        <FInput class="!rounded-full !px-5 !py-5" placeholder="E-mail kiriting..."/>
      </FGroup>
      <FGroup label-class="text-gray font-medium text-base leading-5" label="E-mail">
        <FInput class="!rounded-full !px-5 !py-5" placeholder="E-mail kiriting..."/>
      </FGroup>
      <FGroup label-class="text-gray font-medium text-base leading-5" label="E-mail">
        <FInput class="!rounded-full !px-5 !py-5" placeholder="E-mail kiriting..."/>
      </FGroup>

    </form>

    <div class=" bg-green-800 w-full ">
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
          <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" class="h-5"/>
          Продолжить с Google
        </button>
      </div>
    </div>
  </div>
</template>
