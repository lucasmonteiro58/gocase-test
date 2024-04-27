import { fabric } from "fabric";

export function useFabric() {
  const canvasStore = useCanvasStore();
  const textStore = useTextStore();
  const { canvas, backgroundImage } = storeToRefs(canvasStore);
  const { selectedFont, color, texts } = storeToRefs(textStore);

  async function addImage() {
    try {
      const imageUrl = await loadImageFromComputer();

      fabric.Image.fromURL(imageUrl, function (oImg) {
        removeImage();
        oImg.setOptions({
          lockScalingAspectRatio: true,
          top: 300,
        });
        oImg.scaleToWidth((canvas.value?.width as number) - 50);
        backgroundImage.value = oImg;
        canvas.value.add(markRaw(backgroundImage.value));
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

  async function addEditableText() {
    try {
      const textObject = new fabric.IText("Edite o texto aqui", {
        fontFamily: selectedFont.value,
        fill: color.value,
        left: 100,
        top: 400,
        fontSize: 24,
      });

      texts.value.push(textObject);
      canvas.value.add(markRaw(textObject));
      canvas.value.setActiveObject(markRaw(textObject));
      markRaw(textObject).enterEditing();
    } catch (error) {
      console.error("Error adding editable text:", error);
    }
  }

  return { addImage, removeImage, addEditableText };
}
