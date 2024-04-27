<script setup lang="ts">
import { Icon } from "#components";

const mdiColor = h(Icon, { name: "mdi:color" });

const textStore = useTextStore();
const { color } = storeToRefs(textStore);

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
  <v-menu :close-on-content-click="false">
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
    <div class="mt-2">
      <v-color-picker
        v-model="color"
        hide-inputs
        show-swatches
        :swatches="swatches"
        elevation="10"
        mode="hexa"
      ></v-color-picker>
    </div>
  </v-menu>
</template>
