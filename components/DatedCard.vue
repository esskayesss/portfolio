<script lang="ts" setup>
const { data } = defineProps<{
    data: any
}>();
</script>

<template>
    <NuxtLink :to="data.link"
        class="tab:hover:bg-zinc-400/10 p-4 rounded-md font-medium duration-200 flex flex-col gap-2 link h-full relative">
        <div class="h-full align-top w-fit" v-if="data.when">
            <div class="capitalize text-zinc-400 text-md font-semibold align-top min-w-fit">
                {{ data.when }}
            </div>
        </div>
        <div class="flex flex-col gap-2">
            <div class="work flex flex-col font-semibold text-xl h-fit">
                <div class="flex flex-row">
                    <div>{{ data.name }}</div>
                    <Icon name="material-symbols:arrow-outward" class="text-2xl goicon duration-300" />
                </div>
                <div v-if="data.from" class="flex text-zinc-400 text-lg">
                    <div>{{ data.from }}</div>
                </div>
            </div>
            <div class="description font-medium">
                {{ data.description }}
            </div>
            <div class="flex flex-row flex-wrap w-full gap-4">
                <div class="tag text-zinc-50 text-sm font-semibold bg-accentlight/10 backdrop-blur-xl rounded-md px-2 py-1 m-1"
                    v-for="tag in data.tags">
                    {{ tag }}
                </div>
            </div>
        </div>

    </NuxtLink>
</template>

<style>
.goicon {
    position: absolute;
    right: 20px;
    top: 20px;
}

.link:hover .goicon {
    @apply text-xl;
    transform: translateX(5px);
}

@media screen and (max-width: 1150px) {
    .link {
        @apply bg-zinc-400/10 backdrop-blur-3xl
    }


}
</style>