<script setup lang="ts">
const appStore = useAppStore();

const { activeMenu } = storeToRefs(appStore);
</script>

<template>
  <div class="tw-py-4 tw-rounded-t-lg tw-mt-4">
    <ActionsBackground v-if="activeMenu === 'background'" />
    <ActionsText v-if="activeMenu === 'text'" />
    <ActionsSticker v-if="activeMenu === 'sticker'" />
  </div>
</template>
