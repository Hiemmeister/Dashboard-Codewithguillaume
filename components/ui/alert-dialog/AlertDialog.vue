<template>
  <div
    class="absolute right-20 top-5.5 px-2 py-0.5 border-2 border-neutral-200 border-dashed rounded-lg flex justify-end"
  >
    <button @click="isOpen = true">Create event</button>

    <div
      v-if="isOpen"
      class="fixed inset-0 z-50 flex justify-center items-center"
    >
      <div
        class="bg-white p-6 shadow-lg sm:rounded-lg max-w-lg w-screen text-center"
      >
        <h2 class="text-lg font-semibold">Bereik nieuwe klandizie!</h2>
        <p class="text-sm text-muted-foreground mt-2 px-8 lg:px-12">
          Creëer nu gemakkelijk je nieuwe event(s).
        </p>
        <div class="mt-4 flex justify-center gap-2">
          <button
            class="bg-neutral-200 px-2 py-2 rounded"
            @click="isOpen = false"
          >
            Terug
          </button>
          <button
            class="bg-green-300 text-black px-4 py-2 rounded"
            @click="handleConfirm"
          >
            Go!
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useRouter } from 'vue-router'; // Import useRouter from vue-router

export default {
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    handleConfirm() {
      // Use router to navigate to the '/event-creatie' page
      this.$router.push('/event-creatie');
      this.isOpen = false;
    },
  },
};
</script>

<!-- HandleConfirm hieronder -->
<!-- <button
  class="bg-green-300 text-black px-4 py-2 rounded"
  @click="handleConfirm"
>
  Go!
  </button> -->
<!-- 
  <script>
export default {
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    handleConfirm() {
      alert('Action confirmed!');
      this.isOpen = false;
    },
  },
};
</script> 
-->
