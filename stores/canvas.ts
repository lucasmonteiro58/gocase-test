import { fabric } from "fabric";

export const useCanvasStore = defineStore("canvas", () => {
  const canvas = ref(null) as unknown as Ref<fabric.Canvas>;

  function createCanvas(
    canvasElement: HTMLCanvasElement,
    options?: fabric.ICanvasOptions
  ) {
    canvas.value = new fabric.Canvas(canvasElement, options);
  }

  return {
    canvas,
    createCanvas,
  };
});
