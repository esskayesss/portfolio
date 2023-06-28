<script lang="ts" setup>
const socialLinks = ref<{
    name: string;
    url: string;
    icon: string;
}[]>([
    {
        name: 'Github',
        url: 'https://github.com/esskayesss',
        icon: 'uil:github',
    },
    {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/esskayesss/',
        icon: 'radix-icons:linkedin-logo',
    },
    {
        name: 'Youtube',
        url: 'https://www.youtube.com/@esskayesss',
        icon: 'uil:youtube',
    },
    {
        name: 'blog',
        url: 'https://blog.esskayesss.dev/',
        icon: 'radix-icons:globe',
    },
    {
        name: 'Twitter',
        url: 'https://twitter.com/esskayesss_',
        icon: 'radix-icons:twitter-logo',
    },
    {
        name: 'Email',
        url: 'mailto:imesskayesss@gmail.com',
        icon: 'radix-icons:envelope-closed',
    }
])
</script>

<template>
    <div class="social-links">
        <ul class="flex flex-row gap-4">
            <li v-for="slinks in  socialLinks " :key="slinks.name">
                <a :href="slinks.url" target="_blank" rel="noopener noreferrer">
                    <Icon :name="slinks.icon" class="text-3xl" />
                </a>
            </li>
        </ul>
    </div>
</template>