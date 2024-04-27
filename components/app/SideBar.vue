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
const { activeMenu, isMobile } = storeToRefs(appStore);
</script>

<template>
  <VNavigationDrawer
    permanent
    width="270"
    :rail="isMobile"
    left
    :rail-width="50"
    elevation="0"
    class="!tw-shadow-none tw-border-r !tw-border-borderLight"
  >
    <div class="tw-pt-5 tw-px-0 sm:tw-px-2 tw-flex tw-justify-center">
      <img
        :src="Logo"
        alt="logo"
        class="tw-mb-1 tw-w-[40px] sm:tw-w-[90px] tw-mx-auto"
      />
    </div>
    <VList class="!tw-px-1 sm:!tw-px-2" color="primary">
      <VListItem
        rounded="lg"
        :active="activeMenu === 'background'"
        color="primary"
        base-color="primary"
        class="!tw-px-2 sm:!tw-px-4"
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
        class="!tw-px-2 sm:!tw-px-4"
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
        class="!tw-px-2 sm:!tw-px-4"
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
