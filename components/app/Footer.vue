<script setup lang="ts">
const { downloadCanvasAsImage } = useDownload();
</script>

<template>
  <div class="tw-w-full tw-flex tw-justify-center tw-items-center">
    <VBtn
      variant="flat"
      color="secondary"
      rounded="lg"
      height="40"
      prepend-icon="mdi-download"
      @click="downloadCanvasAsImage"
      >Download</VBtn
    >
  </div>
</template>
