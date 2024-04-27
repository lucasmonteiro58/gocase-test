<script setup lang="ts">
import Logo from "~/assets/images/logo.png";
import { Icon } from "#components";

const tablerBackground = h(Icon, {
  name: "tabler:image-in-picture",
  size: "30px",
});
const tablerText = h(Icon, { name: "tabler:text-recognition", size: "30px" });
const tablerSticker = h(Icon, { name: "tabler:sticker", size: "30px" });

const appStore = useAppStore();
const { activeMenu, isDesktop, isOpen, isCompact } = storeToRefs(appStore);

watch(isDesktop, (value) => {
  if (value) {
    isOpen.value = true;
    isCompact.value = false;
  } else {
    isOpen.value = false;
    isCompact.value = false;
  }
});
</script>

<template>
  <VNavigationDrawer
    v-model="appStore.isOpen"
    width="270"
    :rail="appStore.isCompact"
    left
    expand-on-hover
    rail-width="75"
    elevation="0"
    class="!tw-shadow-none tw-border-r !tw-border-borderLight"
  >
    <div class="tw-pt-5 tw-px-2 tw-flex tw-justify-center">
      <img
        :src="Logo"
        alt="logo"
        class="tw-mb-1 tw-w-[80px] sm:tw-w-[90px] tw-mx-auto"
      />
    </div>
    <VList class="!tw-p-5" color="primary" :class="isCompact && '!tw-px-3.5'">
      <VListItem
        rounded="lg"
        :active="activeMenu === 'background'"
        color="primary"
        base-color="primary"
        :class="isCompact && '!tw-px-3'"
        @click="appStore.setActiveMenu('background')"
      >
        <template #prepend>
          <VIcon :icon="tablerBackground"></VIcon>
        </template>
        <VListItemTitle class="!tw-font-medium">Background</VListItemTitle>
      </VListItem>
      <VListItem
        rounded="lg"
        :active="activeMenu === 'text'"
        color="primary"
        base-color="primary"
        :class="isCompact && '!tw-px-3'"
        @click="appStore.setActiveMenu('text')"
      >
        <template #prepend>
          <VIcon :icon="tablerText"></VIcon>
        </template>
        <VListItemTitle class="!tw-font-medium">Texto</VListItemTitle>
      </VListItem>
      <VListItem
        rounded="lg"
        color="primary"
        base-color="primary"
        :active="activeMenu === 'sticker'"
        :class="isCompact && '!tw-px-3'"
        @click="appStore.setActiveMenu('sticker')"
      >
        <template #prepend>
          <VIcon :icon="tablerSticker"></VIcon>
        </template>
        <VListItemTitle class="!tw-font-medium">Sticker</VListItemTitle>
      </VListItem>
    </VList>
  </VNavigationDrawer>
</template>
