<script setup lang="ts">
import { Icon } from "#components";

const mdiColor = h(Icon, { name: "mdi:color" });

const textStore = useTextStore();
const { color } = storeToRefs(textStore);

const show = ref(false);

const { updateTextProperties } = useText();

const swatches = [
  ["#065f46", "#059669", "#34d399"],
  ["#991b1b", "#dc2626", "#fca5a5"],
  ["#d97706", "#fbbf24", "#fde68a"],
  ["#1e40af", "#2563eb", "#60a5fa"],
  ["#86198f", "#c026d3", "#e879f9"],
];

watch(color, () => {
  updateTextProperties();
});
</script>

<template>
  <v-menu v-model="show" :close-on-content-click="false">
    <template #activator="{ props }">
      <VBtn
        v-bind="props"
        :icon="mdiColor"
        height="40px"
        width="40px"
        :color="color"
        flat
      >
      </VBtn>
    </template>
    <div
      class="mt-2 tw-bg-white tw-flex tw-flex-col tw-rounded-lg tw-shadow-lg"
    >
      <v-color-picker
        v-model="color"
        hide-inputs
        show-swatches
        :swatches="swatches"
        elevation="0"
        mode="hexa"
      ></v-color-picker>
      <VBtn variant="text" @click="show = false">Fechar</VBtn>
    </div>
  </v-menu>
</template>
