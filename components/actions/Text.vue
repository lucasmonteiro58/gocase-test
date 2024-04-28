<script setup lang="ts">
import { Icon } from "#components";
const { addEditableText, hasSelectedText, deleteSelectedTexts } = useText();
const tablerTrash = h(Icon, { name: "tabler:trash" });
</script>

<template>
  <div class="tw-flex tw-gap-x-2 tw-gap-y-3 tw-justify-center tw-flex-wrap">
    <div class="sm:tw-w-1/5 tw-w-full">
      <FontSelect class="tw-w-full" />
    </div>

    <div><TextOptions /></div>
    <VBtn
      color="primary"
      height="40px"
      rounded="lg"
      variant="flat"
      prepend-icon="mdi-plus"
      @click="addEditableText"
    >
      Adicionar
    </VBtn>
    <div class="sm:tw-w-[48px] tw-w-fit">
      <VBtn
        v-if="hasSelectedText"
        rounded="lg"
        color="rgb(248 113 113)"
        variant="outlined"
        :icon="tablerTrash"
        height="40"
        @click="deleteSelectedTexts"
      >
      </VBtn>
    </div>
  </div>
</template>
