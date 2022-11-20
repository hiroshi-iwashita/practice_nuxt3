<template>
  <div>
    <NuxtLayout name="custom">
        <template #header>
            <LazyTheHeader v-if="show" />
        </template>
        <template #footer>
            Some footer template content.
        </template>
        <h1>
            dsfadsf
        </h1>
        <button
            v-if="!show"
            @click="show = true"
        >
            Show List
        </button>
    </NuxtLayout>
  </div>
</template>

<script setup>
    definePageMeta({
        layout: false,
    });
    const show  = ref(false)
</script>