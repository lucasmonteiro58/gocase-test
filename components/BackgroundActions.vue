<script setup lang="ts">
import { Icon } from "#components";

const tablerUpload = h(Icon, { name: "tabler:upload" });
const tablerTrash = h(Icon, { name: "tabler:trash" });
</script>

<template>
  <div class="w-full flex gap-2">
    <VBtn
      rounded
      color="primary"
      variant="outlined"
      height="50px"
      :prepend-icon="tablerUpload"
    >
      Adicionar imagem
    </VBtn>
    <VBtn
      rounded="full"
      color="rgb(248 113 113)"
      variant="outlined"
      height="50px"
      :icon="tablerTrash"
    />
  </div>
</template>
