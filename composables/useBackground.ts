import { fabric } from "fabric";

export function useBackground() {
  const canvasStore = useCanvasStore();
  const { canvas, backgroundImage } = storeToRefs(canvasStore);

  async function addImage() {
    try {
      const imageUrl = await loadImageFromComputer();

      fabric.Image.fromURL(imageUrl, function (oImg) {
        removeImage();
        oImg.setOptions({
          lockScalingAspectRatio: true,
          top: 300,
          index: -9999,
          globalCompositeOperation: "destination-over",
          lockUniScaling: true,
        });
        oImg.scaleToWidth((canvas.value?.width as number) - 50);
        backgroundImage.value = oImg;

        canvas.value.insertAt(markRaw(backgroundImage.value), 0, false);
      });

      canvas.value.renderAll();
    } catch (error) {
      console.error("Error loading image:", error);
    }
  }

  async function removeImage() {
    if (backgroundImage.value) {
      canvas.value.remove(backgroundImage.value);
      backgroundImage.value = null;
      canvas.value.renderAll();
    }
  }

  function lockImage() {
    if (backgroundImage.value) {
      backgroundImage.value.set({
        hoverCursor: "default",
        selectable: false,
      });
      canvas.value.discardActiveObject().renderAll();
    }
  }

  function unlockImage() {
    if (backgroundImage.value) {
      backgroundImage.value.set({
        hoverCursor: "move",
        selectable: true,
      });
      canvas.value.setActiveObject(backgroundImage.value).renderAll();
    }
  }

  return { addImage, removeImage, lockImage, unlockImage };
}
