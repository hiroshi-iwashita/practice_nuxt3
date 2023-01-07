<template>
  <pre
    :data-prefix="prefix"
    :class="classObject"
  ><code>{{ text }}</code></pre>
</template>

<script lang="ts" setup>
  import { TElementsMockupCode } from "~~/types/components/elements/mockup/code/TElementsMockupCode";

  // prop
  interface Props {
    prefix?: TElementsMockupCode['prefix']
    text: TElementsMockupCode['text']
    color?: TElementsMockupCode['color']
    backgroundColor?: TElementsMockupCode['backgroundColor']
  };

  const props = withDefaults(
    defineProps<Props>(), {
      color: 'primary',
      backgroundColor: 'primary',
    }
  );

  // class object 
  const classObject = computed(() => {
    return {
      // color
      'text-primary': props.color === 'primary',
      'text-secondary': props.color === 'secondary',
      // backgroundColor
      'bg-primary': props.backgroundColor === 'primary',
      'bg-secondary': props.backgroundColor === 'secondary',
      // text warning content
      'text-primary-content': props.backgroundColor === 'primary',
      'text-secondary-content': props.backgroundColor === 'secondary',
    }
  });
</script>
