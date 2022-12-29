<template>
  <ul class="menu menu-horizontal p-1 rounded-box">
    <template
      v-for="(menu, index) in menus"
      :key="index"
    >
      <!-- submenuがない場合 -->
      <LayoutsElementsHeaderTextMenu
        v-if="!menu.pullDowns.length"
        :menu="menu"
      />

      <!-- submenuがある場合 -->
      <LayoutsElementsHeaderPullDownMenu
        v-else
        :menu="menu"
      />
    </template>
  </ul>
</template>

<script lang="ts" setup>
  import items from "~~/configs/components/templates/layoutsTemplatesHeaderTextMenus/nuxtDataFetching";
  import { TLayoutsElementsHeaderPullDownMenu } from "~~/types/components/templates/TLayoutsTemplatesHeaderTextMenus";

  // prop
  interface Props {
    menus: TLayoutsElementsHeaderPullDownMenu[]
  }

  const props = withDefaults(
    defineProps<Props>(), {
      menus: () => items
    }
  );
</script>
