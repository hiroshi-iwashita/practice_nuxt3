<template>
  <div class="breadcrumbs mb-8 text-sm">
    <ul>
      <li>
        <NuxtLink
          to="/"
          class="link link-hover"
        >
          Home
        </NuxtLink>
      </li>
      <template v-if="items.length"> 
        <li
          v-for="(item, key) in items"
          :key="key"
        >
          <ElementsBreadcrumbs
            :item="item"
          />
        </li>
      </template>
    </ul>
  </div>
</template>

<script lang="ts" setup>
  import { TElementsBreadCrumbs } from "~~/types/components/elements/breadCrumbs/TElementsBreadCrumbs";

  // prop
  interface Props {
    items?: TElementsBreadCrumbs[]
    fontSize?: string
  };

  const props = withDefaults(
    defineProps<Props>(), {
      items: () => [],
      fontSize: 'md'
    }
  );
</script>
