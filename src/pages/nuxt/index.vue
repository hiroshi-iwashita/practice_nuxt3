<template>
  <div>
    <TemplatesBreadcrumbs
      :items="breadCrumbsContents"
    />

    <div v-if="pending">Loading......</div>
    <div v-else>
      {{ data }}
    </div>

  </div>
</template>


<script lang="ts" setup>
  import breadCrumbsItems from "~~/configs/components/templates/breadCrumbs/nuxt";

  definePageMeta({
    layout: 'nuxt',
  });

  // Breadcrumbs
  const breadCrumbsContents = reactive(breadCrumbsItems);

  const {
    data,
    refresh,
    error,
    pending
  } = await useLazyFetch(()=>`/api/jsonplaceholder/users`)


  // console.log(useNuxtApp().payload.data);

</script>
