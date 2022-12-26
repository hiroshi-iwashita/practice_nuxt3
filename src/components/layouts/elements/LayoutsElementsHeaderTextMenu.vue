<template>
  <li class="hover-bordered">
    <NuxtLink
      :to=" menu.to"
      class="link link-hover"
    >
      {{ menu.title }}
    </NuxtLink>
  </li>
</template>

<script lang="ts" setup>
  import { TLayoutsElementsHeaderTextMenu } from "~~/types/components/templates/TLayoutsTemplatesHeaderTextMenus";

  // prop
  interface Props {
    menu: TLayoutsElementsHeaderTextMenu
  }

  const props = withDefaults(
    defineProps<Props>(), {
      menu: () => <TLayoutsElementsHeaderTextMenu>{}
    }
  );

</script>
