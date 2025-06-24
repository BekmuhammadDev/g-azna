<script setup lang="ts">
import { RouterLink, useRoute } from 'vue-router'
import { Home, User, BookOpen, Wallet, Users, FileText, Handshake, GraduationCap, ShoppingCart, Store, BadgeDollarSign } from 'lucide-vue-next'

const route = useRoute();

const navGroups = [
    {
        title: null, // asosiy menyu
        items: [
            { label: 'Главный', to: '/home', icon: Home },
            { label: 'Профиль', to: '/profile', icon: User },
            { label: 'Курсы', to: '/courses', icon: BookOpen },
            { label: 'Баланс', to: '/balance', icon: Wallet },
        ]
    },
    {
        title: 'Сообщество',
        items: [
            { label: 'Соревнования', to: '/community/competitions', icon: Users },
            { label: 'Статьи', to: '/community/articles', icon: FileText },
            { label: 'Партнеры', to: '/community/partners', icon: Handshake },
        ]
    },
    {
        title: 'Сервисы',
        items: [
            { label: 'Онлайн школа', to: '/services/academy', icon: GraduationCap },
            { label: 'P2P Market', to: '/services/p2p', icon: ShoppingCart },
            { label: 'Маркетплейс', to: '/services/marketplace', icon: Store },
        ]
    },
];

</script>


<template>
    <aside class="w-64 bg-gradient-to-b from-[#AECAEC] to-[#8697C5] text-white flex flex-col p-4">
        <h1 class="text-[30px] text-black mt-6 font-bold">Lime Academy</h1>
        <nav class="space-y-2 font-medium py-7">
            <template v-for="(group, groupIndex) in navGroups" :key="groupIndex">
                <div v-if="group.title" class="mt-6">
                    <hr class="border-black mb-2" />
                    <p class="text-sm font-semibold px-7 mb-2">{{ group.title }}</p>
                </div>

                <template v-for="item in group.items" :key="item.to">
                    <RouterLink :to="item.to"
                        class="flex items-center gap-3 px-7 py-2 rounded-[16px] transition-all duration-300 ease-in-out hover:bg-gray-700/80"
                        :class="{ 'bg-black text-white': route.path === item.to }">
                        <component :is="item.icon" class="w-5 h-5" />
                        {{ item.label }}
                    </RouterLink>
                </template>
            </template>
        </nav>

    </aside>
</template>