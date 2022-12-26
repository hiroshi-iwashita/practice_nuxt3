<template>
  <li tabindex="0">
    <a>
      {{ menu.title }}
      <svg
        class="fill-current"
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
      >
        <path
          d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"
        />
      </svg>
    </a>
    <ul class="p-2 bg-base-100">
      <template
        v-for="(pullDown, index) in menu.pullDowns"
        :key="index"
      >
        <li
          v-if="pullDown.title !== ''"
          class="menu-title"
        >
          <span>{{ pullDown.title }}</span>
        </li>
        <li
          v-for="(subMenu, index) in pullDown.subMenus"
          :key="index"
          class="hover-bordered"
        >
          <NuxtLink :to="subMenu.to" class="link link-hover">
            {{ subMenu.title }}
          </NuxtLink>
        </li>
      </template>
    </ul>
  </li>
</template>

<script lang="ts" setup>
  // import { TLayoutsElementsHeaderPullDownMenu } from "~~/types/components/templates/TLayoutsTemplatesHeaderTextMenus";

  // prop
  interface Props {
    menu: object
  }

  const props = withDefaults(
    defineProps<Props>(), {
      menu: () => {}
    }
  );

</script>
