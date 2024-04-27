import type { StoreGeneric } from "pinia";

export function useKeyboardListener(
  canvasStore: StoreGeneric,
  textStore: StoreGeneric,
  stickerStore: StoreGeneric
) {
  const { texts } = storeToRefs(textStore);
  const { stickers } = storeToRefs(stickerStore);

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.code === "Delete") {
      const activeObjects = canvasStore.canvas.getActiveObjects();
      if (activeObjects.length > 0) {
        activeObjects.forEach((obj: any) => {
          canvasStore.canvas.remove(obj);
        });

        texts.value = texts.value.filter(
          (textObject: any) => !activeObjects.includes(textObject)
        );

        stickers.value = stickers.value.filter(
          (stickerObject: any) => !activeObjects.includes(stickerObject)
        );

        canvasStore.canvas.discardActiveObject();
        canvasStore.canvas.renderAll();
      }
    }
  };

  onMounted(() => {
    window.addEventListener("keydown", handleKeyDown);
  });

  onUnmounted(() => {
    window.removeEventListener("keydown", handleKeyDown);
  });
}
