<template>
  <div>
    <!-- TemplatesBreadcrumbs -->
    <templates-breadcrumbs
      :items="breadCrumbsRef"
    /> <!-- TemplatesBreadcrumbs -->

    <p class="text-xl font-semibold tracking-wide">
      {{ page.title }}
    </p>

    <p class="text-sm tracking-wide my-4">
      {{ page.description }}
    </p>

    <!-- TemplatesTabs -->
    <templates-tabs
      :items="tabsRef"
      :active-is="hashRef"
    /> <!-- TemplatesTabs -->
    
    <!-- PagesGoIndexInstallations -->
    <pages-go-index-installations
      :items="mockupCodesRef"
      :active-is="hashRef"
    /> <!-- PagesGoIndexInstallations -->

  </div>
</template>

<script lang="ts" setup>
  import configs from "~~/configs/go/index";
  // types
  // for components
  import { TElementsBreadCrumbs } from "~~/types/components/elements/breadCrumbs/TElementsBreadCrumbs";
  import { TElementsTab } from "~~/types/components/elements/tab/TElementsTab"; // for components
  // for pages
  import { TTagsTerm } from "~~/types/pages/go/index/TTagsTerm";
  import { TMockups } from "~~/types/pages/go/index/TMockups"; // for pages // types

  definePageMeta({
    layout: 'go'
  });

  // page contents
  // type
  type pageContents = {
    title: string;
    description: string;    
  };
  const page = (configs.page) as pageContents;

  // TemplatesBreadcrumbs
  const breadCrumbsRef = (configs.breadcrumbs) as TElementsBreadCrumbs[];
  // TemplatesBreadcrumbs
  
  // TemplatesTabs
  const hashRef = ref<TTagsTerm>();
  const tabsRef = (configs.tabs) as TElementsTab[];
  // TemplatesTabs

  // TemplatesMockupCode
  const mockupCodesRef = (configs.mockupCodes) as TMockups;
  // TemplatesMockupCode


  // life cycle
  const putHash = (routeHash: TTagsTerm): void => {
    if (routeHash == '') {
      let firstTabValue = `#${tabsRef[0].value}` as TTagsTerm
      hashRef.value = firstTabValue
    }
    else hashRef.value = routeHash
  }

  // onMounted
  onMounted(() => {
    putHash(useRoute().hash) // TTagsTermの型定義のうち、stringを使わないための見直し必要
  });

  // onBeforeRouteUpdate
  onBeforeRouteUpdate(async (to) => {
    hashRef.value = to.hash
  });

</script>
