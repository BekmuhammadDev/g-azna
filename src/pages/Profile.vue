<script setup>
import ProfileSection from '@/components/Sections/ProfileSection.vue';
import ProfileStatsSection from '@/components/Sections/ProfileStatsSection.vue';

const userData = {
    name: 'Donyorov Nizomiddin',
    email: 'example@gmail.com',
    avatarUrl: 'https://i.pravatar.cc/100', // test image
    followers: 50,
    following: 5,
    mentors: 1,
};

const balance = '21.533.10';

function handleAddFriend() {
    alert('Do‘st qo‘shildi!');
}
</script>

<template>
    <main>
        <div class="p-6 overflow-auto space-y-6">
            <div class="flex gap-8">
                <div class=" bg-gradient-to-b  from-[#305845] to-[#90b9a7] h-3/4 text-white p-6 rounded-xl shadow">
                    <h2 class="text-[32px] text-center font-normal mb-2">О нас</h2>
                    <p class="text-[32px] text-center font-normal leading-[1.1]">
                        Мы команда энтузиастов и профессионалов в области цифровых технологий, маркетинга и
                        автоматизации.
                        Наша цель-дать каждому возможность развиваться, учиться и зарабатывать деньги в безопасной и
                        современной
                        онлайн-среде.
                    </p>
                    <div class="flex justify-end">
                        <button class="mt-4 border text-white px-14 py-3 rounded ">ещё</button>
                    </div>
                </div>
                <ProfileStatsSection :balance="balance" currency-label="Lime" token-name="Lime/LIME"
                    token-logo="https://picsum.photos/id/1/200/300" earnings1="7.048" earnings2="7.048" />
            </div>
            <ProfileSection :user="userData" @add-friend="handleAddFriend" />
        </div>
    </main>
</template>