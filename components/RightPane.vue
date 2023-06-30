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
        <div class="about w-full">
            <h2 class="text-xs fold:text-base uppercase font-semibold text-zinc-50 py-2">
                about
            </h2>
            <p class="text-xs fold:text-sm text-zinc-300">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae, accusantium cum esse minima dolores
                tempora iste maiores laboriosam ad blanditiis doloribus similique architecto et! Dicta voluptates esse
                saepe numquam earum tenetur expedita ipsam, beatae optio aspernatur temporibus ullam illo quis autem
                laboriosam repellat voluptatum. Aliquid vel repudiandae quaerat pariatur cupiditate corrupti minima
                itaque. Sit eum eaque incidunt laboriosam alias in voluptas et, velit voluptate corporis, assumenda quas
                impedit error veritatis distinctio eos magni voluptatibus. Cumque perspiciatis, fugit, perferendis eos
                quisquam dolore nulla deleniti facilis quibusdam officia omnis velit! Reiciendis iste, dolore quibusdam,
                nihil at corporis eaque est, quam officia animi commodi quaerat minus! Esse, corrupti ex sapiente
                distinctio dolor nesciunt culpa quisquam officiis rerum, iure rem debitis perspiciatis eos voluptatibus
                ipsa fuga voluptatem nisi nobis, id mollitia quis magnam cupiditate ullam iste! Ratione delectus
                consectetur repellendus, laborum nostrum officia beatae voluptatem odio cupiditate? Enim, ipsam
                blanditiis veritatis delectus adipisci illum?
            </p>
        </div>
        <ShowcaseCard v-for="element in showcase" :key="element.id" :data="element.data" :title="element.title"
            :idval="element.id" />
    </div>
</template>