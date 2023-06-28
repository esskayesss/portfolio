<script lang="ts" setup>
console.log('mounting a project')
const projects = ref<{
    title: string,
    employer: string,
    link: string,
    period: string,
    about: string,
    tech: string[],
}[]>([
    {
        title: "Apple",
        employer: "Apple",
        link: "https://apple.com",
        period: "2019 - 2021",
        about: "I worked on the Apple website.",
        tech: ["javascript", "cpp"]
    },
    {
        title: "Google",
        employer: "Google",
        link: "https://google.com",
        period: "2020 - 2021",
        about: "I worked on the Google search engine.",
        tech: ["python", "java"]
    },
    {
        title: "Microsoft",
        employer: "Microsoft",
        link: "https://microsoft.com",
        period: "2018 - 2019",
        about: "I worked on the Microsoft Office suite.",
        tech: ["c#", "typescript"]
    },
    {
        title: "Amazon",
        employer: "Amazon",
        link: "https://amazon.com",
        period: "2017 - 2018",
        about: "I worked on the Amazon e-commerce platform.",
        tech: ["ruby", "javascript"]
    }
])
</script>

<template>
    <div class="portfolio-data w-full justify-items-center mx-auto">
        <div class="min-w-[80%] font-semibold w-fit m-auto">
            <div class="text-2xl font-semibold mb-4" id="projects">Projects.</div>
            <Project v-for="project in projects" v-bind="project" />
        </div>
        <div class="min-w-[80%] font-semibold w-fit m-auto">
            <div class="text-2xl font-semibold mb-4" id="courses">Projects.</div>
            <Project v-for="project in projects" v-bind="project" />
        </div>
        <div class="min-w-[80%] font-semibold w-fit m-auto">
            <div class="text-2xl font-semibold mb-4" id="research">Projects.</div>
            <Project v-for="project in projects" v-bind="project" />
        </div>
    </div>
</template>

<style>
.portfolio-data::-webkit-scrollbar {
    display: none;
}
</style>