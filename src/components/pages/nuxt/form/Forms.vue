<template>
  <ElementsCard>
    <p class="text-xl">
      Step{{ step }} {{ steps[step-1].text }}
    </p>
    <ElementsDivider></ElementsDivider>
    <slot></slot>
  </ElementsCard>
</template>

<script lang="ts" setup>
  import { TTemplatesSteps } from "~~/types/components/templates/TTemplatesSteps";

  // prop
  interface Props {
    step: number
    steps: TTemplatesSteps['items']
  }
  const props = withDefaults(
    defineProps<Props>(), {}
  ); 
</script>
