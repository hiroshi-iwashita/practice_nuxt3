<template>
  <div class="breadcrumbs mb-8 text-sm">
    <ul>
      <li>
        <component
          :is="isHome
            ? 'span'
            : NuxtLink"
          :to="isHome
            ? ''
            : '/'"
          :class="isHome
            ? ''
            : 'link link-hover'"
        >
          Home
        </component>
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
    isHome?: boolean
  };

  const props = withDefaults(
    defineProps<Props>(), {
      items: () => [],
      fontSize: 'md',
      isHome: false
    }
  );

  // Dynamic components
  const NuxtLink = resolveComponent('NuxtLink')
</script>
