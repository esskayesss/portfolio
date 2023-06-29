<script lang="ts" setup>
defineProps<{
    data: any,
    title: string,
    idval: string
}>();
</script>

<template>
    <div class="h-fit" v-if="data.length != 0" :id="idval">
        <div class="text-2xl md:text-3xl font-semibold pb-4" :id="idval + '-title'">{{ title }}</div>
        <div class="flex flex-col gap-4">
            <DatedCard v-for="element in data" :key="element.id" :data="element" />
        </div>
    </div>
</template>