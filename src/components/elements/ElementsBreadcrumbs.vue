<template>
  <component
    :is="item.link
      ? NuxtLink
      : 'span'"
    :to="item.link
      ? item.path
      : ''"
    :class="item.link
      ? 'link link-hover'
      : ''"
  >
    {{ item.text.en }}
  </component>
</template>

<script lang="ts" setup>
  import { TElementsBreadCrumbs } from "~~/types/components/elements/breadCrumbs/TElementsBreadCrumbs";

  // prop
  interface Props {
    item: TElementsBreadCrumbs
  };

  const props = withDefaults(
    defineProps<Props>(), {
      item: () => <TElementsBreadCrumbs>{},
    }
  );

  // Dynamic components
  const NuxtLink = resolveComponent('NuxtLink')
</script>
