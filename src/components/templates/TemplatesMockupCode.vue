<template>
  <div class="mockup-code">
    <template
      v-for="(item, index) in items"
      :key="index"
    >
      <ElementsMockupCode
        :prefix="item.prefix"
        :text="item.text"
        :color="item.color"
        :backgroundColor="item.backgroundColor"
      />
    </template>
  </div>
</template>

<script lang="ts" setup>
  import { TElementsMockupCode } from "~~/types/components/elements/mockup/code/TElementsMockupCode";

  // prop
  interface Props {
    items: TElementsMockupCode[]
  };

  const props = withDefaults(
    defineProps<Props>(), {
      items: () => []
    }
  );
</script>
