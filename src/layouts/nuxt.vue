<template>
  <header>
    <slot name="header">
      <LayoutsNuxtHeader />
    </slot>
  </header>
  <main class="container py-8" >
    <slot />
  </main>
  <footer>
    <slot name="footer">
      <LayoutsDefaultFooter />
    </slot>
  </footer>
</template>
