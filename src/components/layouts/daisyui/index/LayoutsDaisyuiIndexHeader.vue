<template>
  <div
    class="navbar bg-base-100"
  >
    <div
      class="flex-1 bg-base-100"
    >
      <a href="/"
        class="btn btn-ghost normal-case text-xl"
      >
        {{ productName }}
      </a>
    </div>
    <div
      class="flex-none"
    >
      <ul class="menu menu-horizontal gap-4">
        <li><NuxtLink to="/" class="link link-hover">Home</NuxtLink></li>
        <li><NuxtLink to="/auth/login" class="link link-hover">Login</NuxtLink></li>
        <!-- <li><NuxtLink to="/products" class="link link-hover">Products</NuxtLink></li>
        <li><NuxtLink to="/products/aaa" class="link link-hover">Products</NuxtLink></li> -->
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
      <button
        class="btn btn-ghost btn-circle"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </button>
      <button
        class="btn btn-ghost btn-circle"
      >
        <div
          class="indicator"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
            />
          </svg>
          <span
            class="animate-ping relative inline-flex rounded-full h-2 w-2 bg-primary opacity-75"
          ></span>
        </div>
      </button>
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