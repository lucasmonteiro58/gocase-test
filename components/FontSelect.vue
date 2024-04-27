<script setup lang="ts">
const textStore = useTextStore();
const { selectedFont, fonts } = storeToRefs(textStore);

function removeSpaces(text: string) {
  return text.replace(/\s/g, "");
}
</script>

<template>
  <VSelect
    v-model="selectedFont"
    :items="fonts"
    label="Fonte"
    variant="outlined"
    height="40px"
    density="compact"
    flat
    rounded="lg"
    color="primary"
    class="tw-w-1/2"
    hide-details
  >
    <template #item="{ props, item }">
      <v-list-item v-bind="props" title="">
        <v-list-item-title>
          <div :class="`font-${removeSpaces(item.title)}`">
            {{ item.title }}
          </div>
        </v-list-item-title>
      </v-list-item></template
    >
    <template #selection>
      <v-list-item title="">
        <v-list-item-title>
          <div :class="`font-${removeSpaces(selectedFont)}`">
            {{ selectedFont }}
          </div>
        </v-list-item-title>
      </v-list-item>
    </template>
  </VSelect>
</template>
