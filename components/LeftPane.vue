<script lang="ts" setup>
const scrollToContent = () => {
    const content = document.getElementById('content');
    if (content) {
        content.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}
</script>

<template>
    <div class="flex flex-col h-full space-around gap-10 tab:gap-10 tab:justify-between tab:px-14">
        <HeroText class="tab:text-left" />
        <SocialLinks class="h-fit w-fit tab:w-full overflow-hidden" />
    </div>
</template>