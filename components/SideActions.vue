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
  <div class="flex flex-col gap-2 pt-20 min-w-[95px]">
    <VBtn
      stacked
      color="primary"
      :variant="editing === 'background' ? 'flat' : 'outlined'"
      rounded
      flat
      :prepend-icon="tablerBackground"
      :active="editing === 'background'"
      @click="appStore.setEditing('background')"
      ><div class="text-xs">Fundo</div></VBtn
    >
    <VBtn
      stacked
      color="primary"
      :variant="editing === 'text' ? 'flat' : 'outlined'"
      rounded
      flat
      :prepend-icon="tablerText"
      :active="editing === 'text'"
      @click="appStore.setEditing('text')"
      ><div class="text-xs">Texto</div></VBtn
    >
    <VBtn
      stacked
      color="primary"
      :variant="editing === 'sticker' ? 'flat' : 'outlined'"
      rounded
      flat
      :prepend-icon="tablerSticker"
      :active="editing === 'sticker'"
      @click="appStore.setEditing('sticker')"
      ><div class="text-xs">Sticker</div></VBtn
    >
  </div>
</template>
