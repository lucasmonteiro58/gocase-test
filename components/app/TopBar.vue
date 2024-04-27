<script setup>
import { Icon } from "#components";

const tablerMenu = h(Icon, {
  name: "tabler:menu-2",
  size: "30px",
});

const appStore = useAppStore();
</script>

<template>
  <v-app-bar elevation="0" height="70">
    <div class="tw-flex tw-items-center tw-justify-between tw-w-full tw-px-5">
      <VBtn :icon="tablerMenu" @click="appStore.toogleMenu()"> </VBtn>
    </div>
  </v-app-bar>
</template>
