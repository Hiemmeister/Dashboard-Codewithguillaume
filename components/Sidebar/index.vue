<script setup>
import { ref } from 'vue';
import AlertDialog from '@/components/ui/alert-dialog/AlertDialog';
import SidebarMenu from '@/components/Sidebar/Menu.vue'; // Zorg ervoor dat Menu component wordt geïmporteerd

// Declareer een ref om de sidebar open/gesloten te houden
const open = ref(false);

// Functie om de sidebar te openen
const openSidebar = () => {
  open.value = true;
};

// Functie om de sidebar te sluiten
const closeSidebar = () => {
  open.value = false;
};
</script>

<template>
  <div>
    <!-- Mobile Header + Sidebar -->
    <div class="z-50 flex items-center justify-between w-screen p-4 lg:hidden">
      <NuxtLink to="/" class="block">
        <Logo />
      </NuxtLink>
      <AlertDialog />

      <!-- Hamburger button om sidebar te openen -->
      <Icon
        class="cursor-pointer"
        size="30"
        name="iconamoon:menu-burger-horizontal-fill"
        @click="openSidebar"
      />

      <!-- Sidebar (mobile) -->
      <div
        v-if="open"
        class="fixed top-0 left-0 z-[999] w-screen h-screen bg-neutral-100 flex p-7 flex-col"
      >
        <p
          class="font-normal text-2xl underline underline-offset-4 decoration-wsb"
        >
          <span class="text-wso">We</span><span class="text-wsg">Socially</span>
        </p>

        <!-- Close Button -->
        <Icon
          class="absolute right-4 top-7 cursor-pointer"
          size="30"
          name="material-symbols:close-rounded"
          @click="closeSidebar"
        />

        <!-- SidebarMenu (mobile) -->
        <SidebarMenu :closeSidebar="closeSidebar" class="mt-12 flex-grow" />
      </div>
    </div>

    <!-- Desktop Sidebar -->
    <div
      class="hidden lg:flex lg:w-[250px] h-screen flex-col justify-between border-r"
    >
      <SidebarMenu :closeSidebar="closeSidebar" />
      <div>User item</div>
    </div>
  </div>
</template>
