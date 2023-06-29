<script lang="ts" setup>
const navLinks = ref<{
    label: string,
    link?: string,
    id: string,
}[]>([
    {
        label: "experience.",
        id: '#work'
    },
    {
        label: "projects.",
        id: '#projects'
    },
    {
        label: "research.",
        id: '#research'
    },
    {
        label: "certifications.",
        id: '#certs'
    }
])

const scrollToView = (event: Event) => {
    const target = event.target as HTMLAnchorElement;
    const targetElement = document.querySelector(target.hash);
    console.log(targetElement);
}

const scrollIDToView = (id: string) => {
    const targetElement = document.querySelector(id);
    console.log(targetElement);
    targetElement?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}
</script>

<template>
    <div class="w-full flex justify-between items-center py-16 max-h-[10vh]">
        <img src="~/assets/images/avatar-round.png" class="w-[75px] h-[75px] rounded-full border-2 header-img" />
        <nav>
            <ul class="flex space-x-10 text-xl font-semibold">
                <li>
                    <a href="https://blog.esskayesss.dev" class="py-4 navlink duration-700" target="_blank">blog.</a>
                </li>
                <li v-for="link in navLinks" :key="link.label">
                    <a class="hover:cursor-pointer py-4 duration-700 navlink" @click="scrollIDToView(link.id)">
                        {{ link.label }}
                    </a>
                </li>
                <li>
                    <a href="/resume.pdf" class="py-4 getcv hover:text-accent" target="_blank">resumé.</a>
                </li>
            </ul>
        </nav>
    </div>
</template>

<style>
.navlink:hover {
    text-shadow: 0px 0px 22px #19B315;
}

.header-img {
    border-color: #19B315;
    box-shadow: 0px 0px 50px 0px #19B315;
}

.header-img:hover {
    animation: blink-rotate 5000ms linear infinite;
}

@keyframes blink-rotate {
    0% {
        @apply border-accentlight;
        transform: rotate(0deg);
        box-shadow: 0px 0px 50px 0px #19B315;
    }

    50% {
        @apply border-accentdark;
        transform: rotate(180deg);
        box-shadow: 0px 0px 50px 0px #00982B;

    }

    100% {
        @apply border-accentlight;
        transform: rotate(360deg);
        box-shadow: 0px 0px 50px 0px #19B315;

    }
}

.getcv {
    text-shadow: 0px 0px 22px whitesmoke;
    transition: 500ms;
}

.getcv:hover {
    text-shadow: 0px 0px 10px #00982B;
}
</style>