<script lang="ts" setup>
const navLinks = ref<{
    label: string,
    link: string,
    extraClasses: string
}[]>([
    {
        label: "blog.",
        link: "https://blog.esskayesss.dev/",
        extraClasses: ""
    },
    {
        label: "experience.",
        link: "/experience",
        extraClasses: ""
    },
    {
        label: "research.",
        link: "/research",
        extraClasses: ""
    },
    {
        label: "projects.",
        link: "/projects",
        extraClasses: ""
    },
])
</script>

<template>
    <div class="w-full flex justify-between items-center py-16 max-h-[10vh]">
        <img src="~/assets/images/avatar-round.png" class="w-[75px] h-[75px] rounded-full border-2 header-img" />
        <nav>
            <ul class="flex space-x-10 text-xl font-semibold">
                <li v-for="link in navLinks" :key="link.label">
                    <NuxtLink :to="link.link" :class="link.extraClasses" class="py-4 duration-700 navlink">
                        {{ link.label }}
                    </NuxtLink>
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