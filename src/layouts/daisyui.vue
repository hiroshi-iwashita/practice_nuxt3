<template>
  <header>
    <slot name="header"></slot>
  </header>
  <main class="py-4">
    <slot />
  </main>
  <footer> 
    <slot name="footer"></slot>
  </footer>
</template>
