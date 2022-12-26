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
  import { TBreadCrumbs } from "~~/types/components/templates/TBreadCrumbs";

  // prop
  interface Props {
    items?: TBreadCrumbs[]
    fontSize?: string
  }

  const props = withDefaults(
    defineProps<Props>(), {
      items: () => [],
      fontSize: 'md'
    }
  );

  // Dynamic components
  const NuxtLink = resolveComponent('NuxtLink')

  // classObject
  const classObject = computed(() => {
    return {
      'text-xs' : props.fontSize === 'xs',
      'text-sm' : props.fontSize === 'sm',
      'text-md' : props.fontSize === 'md',
      'text-lg' : props.fontSize === 'lg',
      'text-xl' : props.fontSize === 'xl'
    }
  })

</script>
