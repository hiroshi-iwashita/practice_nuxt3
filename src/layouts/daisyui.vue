<template>
  <header>
    <slot name="header">
      <LayoutDaisyuiIndexHeader />
    </slot>
  </header>
  <main class="container" >
    <slot />
  </main>
  <footer> 
    <slot name="footer">
      <LayoutDaisyuiIndexFooter
        class="container"
      />
    </slot>
  </footer>
</template>
