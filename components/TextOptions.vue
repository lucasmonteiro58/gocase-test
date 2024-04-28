<script setup lang="ts">
const textStore = useTextStore();

const { textDecoration } = storeToRefs(textStore);

const { updateTextProperties } = useText();

watch(textDecoration, () => {
  updateTextProperties();
});
</script>

<template>
  <div class="tw-flex">
    <VBtnToggle
      v-model="textDecoration"
      background-color="primary"
      color="secondary"
      variant="outlined"
      multiple
      rounded="md"
      class="tw-w-full !tw-rounded-e-none !tw-h-[40px]"
    >
      <VBtn height="40px" value="bold">
        <VIcon>mdi-format-bold</VIcon>
      </VBtn>

      <VBtn height="40px" value="italic">
        <VIcon>mdi-format-italic</VIcon>
      </VBtn>

      <VBtn height="40px" value="underline">
        <VIcon>mdi-format-underline</VIcon>
      </VBtn>
    </VBtnToggle>
    <ColorSelect />
  </div>
</template>
