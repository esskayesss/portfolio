<script lang="ts" setup>
const scrollToContent = () => {
    const content = document.getElementById('content');
    if (content) {
        content.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}
</script>

<template>
    <div class="flex flex-col h-full space-around gap-20 tab:justify-between text-center md:px-10 tab:px-14 ">
        <HeroText class="tab:text-left" />
        <SocialLinks class="h-fit w-fit tab:w-full overflow-hidden mx-auto" />
        <div class="block tab:hidden">
            <Icon name="ic:sharp-keyboard-double-arrow-down"
                class="block tab:hidden h-fit w-fit mx-auto text-7xl md:text-5xl" @click="scrollToContent" />
        </div>
    </div>
</template>