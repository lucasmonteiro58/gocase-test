<script setup lang="ts">
const { addEditableText } = useFabric();
</script>

<template>
  <div class="tw-flex tw-gap-2 tw-justify-center">
    <div class="tw-w-2/5">
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
