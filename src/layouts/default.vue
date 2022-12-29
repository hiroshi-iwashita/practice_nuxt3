<template>
  <header>
    <slot name="header">
      <LayoutsDefaultHeader />
    </slot>
  </header>
  <main class="container" >
    <slot />
  </main>
  <footer>
    <slot name="footer">
      <LayoutsDefaultFooter
        class="absolute bottom-0 left-0"
      />
    </slot>
  </footer>
</template>
