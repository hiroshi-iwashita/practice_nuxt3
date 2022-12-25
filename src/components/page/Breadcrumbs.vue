<template>
  <div
    class="breadcrumbs mb-8 text-sm"
  >
    <ul>
      <li><NuxtLink to="/" class="link link-hover">Home</NuxtLink></li>
      <template v-if="contents.length"> 
        <li
          v-for="(item, key) in contents"
          :key="key"
        >
          <component
            :is="item.link
              ? NuxtLink
              : 'span'"
            :to="item.link
              ? item.path
              : ''"
            :class="item.link
              ? 'link link-hover'
              : ''"
          >
            {{ item.text.en }}
          </component>
        </li>
      </template>
    </ul>
  </div>
</template>

<script lang="ts" setup>
  // prop
  interface Props {
    contents?: object[]
    fontSize?: string
  }

  const props = withDefaults(
    defineProps<Props>(), {
      contents: () => [],
      fontSize: 'md'
    }
  );

  // Dynamic components
  const NuxtLink = resolveComponent('NuxtLink')

  // classObject
  const classObject = computed(() => {
    return {
      'text-xs' : props.fontSize === 'xs',
      'text-sm' : props.fontSize === 'sm',
      'text-md' : props.fontSize === 'md',
      'text-lg' : props.fontSize === 'lg',
      'text-xl' : props.fontSize === 'xl'
    }
  })


</script>
