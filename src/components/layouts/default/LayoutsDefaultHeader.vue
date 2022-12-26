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
      <ul class="menu menu-horizontal gap-2">
        <li tabindex="0">
          <a>
            Nuxt
            <svg
              class="fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
            >
              <path
                d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"
              />
            </svg>
          </a>
          <ul class="p-2 bg-base-100">
            <li><NuxtLink to="/nuxt" class="link link-hover">Index</NuxtLink></li>
            <li><NuxtLink to="/nuxt/dataFetching" class="link link-hover">Data Fetchin</NuxtLink></li>
          </ul>
        </li>
        <li><NuxtLink to="/go" class="link link-hover">Go</NuxtLink></li>
        <li><NuxtLink to="/docs" class="link link-hover">Docs</NuxtLink></li>
        <li tabindex="0">
          <a>
            Fetch
            <svg
              class="fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
            >
              <path
                d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"
              />
            </svg>
          </a>
          <ul class="p-2 bg-base-100">
            <li><NuxtLink to="/fetch" class="link link-hover">fetch</NuxtLink></li>
            <li><NuxtLink to="/fetch/useFetch" class="link link-hover">useFetch</NuxtLink></li>
            <li><NuxtLink to="/fetch/useAsyncData" class="link link-hover">useAsyncData</NuxtLink></li>
          </ul>
        </li>
      </ul>

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