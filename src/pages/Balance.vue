<script setup>
import ProfileSection from '@/components/Sections/ProfileSection.vue';
import ProfileStatsSection from '@/components/Sections/ProfileStatsSection.vue';
import BalancePageScrollbar from "@/components/Sections/BalancePage/BalancePageScrollbar.vue"
import BalancePageCaruselCard from '@/components/Sections/BalancePage/BalancePageCaruselCard.vue';

const userData = {
  name: 'Donyorov Nizomiddin',
  email: 'example@gmail.com',
  avatarUrl: 'https://i.pravatar.cc/100', // test image
  followers: 50,
  following: 5,
  mentors: 1,
};
</script>

<template>
  <main>
    <div class="p-6 overflow-auto space-y-6">
      <div class="flex justify-between">
        <BalancePageScrollbar />
        <ProfileSection :user="userData" @add-friend="handleAddFriend" />
      </div>

      <div class="flex overflow-hidden gap-10">
        <ProfileStatsSection :balance="balance" currency-label="Lime" token-name="Lime/LIME"
          token-logo="https://picsum.photos/id/1/200/300" earnings1="7.048" earnings2="7.048" />
        <BalancePageCaruselCard />
      </div>
    </div>
  </main>
</template>

<style scoped>
@import 'keen-slider/keen-slider.min.css';
</style>