<script setup lang="ts">
const appStore = useAppStore();

const { editing } = storeToRefs(appStore);
</script>

<template>
  <div class="mb-2 min-h-[60px]">
    <BackgroundActions v-if="editing === 'background'" />
    <TextActions v-if="editing === 'text'" />
    <StickerActions v-if="editing === 'sticker'" />
  </div>
</template>
