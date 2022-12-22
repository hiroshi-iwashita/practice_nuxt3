<template>
  <div
    class="breadcrumbs mb-8 text-xs md:text-sm lg:text-sm xl:text-lg"
  >
    <ul>
      <li><NuxtLink to="/" class="link link-hover">Home</NuxtLink></li>
      <li><NuxtLink to="/products" class="link link-hover">Products</NuxtLink></li>
      <li>111</li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
  // prop
  interface Props {
    contents: string[]
    fontSize?: string
  }

  const props = withDefaults(
    defineProps<Props>(), {
      contents: () => [],
      fontSize: 'sm'
    }
  );

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
