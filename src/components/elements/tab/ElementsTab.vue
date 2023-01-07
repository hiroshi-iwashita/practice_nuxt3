<template>
  <nuxt-link
    class="tab"
    :href="`#${value}`"
    :id="value"
    :class="classObject"
  >
    {{ text }}
  </nuxt-link> 
</template>

<script lang="ts" setup>
  import { TElementsTab } from "~~/types/components/elements/tab/TElementsTab";

  // prop
  interface Props {
    type?: TElementsTab['type']
    size?: TElementsTab['size']
    value: TElementsTab['value']
    text: TElementsTab['text']
    activeIs: TElementsTab['activeIs']
  };

  const props = withDefaults(
    defineProps<Props>(), {
      type: 'lifted',
      size: 'lg',
    }
  );

  // class object 
  const classObject = computed(() => {
    return {
      'tab-active': `#${props.value}` == props.activeIs,
      'font-semibold': `#${props.value}` == props.activeIs,
      'text-secondary': `#${props.value}` == props.activeIs,
      // type
      '': props.type === '',
      'tab-lifted': props.type === 'lifted',
      'tab-bordered': props.type === 'bordered',
      // size
      'tab-xs': props.size === 'xs',
      'tab-sm': props.size === 'sm',
      'tab-lg': props.size === 'lg',
    }
  });
</script>
