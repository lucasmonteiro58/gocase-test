import { fabric } from "fabric";

export const useCanvasStore = defineStore("canvas", () => {
  const canvas = ref(null) as unknown as Ref<fabric.Canvas>;

  function createCanvas(canvasElement: HTMLCanvasElement) {
    canvas.value = new fabric.Canvas(canvasElement);
  }

  return {
    canvas,
    createCanvas,
  };
});
