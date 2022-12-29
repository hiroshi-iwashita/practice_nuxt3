<template>
  {{ text }}
</template>

<script lang="ts" setup>
  import { TElementsTableHeadText } from "~~/types/components/elements/table/head/TElementsTableHeadText";

  // prop
  interface Props {
    text: TElementsTableHeadText["text"]
  }

  const props = withDefaults(
    defineProps<Props>(), {
      text: ''
    }
  );

</script>
