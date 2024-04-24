<script setup lang="ts">
import Logo from "~/assets/logo.svg";
const router = useRouter();
</script>

<template>
  <div class="flex flex-col items-center">
    <Logo class="w-64 h-64" />
    <button
      class="bg-primary px-12 py-4 rounded-full text-white font-bold text-lg"
      @click="router.push('/create')"
    >
      Começar
    </button>
  </div>
</template>
