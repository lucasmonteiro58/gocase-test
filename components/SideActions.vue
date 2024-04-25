<script setup lang="ts">
import { Icon } from "#components";
const appStore = useAppStore();
const { editing } = storeToRefs(appStore);

const tablerBackground = h(Icon, {
  name: "tabler:image-in-picture",
  size: "30px",
});
const tablerText = h(Icon, { name: "tabler:text-recognition", size: "30px" });
const tablerSticker = h(Icon, { name: "tabler:sticker", size: "30px" });
</script>

<template>
  <div class="tw-flex tw-flex-row sm:tw-flex-col tw-gap-2 tw-pt-2 sm:tw-pt-20">
    <VBtn
      stacked
      color="primary"
      :variant="editing === 'background' ? 'flat' : 'outlined'"
      rounded
      flat
      :prepend-icon="tablerBackground"
      :active="editing === 'background'"
      class="tw-flex-grow sm:tw-flex-grow-0"
      @click="appStore.setEditing('background')"
      ><div class="tw-text-xs">Fundo</div></VBtn
    >
    <VBtn
      stacked
      color="primary"
      :variant="editing === 'text' ? 'flat' : 'outlined'"
      rounded
      flat
      :prepend-icon="tablerText"
      :active="editing === 'text'"
      class="tw-flex-grow sm:tw-flex-grow-0"
      @click="appStore.setEditing('text')"
      ><div class="tw-text-xs">Texto</div></VBtn
    >
    <VBtn
      stacked
      color="primary"
      :variant="editing === 'sticker' ? 'flat' : 'outlined'"
      rounded
      flat
      :prepend-icon="tablerSticker"
      :active="editing === 'sticker'"
      class="tw-flex-grow sm:tw-flex-grow-0"
      @click="appStore.setEditing('sticker')"
      ><div class="tw-text-xs">Sticker</div></VBtn
    >
  </div>
</template>
