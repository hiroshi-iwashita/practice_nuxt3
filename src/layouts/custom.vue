<template>
  <div>
    <header>
      <slot name="header">
        Custom header content
      </slot>
    </header>
    <main>
      <slot />
    </main>
    <footer>
      <slot name="footer">
        Custom footer content
      </slot>
    </footer>
  </div>
</template>