<script setup lang="ts">
import { Icon } from "#components";

const mdiColor = h(Icon, { name: "mdi:color" });

const textStore = useTextStore();
const { color } = storeToRefs(textStore);

const swatches = [
  ["#FF0000", "#AA0000", "#550000"],
  ["#FFFF00", "#AAAA00", "#555500"],
  ["#00FF00", "#00AA00", "#005500"],
  ["#00FFFF", "#00AAAA", "#005555"],
  ["#0000FF", "#0000AA", "#000055"],
];
</script>

<template>
  <v-menu :close-on-content-click="false">
    <template #activator="{ props }">
      <VBtn
        v-bind="props"
        :icon="mdiColor"
        height="60px"
        width="60px"
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
