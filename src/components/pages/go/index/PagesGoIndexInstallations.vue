<template>
  <templates-mockup-code
    :items="SelectedMockupCodes"
  />
</template>

<script lang="ts" setup>
  import { TElementsMockupCode } from "~~/types/components/elements/mockup/code/TElementsMockupCode";
  import { TElementsTab } from "~~/types/components/elements/tab/TElementsTab";
  import { TMockups } from "~~/types/pages/go/index/TMockups";

  // prop
  interface Props {
    items: TMockups
    activeIs: TElementsTab['activeIs']
  };

  const props = withDefaults(
    defineProps<Props>(), {}
  );

  const SelectedMockupCodes = computed((): TElementsMockupCode[] => {
    let selectedTab = `${props.activeIs}` as string
    let selectedTabWithoutPrefix = selectedTab.replace('#', '') as string
    return props.items[selectedTabWithoutPrefix]
  });
</script>
