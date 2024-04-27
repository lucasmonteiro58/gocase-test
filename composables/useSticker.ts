import { fabric } from "fabric";

export function useSticker() {
  const canvasStore = useCanvasStore();
  const stickerStore = useStickerStore();

  const { canvas } = storeToRefs(canvasStore);
  const { stickerUrl, stickerImg } = storeToRefs(stickerStore);

  async function addSticker() {
    try {
      const imageUrl = stickerUrl.value;
      console.log("Adding sticker:", imageUrl);

      fabric.Image.fromURL(imageUrl, function (oImg) {
        oImg.setOptions({
          lockScalingAspectRatio: true,
          top: 300,
          left: 100,
          width: 64,
        });
        stickerImg.value = oImg;

        canvas.value.add(markRaw(stickerImg.value));
      });

      canvas.value.renderAll();
    } catch (error) {
      console.error("Error loading image:", error);
    }
  }

  return { addSticker };
}
