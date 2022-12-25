<template>
  <div
    class="navbar bg-base-100"
  >
    <div
      class="flex-1"
    >
      <a href="/"
        class="btn btn-ghost normal-case"
      >
        <LayoutCommonProductTitle />
      </a>
    </div>
    <div
      class="flex-none gap-2 px-4"
    >
      <LayoutCommonHeaderMenu />

      <LayoutCommonHeaderIcons />

    </div>
  </div>
</template>

<script lang="ts" setup>
  // config
  const { productName } = useRuntimeConfig()

</script>

<style lang="postcss" scoped>
  .route-link-exact-active {
    color: #12b488
  }
</style>