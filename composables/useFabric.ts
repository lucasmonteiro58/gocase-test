import { fabric } from "fabric";

export function useFabric() {
  const canvasStore = useCanvasStore();
  const { canvas } = storeToRefs(canvasStore);

  function addRect() {
    const rect = new fabric.Rect({
      left: 100,
      top: 100,
      fill: "red",
      width: 20,
      height: 20,
    });

    canvas.value.add(markRaw(rect));
  }

  return { addRect };
}
