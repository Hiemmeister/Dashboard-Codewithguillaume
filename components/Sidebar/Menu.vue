<script setup>
// Definieer de navigatie-items voor het menu
const items = ref([
  {
    title: 'Overview',
    path: '/',
    icon: 'duo-icons:dashboard',
  },
  {
    title: 'Create event',
    path: '/event-creatie',
    icon: 'carbon:event',
  },
  {
    title: 'Beheer',
    path: '/event-beheer',
    icon: 'icon-park-outline:adjustment',
  },
  {
    title: 'Boekingen',
    path: '/boekingen',
    icon: 'fluent:calendar-agenda-20-regular',
  },
  {
    title: 'Scan tickets',
    path: 'scan',
    icon: 'streamline:tickets',
  },
  {
    title: 'Resultaten',
    path: '/resultaten',
    icon: 'foundation:graph-bar',
  },
  {
    title: 'Transacties',
    path: '/transacties',
    icon: 'uiw:pay',
  },
  {
    title: 'Instellingen',
    path: '/instellingen',
    icon: 'mingcute:settings-3-line',
  },
]);

// Ontvang de closeSidebar functie als prop
const props = defineProps({
  closeSidebar: Function,
});

// Functie om de route te wijzigen en de sidebar te sluiten
const handleMenuClick = (path) => {
  props.closeSidebar(); // Sluit de sidebar
  this.$router.push(path); // Navigeer naar de geselecteerde route
};
</script>

<template>
  <div>
    <!-- Header -->
    <header class="flex items-center gap-4 p-4">
      <Logo
        class="block lg:hidden transition-transform duration-300 scale-[2.00] absolute lg:static lg:ml-0 lg:mb-0 right-0 bottom-0 m-20"
      />
      <Logo
        class="hidden lg:block transition-transform duration-300 absolute lg:static"
      />
      <p
        class="hidden lg:block font-normal text-2xl underline underline-offset-4 decoration-wsb"
      >
        <span class="text-wso">We</span><span class="text-wsg">Socially</span>
      </p>
    </header>

    <!-- Content -->
    <div class="px-4 py-2 grow text-xl text-black lg:px-4 lg:py-2 lg:text-base">
      <div class="grid gap-4 lg:gap-2">
        <NuxtLink
          :to="item.path"
          v-for="(item, index) in items"
          :key="index"
          class="flex items-center gap-2 px-6 py-3 w-11/12 transition rounded cursor-pointer hover:bg-neutral-100 hover:scale-[95%] lg:px-2 lg:py-1"
          @click="handleMenuClick(item.path)"
        >
          <Icon :name="item.icon" size="22" color="black" />
          <span>{{ item.title }}</span>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
