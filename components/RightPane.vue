<script lang="ts" setup>
import ShowcaseCard from './ShowcaseCard.vue';

const { data: certs } = await useDatabase().getCertificates();
const { data: projects } = await useDatabase().getProjects();
const { data: works } = await useDatabase().getWork();
const { data: researches } = await useDatabase().getResearch();

const showcase = ref<{
    data: any,
    title: string,
    id: string
}[]>([
    {
        data: works,
        title: "Work Experience.",
        id: "work"
    },
    {
        data: projects,
        title: "Projects.",
        id: "projects"
    },
    {
        data: researches,
        title: "Research Work.",
        id: "research"
    },
    {
        data: certs,
        title: "Certificates and Achievements.",
        id: "certs"
    }
])
</script>

<template>
    <div class="flex flex-col gap-8 max-h-full overflow-y-overlay h-fit mx-auto w-full" id="content">
        <ShowcaseCard v-for="element in showcase" :key="element.id" :data="element.data" :title="element.title"
            :idval="element.id" />
    </div>
</template>