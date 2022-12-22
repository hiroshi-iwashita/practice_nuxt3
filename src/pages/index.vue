<template>
    <NuxtLayout name="daisyui">
        <template #header>
            <LayoutDaisyuiIndexHeader />
        </template>
        <template #footer>
            <LayoutDaisyuiIndexFooter />
        </template>

        <PageIndex
            :container="page.container"
            :padding-y="page.paddingY"
        />

    </NuxtLayout>
</template>

<script lang="ts" setup>
    definePageMeta({
        layout: false,
    });
    const page = reactive({
        container: <boolean>true,
        paddingY: <string>'4'
    })
</script>
