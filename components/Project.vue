<script lang="ts" setup>
defineProps<{
    title: string,
    employer: string,
    link: string,
    period: string,
    about: string,
    tech: string[],
}>();
</script>

<template>
    <NuxtLink :to="link"
        class="hover:bg-zinc-800/40 p-4 rounded-md font-medium duration-200 grid grid-cols-11 gap-6 link h-full ">
        <div class="time h-full align-top w-fit col-span-2">
            <div class="capitalize text-zinc-400 text-md font-semibold align-top min-w-fit">{{ period }}</div>
        </div>
        <div class="flex flex-col col-span-9">
            <div class="work flex gap-2 font-semibold text-xl h-fit">
                <div class="title">{{ title }}</div>
                <div class="cdot"> • </div>
                <div class="employers">{{ employer }}</div>
                <Icon name="material-symbols:arrow-outward" class="text-2xl goicon duration-700" />
            </div>
            <div class="work flex gap-2 font-medium">
                {{ about }}
            </div>
            <div class="flex flex-row flex-wrap w-full">
                <div class="tag text-zinc-50 text-sm font-semibold bg-accentlight/10 backdrop-blur-xl rounded-md px-2 py-1 m-1"
                    v-for="tag in tech">
                    {{ tag }}
                </div>
            </div>
        </div>
    </NuxtLink>
</template>

<style>
.link:hover .goicon {
    @apply text-xl;
    transform: translateX(5px);
}
</style>