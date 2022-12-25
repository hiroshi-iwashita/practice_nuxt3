<template>
  <header>
    <slot name="header">
      <LayoutNuxtHeader />
    </slot>
  </header>
  <main class="container py-8" >
    <slot />
  </main>
  <footer>
    <slot name="footer">
      <LayoutDefaultFooter />
    </slot>
  </footer>
</template>
