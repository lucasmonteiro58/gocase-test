import { fabric } from "fabric";

export const useCanvasStore = defineStore("canvas", () => {
  const canvas = ref(null) as unknown as Ref<fabric.Canvas>;
  const backgroundImage: Ref<fabric.Image | null> = ref(null);

  const activeObjects = ref([]) as Ref<fabric.Object[]>;

  function setActiveObjects(objects: fabric.Object[]) {
    activeObjects.value = objects;
  }

  function createCanvas(
    canvasElement: HTMLCanvasElement,
    options?: fabric.ICanvasOptions
  ) {
    canvas.value = new fabric.Canvas(canvasElement, options);

    canvas.value.on("selection:created", (e) => {
      setActiveObjects(e.selected || []);
    });

    canvas.value.on("selection:cleared", () => {
      setActiveObjects([]);
    });
  }

  return {
    canvas,
    createCanvas,
    backgroundImage,
    activeObjects,
    setActiveObjects,
  };
});
