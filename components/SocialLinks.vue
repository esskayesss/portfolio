<script lang="ts" setup>
const socialLinks = ref<{
    name: string;
    url: string;
    icon: string;
}[]>([
    {
        name: 'Github',
        url: 'https://github.com/esskayesss',
        icon: 'ph:github-logo-duotone',
    },
    {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/esskayesss/',
        icon: 'ph:linkedin-logo-duotone',
    },
    {
        name: 'Youtube',
        url: 'https://www.youtube.com/@esskayesss',
        icon: 'ph:youtube-logo-duotone',
    },
    {
        name: 'blog',
        url: 'https://blog.esskayesss.dev/',
        icon: 'ph:globe-hemisphere-east-duotone',
    },
    {
        name: 'Twitter',
        url: 'https://twitter.com/esskayesss_',
        icon: 'ph:twitter-logo-duotone',
    },
    {
        name: 'Email',
        url: 'mailto:imesskayesss@gmail.com',
        icon: 'ic:twotone-email',
    }
])
</script>

<template>
    <div class="max-w-fit">
        <ul class="flex flex-row gap-4">
            <li v-for="slinks in  socialLinks " :key="slinks.name">
                <a :href="slinks.url" target="_blank" rel="noopener noreferrer">
                    <Icon :name="slinks.icon" class="text-xl fold:text-2xl" />
                </a>
            </li>
        </ul>
    </div>
</template>