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
  import { TBreadCrumbs } from "~~/types/components/templates/TBreadCrumbs";

  // prop
  interface Props {
    item: TBreadCrumbs
  }

  const props = withDefaults(
    defineProps<Props>(), {
      item: () => <TBreadCrumbs>{},
    }
  );

  // Dynamic components
  const NuxtLink = resolveComponent('NuxtLink')

</script>
