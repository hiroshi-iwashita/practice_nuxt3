<template>
  <div class="tabs">
    <template
      v-for="(item, index) in items"
      :key="item.value"
    >
      <elements-tab
        :value="item.value"
        :text="item.text"
        :active-is="activeIs"
      />
    </template>
  </div>
</template>

<script lang="ts" setup>
  import { TElementsTab } from "~~/types/components/elements/tab/TElementsTab";

  // prop
  interface Props {
    items: TElementsTab[]
    activeIs: TElementsTab['activeIs']
  };

  const props = withDefaults(
    defineProps<Props>(), {
      items: () => []
    }
  );
</script>
