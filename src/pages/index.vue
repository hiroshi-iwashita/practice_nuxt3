<template>
    <div>
        <NuxtLayout name="daisyui">
            <template #header>
                <LazyTheHeader v-if="show" />
            </template>
            <template #footer>
                Some footer template content.
            </template>
            <div class="toast">
                <div class="alert alert-info">
                    <div>
                        <span>New message arrived.</span>
                    </div>
                </div>
            </div>
            <div class="p-4">
                <div class="tw-max-w-sm tw-rounded tw-overflow-hidden tw-shadow-lg tw-mb-4">
                    <img
                        class="tw-w-full"
                        src="https://tailwindcss.com/img/card-top.jpg"
                        alt="Sunset in the mountains"
                    />
                    <div class="tw-px-6 tw-py-4 tw-pb-2">
                        <div class="tw-font-bold tw-text-xl tw-mb-2">
                            The Coldest Sunset
                        </div>
                        <p class="tw-text-indigo-700 tw-text-base">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
                            quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
                            nihil.
                        </p>
                    </div>
                    <div class="tw-px-6 tw-py-4">
                        <span class="tw-badge tw-mr-2">
                            #photography
                        </span>
                        <span class="tw-badge tw-mr-2">
                            #travel
                        </span>
                        <span class="tw-badge">
                            #winter
                        </span>
                    </div>
                </div>
                <NuxtLink to="/about">
                    About
                </NuxtLink>
            </div>
            <button
                v-if="!show"
                @click="show = true"
                class="tw-btn"
            >
                Show List
            </button>
            <div class="tw-w-48">
                <div
                class="tw-text-white tw-text-center tw-bg-clip-border tw-p-6 tw-bg-violet-600 tw-border-4 tw-border-violet-300 tw-border-dashed"
                >
                    Hello World
                </div>
            </div>
        </NuxtLayout>
    </div>
</template>

<script setup>
    definePageMeta({
        layout: false,
    });
    const show = ref(false)
</script>

<style lang="postcss" scoped>
    /* .badge {
        @apply
            inline-block
            bg-gray-200
            rounded-full
            px-3
            py-1
            text-sm
            font-semibold
            text-gray-700;
        &:hover {
            @apply bg-gray-300;
        }
    } */
</style>