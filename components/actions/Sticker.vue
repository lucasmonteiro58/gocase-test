<script setup lang="ts">
import { Icon } from "#components";

const tablerTrash = h(Icon, { name: "tabler:trash" });

const { hasSelectedSticker, deleteSelectedStickers } = useSticker();
</script>

<template>
  <div class="tw-flex tw-justify-center tw-gap-2">
    <EmojiSelect />

    <VBtn
      v-if="hasSelectedSticker"
      rounded="lg"
      color="rgb(248 113 113)"
      variant="outlined"
      :icon="tablerTrash"
      height="40"
      @click="deleteSelectedStickers"
    >
    </VBtn>
  </div>
</template>
