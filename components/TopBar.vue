<script setup lang="ts">
const appStore = useAppStore();

const { activeMenu } = storeToRefs(appStore);
</script>

<template>
  <div class="tw-py-4 tw-rounded-t-lg">
    <BackgroundActions v-if="activeMenu === 'background'" />
    <TextActions v-if="activeMenu === 'text'" />
    <StickerActions v-if="activeMenu === 'sticker'" />
  </div>
</template>
