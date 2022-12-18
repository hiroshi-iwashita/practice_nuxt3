<template>
  <div
    class="navbar bg-base-300"
  >
    <div
      class="flex-1"
    >
      <a
        class="btn btn-ghost normal-case text-xl"
      >
        {{ config.productName }}
      </a>
    </div>
  </div>
</template>

<script lang="ts" setup>
  // config
  const config = useRuntimeConfig();
</script>