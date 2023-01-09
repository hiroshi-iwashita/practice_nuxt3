<template class="relative">
  <header>
    <slot name="header">
      <LayoutsGoHeader
        class="fixed top-0 z-30"
      />
    </slot>
  </header>
  <main class="container pt-24 pb-12 min-h-screen">
    <slot />
  </main>
  <footer>
    <slot name="footer">
      <LayoutsDefaultFooter />
    </slot>
  </footer>
</template>
