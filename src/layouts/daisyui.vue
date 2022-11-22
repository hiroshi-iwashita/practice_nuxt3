<template>
  <div>
    <header>
      <slot name="header">
        Default header content
      </slot>
    </header>
    <footer>
      <slot name="footer">
          Default footer content
      </slot>
    </footer>
    <main>
      <div class="tw-drawer tw-drawer-mobile">
        <input id="my-drawer-2" type="checkbox" class="tw-drawer-toggle" />
        <div class="tw-drawer-content tw-flex tw-flex-col tw-justify-center">
          <!-- Page content here -->
          <div class="tw-text-sm tw-breadcrumbs">
            <ul>
              <li><a>Home</a></li> 
              <li><a>Documents</a></li> 
              <li>Add Document</li>
            </ul>
          </div>
          <label for="my-drawer-2" class="tw-btn tw-btn-primary tw-drawer-button tw-lg:hidden">
            Open drawer
          </label>
          <slot />
        </div> 
        <div class="tw-drawer-side">
          <label for="my-drawer-2" class="tw-drawer-overlay"></label> 
          <ul class="tw-menu tw-p-4 tw-w-80 tw-bg-base-100 tw-text-base-content">
            <!-- Sidebar content here -->
            <li><a>Sidebar Item 1</a></li>
            <li><a>Sidebar Item 2</a></li>
          </ul>
        </div>
      </div>
    
    </main>
  </div>
</template>