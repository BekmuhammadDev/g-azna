<script setup lang="ts">
import {RouterLink, useRoute} from 'vue-router'
import {
  BookOpen,
  FileText,
  GraduationCap,
  Handshake,
  Home,
  ShoppingCart,
  Store,
  User,
  Users,
  Wallet
} from 'lucide-vue-next'

const route = useRoute();

const navGroups = [
  {
    title: null, // asosiy menyu
    items: [
      {label: 'Главный', to: '/home', icon: Home},
      {label: 'Профиль', to: '/profile', icon: User},
      {label: 'Курсы', to: '/courses', icon: BookOpen},
      {label: 'Баланс', to: '/balance', icon: Wallet},
    ]
  },
  {
    title: 'Сообщество',
    items: [
      {label: 'Соревнования', to: '/community/competitions', icon: Users},
      {label: 'Статьи', to: '/community/articles', icon: FileText},
      {label: 'Партнеры', to: '/community/partners', icon: Handshake},
    ]
  },
  {
    title: 'Сервисы',
    items: [
      {label: 'Онлайн школа', to: '/services/academy', icon: GraduationCap},
      {label: 'P2P Market', to: '/services/p2p', icon: ShoppingCart},
      {label: 'Маркетплейс', to: '/services/marketplace', icon: Store},
    ]
  },
];

</script>


<template>
  <aside class="w-64 bg-green-gradient text-white flex flex-col p-4">
    <div class="px-7">
      <img src="/images/logo.png" alt="logo" class="w-full"/>
    </div>
    <nav class="space-y-2 font-medium py-7">

      <template v-for="(group, groupIndex) in navGroups" :key="groupIndex">
        <div v-if="group.title" class="mt-6">
          <hr class="border-black mb-2"/>
          <p class="text-sm font-semibold px-7 mb-2">{{ group.title }}</p>
        </div>

        <template v-for="item in group.items" :key="item.to">
          <RouterLink :to="item.to"
                      class="flex items-center gap-3 px-7 py-2 rounded-[16px] ease-in-out hover:bg-white text-white hover:text-dark group transition-300"
                      :class="{ 'bg-white !text-dark transition-300': route.path === item.to }">
            <component :is="item.icon" class="w-5 h-5"/>
            {{ item.label }}
          </RouterLink>
        </template>
      </template>
    </nav>

  </aside>
</template>