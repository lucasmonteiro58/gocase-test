<script setup lang="ts">
const { addEditableText } = useText();
</script>

<template>
  <div class="tw-flex tw-gap-x-2 tw-gap-y-3 tw-justify-center tw-flex-wrap">
    <div class="sm:tw-w-1/5 tw-w-full">
      <FontSelect class="tw-w-full" />
    </div>

    <div>
      <ColorSelect />
    </div>
    <VBtn
      color="primary"
      height="40px"
      rounded="lg"
      variant="flat"
      prepend-icon="mdi-plus"
      @click="addEditableText"
    >
      Adicionar texto
    </VBtn>
  </div>
</template>
