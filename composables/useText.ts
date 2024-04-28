import { fabric } from "fabric";

export function useText() {
  const canvasStore = useCanvasStore();
  const textStore = useTextStore();
  const { canvas } = storeToRefs(canvasStore);
  const { selectedFont, color, texts, hasSelectedText, textDecoration } =
    storeToRefs(textStore);

  async function addEditableText() {
    try {
      const textObject = new fabric.IText("Digite aqui..", {
        fontFamily: selectedFont.value,
        fill: color.value,
        underline: textDecoration.value?.includes("underline"),
        fontWeight: textDecoration.value?.includes("bold") ? 800 : "normal",
        fontStyle: textDecoration.value?.includes("italic")
          ? "italic"
          : "normal",
        left: (canvas.value?.width as number) / 2,
        top: (canvas.value?.height as number) / 2,
        fontSize: 16,
        originX: "center",
        originY: "center",
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
        underline: textDecoration.value?.includes("underline"),
        fontWeight: textDecoration.value?.includes("bold") ? 900 : 500,
        fontStyle: textDecoration.value?.includes("italic")
          ? "italic"
          : "normal",
      });
      canvas.value.renderAll();
    }
  }

  function deleteSelectedTexts() {
    const activeObjects = canvas.value.getActiveObjects();
    activeObjects.forEach((object) => {
      if (object.type === "i-text") {
        canvas.value.remove(object);
      }
    });

    texts.value = texts.value.filter(
      (textObject) => !activeObjects.includes(textObject)
    );
    canvas.value.discardActiveObject().renderAll();
  }

  return {
    addEditableText,
    updateTextProperties,
    hasSelectedText,
    deleteSelectedTexts,
  };
}
