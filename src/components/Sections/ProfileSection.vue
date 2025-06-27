<script setup lang="ts">
import {
    Instagram,
    Youtube,
    Music2,
} from 'lucide-vue-next'
import FGroup from "@/components/Form/FGroup.vue";
import FInputPassword from "@/components/Form/Input/FInputPassword.vue";
import CButton from '../Common/CButton.vue';

defineProps<{
    user: {
        name: string;
        email: string;
        avatarUrl: string;
        followers: number;
        following: number;
        mentors: number;
    };
}>();

const emit = defineEmits<{
    (e: 'add-friend'): void;
}>();

import { useRoute } from 'vue-router';
import { computed } from 'vue';

const route = useRoute();
const isBalance = computed(() => route.path === '/balance');
</script>

<template>
    <div class="bg-gradient-to-r  from-[#305845] to-[#90b9a7] p-6 rounded-xl justify-between  flex w-full ">

        <div v-if="!isBalance">
            <div class="w-[400px] mt-10">
                <form class="bg-white p-6 rounded-2xl shadow px-8 md:px-14 flex flex-col gap-4 max-w-md mx-auto">
                    <FGroup label="">
                        <FInputPassword class="!rounded-full !px-5 !py-5" placeholder="Ваш старый пароль" />
                    </FGroup>

                    <FGroup label="">
                        <FInputPassword class="!rounded-full !px-5 !py-5" placeholder="Ваш новый пароль" />
                    </FGroup>

                    <div class="flex justify-center">
                        <CButton variant="gray" text=" Изменить" class="w-[150px]" type="submit" />
                    </div>
                </form>
            </div>

            <div class="flex gap-4 mt-10 items-center">
                <RouterLink to="/facebook">
                    <i class="bi bi-facebook text-white" style="font-size: 24px;"></i>
                </RouterLink>
                <RouterLink to="/instagram" class="transition">
                    <Instagram class="w-7 h-7 text-white" />
                </RouterLink>
                <RouterLink to="/tiktok" class="transition">
                    <Music2 stroke-width="4" class="w-7 h-7 text-white" />
                </RouterLink>
                <RouterLink to="/youtube" class="transition">
                    <Youtube class="w-7 h-7 text-white" />
                </RouterLink>
                <RouterLink to="/telegram">
                    <i class="bi bi-telegram text-white" style="font-size: 24px;"></i>
                </RouterLink>
            </div>
        </div>

        <div v-if="isBalance">
            <select name="" id="" class=" p-1 rounded-md">
                <option value="">Ru</option>
                <option value="">Uz</option>
            </select>
        </div>

        <div>
            <div class="flex items-center mb-3 justify-between">
                <h1 class="text-[32px] font-bold text-white">Профиль</h1>
                <div class=" cursor-pointer">
                    <span><i class="bi bi-heart-fill text-red-500 ml-40" style="font-size: 24px;"></i></span>
                </div>
            </div>
            <div class="flex items-center gap-4">
                <div>
                    <img src="https://picsum.photos/id/1/200/300" class="rounded-full h-14 w-14" alt="">
                </div>
                <div>
                    <p class="font-semibold text-white-100">{{ user.name }}</p>
                    <p class="text-sm text-white-100">{{ user.email }}</p>
                </div>
            </div>
            <div>
                <div class="mt-4 text-sm flex items-center gap-5 space-y-1">
                    <div>
                        <p class="text-xs font-bold text-white">Подписки:</p>
                        <p class="text-center text-white mt-2">{{ user.following }}</p>
                    </div>
                    <div>
                        <p class="text-xs font-bold text-white">Наставник: </p>
                        <p class="text-center text-white mt-2">{{ user.mentors }}</p>
                    </div>
                    <div>
                        <p class="text-xs font-bold text-white">Подписчики: </p>
                        <p class="text-center text-white mt-2">{{ user.followers }}</p>
                    </div>
                </div>
                <div v-if="!isBalance" class="flex justify-center mt-20 mr-24">
                    <CButton variant="gray" text=" Добавить друга" class="w-[159px]" @click="emit('add-friend')" />
                </div>
            </div>

            <div v-if="isBalance" class="flex justify-center mt-36 gap-4">
                <CButton variant="gray" text="Ссылка" class="w-[120px]" />
                <CButton variant="gray" text="Ещё" class="w-[120px]" />
            </div>
        </div>

    </div>
</template>
