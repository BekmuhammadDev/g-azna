<template>
  <div class=" flex flex-col items-center mt-10 justify-center bg-white h-screen">
    <div class="flex-1 flex flex-col max-w-[1200px] mx-auto w-full px-10">
      <h2 class="text-[40px] text-[#000000] font-normal mb-8 text-center">Ro`yxatdan o`tish</h2>

      <div class="w-full grid grid-cols-2 gap-7 gap-x-[100px]">
        <FGroup label-class="text-gray font-medium text-base leading-5" label="E-mail">
          <FInput class="!rounded-full !px-5 !py-5" placeholder="E-mail kiriting..." v-model="form.values.email"
                  :error="form.$v.value.email?.$error || isError"/>
        </FGroup>
        <FGroup label-class="text-gray font-medium text-base leading-5" label="Username">
          <FInput class="!rounded-full !px-5 !py-5" placeholder="Username kiriting..." v-model="form.values.login"
                  :error="form.$v.value.login?.$error || isError"/>
        </FGroup>
        <FGroup label-class="text-gray font-medium text-base leading-5" label="Promokod bormi?">
          <FInput class="!rounded-full !px-5 !py-5" placeholder="Promokod kiriting..." v-model="form.values.promocode"
                  :error="form.$v.value.promocode?.$error || isError"/>
        </FGroup>
        <FGroup label-class="text-gray font-medium text-base leading-5" label="Parol">
          <FInput class="!rounded-full !px-5 !py-5" placeholder="Parol kiriting..." v-model="form.values.password"
                  :error="form.$v.value.password?.$error || isError"/>
        </FGroup>
        <FGroup label-class="text-gray font-medium text-base leading-5" label="Ismingiz">
          <FInput class="!rounded-full !px-5 !py-5" placeholder="Ism kiriting..." v-model="form.values.first_name"
                  :error="form.$v.value.first_name?.$error || isError"/>
        </FGroup>
        <FGroup label-class="text-gray font-medium text-base leading-5" label="Parolni qaytaring">
          <FInput class="!rounded-full !px-5 !py-5" placeholder="Parol kiriting..."
                  v-model="form.values.confirm_password"
                  :error="form.$v.value.confirm_password?.$error || isError"/>
        </FGroup>
        <FGroup label-class="text-gray font-medium text-base leading-5" label="Familiya">
          <FInput class="!rounded-full !px-5 !py-5" placeholder="Familiya kiriting..." v-model="form.values.last_name"
                  :error="form.$v.value.last_name?.$error || isError"/>
        </FGroup>
        <FGroup label-class="text-gray font-medium text-base leading-5" label="JShShIR">
          <FInput class="!rounded-full !px-5 !py-5" placeholder="Shu yerga yozing" v-model="form.values.jshshir"
                  :error="form.$v.value.jshshir?.$error || isError"/>
        </FGroup>
        <FGroup label-class="text-gray font-medium text-base leading-5" label="Patner kodi">
          <FInput class="!rounded-full !px-5 !py-5" placeholder="code kiriting..." v-model="form.values.invite"
                  :error="form.$v.value.invite?.$error || isError"/>
        </FGroup>
        <FGroup label-class="text-gray font-medium text-base leading-5" label="Seriya">
          <FInput class="!rounded-full !px-5 !py-5" placeholder="Shu yerga yozing" v-model="form.values.seriya_number"
                  :error="form.$v.value.seriya_number?.$error || isError"/>
        </FGroup>
      </div>
    </div>
    <div class="max-w-[580px] mx-auto w-full pb-[300px]">
      <CButton variant="primary" text="Ro`yxatdan o`tish" class="w-full" @click="submit"/>
    </div>

  </div>
</template>
<script lang="ts" setup>
import {useForm} from "@/composables/useForm";
import {required} from "@vuelidate/validators";
import {ref} from 'vue';
import FGroup from "@/components/Form/FGroup.vue";
import FInput from "@/components/Form/Input/FInput.vue";
import CButton from "@/components/Common/CButton.vue";
import {useAuthStore} from "@/store/auth";
import {useCustomToast} from "@/composables/useCustomToast";
import apiService from "@/services/ApiService";
import {useRouter} from "vue-router";

const {showToast} = useCustomToast();

const rememberMe = ref(false);
const loading = ref(false)
const isError = ref(false)
const store = useAuthStore();
const router = useRouter();

const form = useForm(
    {
      email: "",
      login: "",
      jshshir: "",
      seriya_number: "",
      first_name: "",
      last_name: "",
      password: "",
      promocode: "",
      invite: "",
      confirm_password: ""
    },
    {
      login: {
        required,
      },
      password: {
        required,
      },
      email: {
        required,
      },
      first_name: {
        required,
      },
      last_name: {
        required,
      },
      invite: {
        required,
      },
      confirm_password: {
        required,
      }
    }
);

async function submit() {
  form.$v.value.$touch();

  if (!form.$v.value.$invalid) {
    isError.value = false;
    try {
      loading.value = true;
      await store.register(form.values);
      apiService.setHeader();
      await store.fetchUserData();
      await router.push("/");
    } catch (err) {

      isError.value = true;
      showToast(
          err?.response?.data?.[0]?.error?.message ||
          err?.response?.data?.errors[0]?.message ||
          'username va parol mos kelamadi',
          "error"
      );
    } finally {
      loading.value = false;
    }
  }
}
</script>

