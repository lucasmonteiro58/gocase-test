<script setup lang="ts">
const appStore = useAppStore();

const { activeMenu } = storeToRefs(appStore);
</script>

<template>
  <div class="tw-mb-2 tw-min-h-[60px]">
    <BackgroundActions v-if="activeMenu === 'background'" />
    <TextActions v-if="activeMenu === 'text'" />
    <StickerActions v-if="activeMenu === 'sticker'" />
  </div>
</template>
