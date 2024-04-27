import { fabric } from "fabric";

export function useSticker() {
  const canvasStore = useCanvasStore();
  const stickerStore = useStickerStore();

  const { canvas } = storeToRefs(canvasStore);
  const { stickerUrl, stickerImg, hasSelectedSticker, stickers } =
    storeToRefs(stickerStore);

  async function addSticker() {
    try {
      const imageUrl = stickerUrl.value;

      fabric.Image.fromURL(
        imageUrl,
        function (oImg) {
          oImg.setOptions({
            lockScalingAspectRatio: true,
            top: 300,
            left: 100,
            width: 64,
          });
          stickerImg.value = oImg;
          stickerStore.addSticker(stickerImg.value);

          canvas.value.add(markRaw(stickerImg.value));
        },
        {
          crossOrigin: "anonymous",
        }
      );
    } catch (error) {
      console.error("Error loading image:", error);
    }
  }

  function deleteSelectedStickers() {
    const activeObjects = canvas.value.getActiveObjects();
    activeObjects.forEach((object) => {
      console.log(object.type);
      if (object.type === "image") {
        canvas.value.remove(object);
      }
    });

    stickers.value = stickers.value.filter(
      (stickerObject) => !activeObjects.includes(stickerObject)
    );
    canvas.value.discardActiveObject().renderAll();
  }

  return { addSticker, hasSelectedSticker, deleteSelectedStickers };
}
