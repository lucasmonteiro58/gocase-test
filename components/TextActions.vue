<script setup lang="ts">
const { addEditableText } = useFabric();
</script>

<template>
  <div class="tw-flex tw-gap-2 tw-justify-center">
    <div class="tw-w-3/5">
      <FontSelect class="tw-w-full" />
    </div>

    <div>
      <ColorSelect />
    </div>
    <VBtn icon="mdi:format-bold" @click="addEditableText" />
  </div>
</template>
