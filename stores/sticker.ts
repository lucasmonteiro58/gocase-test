import type { EmojiExt } from "vue3-emoji-picker";

export const useStickerStore = defineStore("sticker", () => {
  const selectedSticker: Ref<EmojiExt | null> = ref(null);

  const stickerImg: Ref<fabric.Image | null> = ref(null);

  const stickerUrl = computed(() => {
    return `https://cdn.jsdelivr.net/npm/emoji-datasource-apple@6.0.1/img/apple/64/${selectedSticker.value?.r}.png`;
  });

  const stickers = ref([]) as Ref<fabric.Image[]>;

  function addSticker(sticker: fabric.Image) {
    stickers.value.push(sticker);
  }

  function getSticker(sticker: fabric.Image) {
    return stickers.value.find((s) => s === sticker);
  }

  const hasSelectedSticker = computed(() => {
    return stickers.value.length > 0;
  });

  return {
    selectedSticker,
    stickerUrl,
    stickers,
    addSticker,
    stickerImg,
    getSticker,
    hasSelectedSticker,
  };
});
