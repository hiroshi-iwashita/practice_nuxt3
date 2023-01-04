<template>
  <ul
    class="steps container steps-vertical sm:steps-horizontal"
  >
    <template
      v-for="(item, index) in items"
      :key="index"
    >
      <ElementsStep
        :index="index"
        :text="item.text"
        :current-step="currentStep"
      />
    </template>
  </ul>
</template>

<script lang="ts" setup>
  import { TTemplatesSteps } from "~~/types/components/templates/TTemplatesSteps";

  // prop
  interface Props {
    items: TTemplatesSteps['items']
    currentStep: TTemplatesSteps['currentStep']
  };
  const props = withDefaults(
    defineProps<Props>(), {
      items: () => []
    }
  );
</script>
