<template>
  <div class=" flex items-center p-6 justify-center bg-white h-screen">
    <div class="bg-green px-11 py-16 rounded-[30px] max-w-[433px] w-full">
      <div class="flex flex-col gap-10">
        <FGroup label-class="text-white font-medium text-[20px] leading-5" label="E-mail">
          <FInput class="!rounded-full !px-5 !py-5 focus-within:!bg-transparent" input-class="!text-white"
                  placeholder="E-mail kiriting..." v-model="form.values.email"
                  :error="form.$v.value.email?.$error || isError"/>
        </FGroup>
        <FGroup label-class="text-white font-medium text-[20px] leading-5" label="Tasdiqlash uchun kod">
          <FInput class="!rounded-full !px-5 !py-5 focus-within:!bg-transparent" input-class="!text-white"
                  placeholder="Tasdiqlash kodini kiriting..."
                  v-model="form.values.code"
                  :error="form.$v.value.code?.$error || isError"/>
          <div class="text-right text-white mt-2 text-sm">
            <span
                v-if="!isCountdownActive"
                @click="startCountdown"
                class="cursor-pointer underline hover:text-gray-200"
            >
              Kod olish
            </span>
            <span v-else>
              Qayta kod olish 00:{{ formattedTimer }}
            </span>
          </div>
        </FGroup>

        <CButton variant="info" class="w-full !rounded-full hover:!bg-gray-100" text="Kod jo'natish" @click="submit"/>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import FInput from "@/components/Form/Input/FInput.vue";
import FGroup from "@/components/Form/FGroup.vue";
import {computed, onUnmounted, ref} from "vue";
import {useForm} from "@/composables/useForm";
import {required} from "@vuelidate/validators";

import {useAuthStore} from "@/store/auth";
import {useCustomToast} from "@/composables/useCustomToast";
import apiService from "@/services/ApiService";
import {useRouter} from "vue-router";
import CButton from "@/components/Common/CButton.vue";

const {showToast} = useCustomToast();


const loading = ref(false)
const isError = ref(false)
const store = useAuthStore();
const router = useRouter();
// const handleLogin = () => {
//   console.log({email: email.value, password: password.value, rememberMe: rememberMe.value});
// };
const form = useForm(
    {
      email: "",
      code: "",
    },
    {
      email: {
        required,
      },
      code: {
        required,
      },
    }
);

async function submit() {
  form.$v.value.$touch();

  if (!form.$v.value.$invalid) {
    isError.value = false;
    try {
      loading.value = true;
      await store.verifyOtp(form.values);
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


const timer = ref(120);
const isCountdownActive = ref(false);
let intervalId: any = null;

const formattedTimer = computed(() => {
  const seconds = timer.value % 60;
  return seconds < 10 ? `0${seconds}` : seconds;
});

async function startCountdown() {
  if (isCountdownActive.value) return;

  isCountdownActive.value = true;
  timer.value = 120;

  // kod olish funksiyasi shu yerda chaqilsa bo'ladi
  // await store.sendOtp(form.values.email)

  intervalId = setInterval(() => {
    if (timer.value > 0) {
      timer.value--;
    } else {
      clearInterval(intervalId);
      isCountdownActive.value = false;
    }
  }, 1000);
  await store.getOtpCode(form.values.email);
}

onUnmounted(() => {
  if (intervalId) clearInterval(intervalId);
});
</script>