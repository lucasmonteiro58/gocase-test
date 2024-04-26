<script setup lang="ts">
import Logo from "~/assets/images/logo.png";
const router = useRouter();
</script>

<template>
  <div class="tw-flex tw-flex-col tw-items-center">
    <img :src="Logo" alt="logo" class="tw-mb-4 tw-w-[250px]" />
    <VBtn
      color="primary"
      rounded
      height="50px"
      width="200px"
      flat
      @click="router.push('/create')"
    >
      <span class="tw-text-lg">Começar</span>
    </VBtn>
  </div>
</template>
