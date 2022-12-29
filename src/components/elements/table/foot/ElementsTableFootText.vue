<template>
  {{ text }}
</template>

<script lang="ts" setup>
  import { TElementsTableFootText } from "~~/types/components/elements/table/foot/TElementsTableFootText";

  // prop
  interface Props {
    text: TElementsTableFootText["text"]
  }

  const props = withDefaults(
    defineProps<Props>(), {
      text: ''
    }
  );

</script>
