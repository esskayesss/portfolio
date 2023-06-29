<script lang="ts" setup>
defineProps<{
    data: any,
    title: string,
    idval: string
}>();
</script>

<template>
    <div class="h-fit" v-if="data.length != 0" :id="idval">
        <div class="text-3xl font-semibold pb-4" :id="idval + '-title'">{{ title }}</div>
        <DatedCard v-for="element in data" :key="element.id" :data="element" />
    </div>
</template>