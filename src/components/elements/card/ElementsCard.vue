<template>
  <div
    class="card container p-8"
    :class="classObject"
  >
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
  import { TElementsStep } from "~~/types/components/elements/step/TElementsStep";

  // prop
  interface Props {
    backgroundColor?: string
  };
  const props = withDefaults(
    defineProps<Props>(), {
      backgroundColor: 'base-300'
    }
  );

  // classObject
  const classObject = computed(() => {
    return {
      // color
      'bg-base' : props.backgroundColor === 'base',
      'bg-base-100' : props.backgroundColor === 'base-100',
      'bg-base-300' : props.backgroundColor === 'base-300',
    }
  })
</script>
