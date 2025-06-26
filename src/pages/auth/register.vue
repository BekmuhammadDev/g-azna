<script lang="ts" setup>
import {ref} from 'vue';
import FGroup from "@/components/Form/FGroup.vue";
import FInput from "@/components/Form/Input/FInput.vue";
import CButton from "@/components/Common/CButton.vue";

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
  <div class=" flex flex-col items-center mt-10 justify-center bg-white h-screen">
    <div class="flex-1 flex flex-col max-w-[1200px] mx-auto w-full px-10">
      <h2 class="text-[40px] text-[#000000] font-normal mb-8 text-center">Ro`yxatdan o`tish</h2>

      <div class="w-full grid grid-cols-2 gap-7 gap-x-[100px]">
        <FGroup label-class="text-gray font-medium text-base leading-5" label="E-mail">
          <FInput class="!rounded-full !px-5 !py-5" placeholder="E-mail kiriting..."/>
        </FGroup>
        <FGroup label-class="text-gray font-medium text-base leading-5" label="Username">
          <FInput class="!rounded-full !px-5 !py-5" placeholder="Username kiriting..."/>
        </FGroup>
        <FGroup label-class="text-gray font-medium text-base leading-5" label="Promokod bormi?">
          <FInput class="!rounded-full !px-5 !py-5" placeholder="Promokod kiriting..."/>
        </FGroup>
        <FGroup label-class="text-gray font-medium text-base leading-5" label="Parol">
          <FInput class="!rounded-full !px-5 !py-5" placeholder="Parol kiriting..."/>
        </FGroup>
        <FGroup label-class="text-gray font-medium text-base leading-5" label="Ismingiz">
          <FInput class="!rounded-full !px-5 !py-5" placeholder="Ism kiriting..."/>
        </FGroup>
        <FGroup label-class="text-gray font-medium text-base leading-5" label="Parolni qaytaring">
          <FInput class="!rounded-full !px-5 !py-5" placeholder="Parol kiriting..."/>
        </FGroup>
        <FGroup label-class="text-gray font-medium text-base leading-5" label="Familiya">
          <FInput class="!rounded-full !px-5 !py-5" placeholder="E-mail kiriting..."/>
        </FGroup>
        <FGroup label-class="text-gray font-medium text-base leading-5" label="JShShIR">
          <FInput class="!rounded-full !px-5 !py-5" placeholder="Shu yerga yozing"/>
        </FGroup>
        <FGroup label-class="text-gray font-medium text-base leading-5" label="Patner kodi">
          <FInput class="!rounded-full !px-5 !py-5" placeholder="code kiriting..."/>
        </FGroup>
        <FGroup label-class="text-gray font-medium text-base leading-5" label="Seriya">
          <FInput class="!rounded-full !px-5 !py-5" placeholder="Shu yerga yozing"/>
        </FGroup>
      </div>
    </div>

    <div class="bg-green-800 w-full ">
      <div class="col-span-2 flex flex-col items-center py-10 gap-5 max-w-[530px] mx-auto">
        <CButton variant="info" text="Ro`yxatdan o`tish" class="w-full"/>

        <div class="flex items-center gap-4 w-full">
          <div class="flex-grow w-full h-px bg-white/40"></div>
          <div class="text-white text-sm">или</div>
          <div class="flex-grow w-full h-px bg-white/40"></div>
        </div>


        <button type="button"
                class="border bg-white text-gray-200 rounded-full py-2 px-4 w-full flex items-center justify-center gap-2 ">
          <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" class="h-5"/>
          Продолжить с Google
        </button>
      </div>
    </div>
  </div>
</template>
