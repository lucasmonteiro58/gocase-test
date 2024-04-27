<script setup lang="ts">
import { Icon } from "#components";

const tablerUpload = h(Icon, { name: "tabler:upload" });
const tablerTrash = h(Icon, { name: "tabler:trash" });

const { addImage, removeImage } = useFabric();
const canvasStore = useCanvasStore();
</script>

<template>
  <div class="tw-w-full tw-flex tw-gap-2 tw-justify-center">
    <VBtn
      rounded
      color="primary"
      variant="outlined"
      height="60px"
      :prepend-icon="tablerUpload"
      @click="addImage"
    >
      Adicionar imagem
    </VBtn>
    <VBtn
      v-if="canvasStore.backgroundImage"
      rounded="full"
      color="rgb(248 113 113)"
      variant="outlined"
      height="60px"
      width="60px"
      :icon="tablerTrash"
      @click="removeImage"
    />
  </div>
</template>
