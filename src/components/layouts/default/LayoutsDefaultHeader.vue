<template>
  <div
    class="navbar bg-base-100"
  >
    <!-- left section of navbar -->
    <div
        class="flex-1"
      >
        <a href="/"
          class="btn btn-ghost normal-case"
        >
          <LayoutsTemplatesProductTitle />
        </a>
      </div>

      <!-- right section of navbar -->
      <div
        class="flex-none gap-2 px-4"
      >
        <!-- menu - pulldown -->
        <LayoutsTemplatesHeaderTextMenus />

        <!-- menu - icons -->
        <LayoutsElementsHeaderIcons /> 
    </div>
  </div>
</template>

<script lang="ts" setup>

</script>

<style lang="postcss" scoped>
  .route-link-exact-active {
    color: #12b488
  }
</style>