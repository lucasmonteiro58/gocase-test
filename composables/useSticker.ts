import { fabric } from "fabric";

export function useSticker() {
  const canvasStore = useCanvasStore();
  const stickerStore = useStickerStore();

  const { canvas } = storeToRefs(canvasStore);
  const { stickerUrl, stickerImg } = storeToRefs(stickerStore);

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

  return { addSticker };
}
