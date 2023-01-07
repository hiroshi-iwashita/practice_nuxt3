<template>
  <div>
    <!-- TemplatesBreadcrumbs -->
    <templates-breadcrumbs
      :items="breadCrumbsRef"
    /> <!-- TemplatesBreadcrumbs -->

    <p class="text-xl font-semibold tracking-wide">
      Go installation
    </p>

    <p class="text-sm tracking-wide my-4">
      Select the tab for your computer's operating system below, then follow its installation instructions.
    </p>


    <!-- TemplatesTabs -->
    <templates-tabs
      :items="tabsRef"
      :active-is="hashRef"
    /> <!-- TemplatesTabs -->

    <TemplatesMockupCode
      v-if="hashRef === '#mac'"
      :items="mockupCodesRef"
    />

  </div>
</template>

<script lang="ts" setup>
  import configs from "~~/configs/go/index";
  import { TElementsBreadCrumbs } from "~~/types/components/elements/breadCrumbs/TElementsBreadCrumbs";
  import { TElementsTab } from "~~/types/components/elements/tab/TElementsTab";
  import { TElementsMockupCode } from "~~/types/components/elements/mockup/code/TElementsMockupCode";


  definePageMeta({
    layout: 'go'
  });

  // TemplatesBreadcrumbs
  const breadCrumbsRef = ref<TElementsBreadCrumbs[]>(configs.breadcrumbs);
  // TemplatesBreadcrumbs
  
  // TemplatesTabs
  const hashRef = ref<string>();
  const tabsRef = ref<TElementsTab[]>(configs.tabs);
  // TemplatesTabs

  // TemplatesMockupCode
  const mockupCodesRef = ref<TElementsMockupCode[]>(configs.mockupCodes);
  // TemplatesMockupCode


  // life cycle
  const putHash = (hash: string) => {
    if (hash == '') {
      let firstTabValue: string = `#${tabsRef.value[0].value}`
      hashRef.value = firstTabValue
    }
    else hashRef.value = hash
  }

  // onMounted
  onMounted(() => {
    putHash(useRoute().hash)
  });

  // onBeforeRouteUpdate
  onBeforeRouteUpdate(async (to) => {
    hashRef.value = to.hash
  });

</script>
