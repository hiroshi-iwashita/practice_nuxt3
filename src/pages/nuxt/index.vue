<template>
  <div>
    <PageBreadcrumbs
      :contents="breadcrumbsContents"
    />

    <div v-if="pending">Loading......</div>
    <div v-else>
      {{ data }}
    </div>

  </div>
</template>


<script lang="ts" setup>
  import breadCrumbsContents from "~~/configs/components/breadCrumbs";

  definePageMeta({
    layout: 'nuxt',
  });

  // Breadcrumbs
  const breadcrumbsContents = reactive(breadCrumbsContents.nuxt);

  const {
    data,
    refresh,
    error,
    pending
  } = await useLazyFetch(()=>`/api/jsonplaceholder/users`)


  // console.log(useNuxtApp().payload.data);

</script>
