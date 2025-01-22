<script setup>
import { useHead } from '@vueuse/head';

// Set a global default title
useHead({
  title: 'WeSocially',
});
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
