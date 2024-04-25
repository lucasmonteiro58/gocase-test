<script setup lang="ts">
import Logo from "~/assets/images/logo.svg";
const router = useRouter();
</script>

<template>
  <div class="flex flex-col items-center">
    <Logo class="w-64 h-64" />
    <VBtn
      color="primary"
      rounded
      height="50px"
      width="200px"
      flat
      @click="router.push('/create')"
    >
      Começar
    </VBtn>
  </div>
</template>
