import { fabric } from "fabric";

export function useText() {
  const canvasStore = useCanvasStore();
  const textStore = useTextStore();
  const { canvas } = storeToRefs(canvasStore);
  const { selectedFont, color, texts } = storeToRefs(textStore);

  async function addEditableText() {
    try {
      const textObject = new fabric.IText("Clique para editar...", {
        fontFamily: selectedFont.value,
        fill: color.value,
        left: 50,
        top: 400,
        fontSize: 14,
      });

      texts.value.push(textObject);
      canvas.value.add(
        markRaw(texts.value[texts.value.length - 1] as fabric.IText)
      );
      canvas.value.setActiveObject(
        markRaw(texts.value[texts.value.length - 1] as fabric.IText)
      );
    } catch (error) {
      console.error("Error adding editable text:", error);
    }
  }

  function updateTextProperties() {
    const activeObject = canvas.value.getActiveObject();
    if (activeObject && activeObject.type === "i-text") {
      activeObject.setOptions({
        fontFamily: selectedFont.value,
        fill: color.value,
      });
      canvas.value.renderAll();
    }
  }

  return { addEditableText, updateTextProperties };
}
