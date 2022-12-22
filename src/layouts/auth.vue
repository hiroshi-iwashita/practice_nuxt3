<template>
  <header>
    <slot name="header">
      <LayoutAuthLoginHeader />
    </slot>
  </header>
  <main class="py-4">
    <slot />
  </main>
  <footer> 
    <slot name="footer">
      <LayoutAuthLoginFooter />
    </slot>
  </footer>
</template>
