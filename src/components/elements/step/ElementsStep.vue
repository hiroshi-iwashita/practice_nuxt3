<template>
  <li
    class="step"
    :class="classObject"
  >
    {{ text }}
  </li>
</template>

<script lang="ts" setup>
  import { TElementsStep } from "~~/types/components/elements/step/TElementsStep";

  // prop
  interface Props {
    index: TElementsStep['index']
    text: TElementsStep['text']
    currentStep: TElementsStep['currentStep']
  };
  const props = withDefaults(
    defineProps<Props>(), {}
  );

  // classObject
  const classObject = computed(() => {
    return {
      'step-primary' :
        props.index === 0
        || props.index <= props.currentStep -1
    }
  })
</script>
