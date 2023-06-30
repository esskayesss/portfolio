<script lang="ts" setup>
defineProps<{
    data: any,
    title: string,
    idval: string
}>();
</script>

<template>
    <div class="h-fit" v-if="data.length != 0" :id="idval">
        <div class="text-xs md:text-sm tab:text-lg font-semibold pb-2 uppercase text-zinc-50" :id="idval + '-title'">{{
            title }}</div>
        <div class="flex flex-col gap-4 tab:gap-2">
            <DatedCard v-for="element in data" :key="element.id" :data="element" />
        </div>
    </div>
</template>