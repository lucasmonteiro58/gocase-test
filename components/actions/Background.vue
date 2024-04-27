<script setup lang="ts">
import { Icon } from "#components";

const tablerUpload = h(Icon, { name: "tabler:upload" });
const tablerTrash = h(Icon, { name: "tabler:trash" });

const { addImage, removeImage, unlockImage, lockImage } = useBackground();
const canvasStore = useCanvasStore();

onMounted(() => {
  unlockImage();
});

onBeforeUnmount(() => {
  lockImage();
});
</script>

<template>
  <div class="tw-w-full tw-flex tw-gap-2 tw-justify-center">
    <VBtn
      rounded="lg"
      color="primary"
      variant="flat"
      :prepend-icon="tablerUpload"
      height="40"
      @click="addImage"
    >
      {{ canvasStore.backgroundImage ? "Mudar imagem" : "Adicionar imagem" }}
    </VBtn>
    <VBtn
      v-if="canvasStore.backgroundImage"
      rounded="lg"
      color="rgb(248 113 113)"
      variant="outlined"
      :icon="tablerTrash"
      height="40"
      @click="removeImage"
    >
    </VBtn>
  </div>
</template>
