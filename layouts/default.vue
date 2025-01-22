<template>
  <div
    class="grid h-screen bg-white font-sans tracking-wide lg:h-screen lg:flex overflow-x-hidden"
  >
    <Sidebar />
    <div class="p-4 w-full lg:w-3/4">
      <slot />
    </div>
  </div>
</template>
