<template>
  <div class="mockup-code bg-base">
    <pre data-prefix="$"><code>npm i daisyui</code></pre>
    <pre data-prefix=">" class="text-warning"><code>installing...</code></pre> 
    <pre data-prefix=">" class="text-success"><code>Done!</code></pre>
  </div>
</template>

<script lang="ts" setup>
  import { TTemplatesSteps } from "~~/types/components/templates/TTemplatesSteps";

  // prop
  interface Props {
    step?: number
  }
  const props = withDefaults(
    defineProps<Props>(), {}
  ); 
</script>
