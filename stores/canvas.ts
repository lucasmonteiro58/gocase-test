import { fabric } from "fabric";
import Hammer from "hammerjs";

export const useCanvasStore = defineStore("canvas", () => {
  const canvas = ref(null) as unknown as Ref<fabric.Canvas>;
  const backgroundImage: Ref<fabric.Image | null> = ref(null);
  const hammer: Ref<HammerManager | null> = ref(null);

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

  function createHammer(canvasElement: HTMLCanvasElement) {
    hammer.value = new Hammer(canvasElement);
    hammer.value.get("pinch").set({ enable: true });

    hammer.value.on("pinch", (e) => {
      alert(e);
      const activeObject = canvas.value.getActiveObject();
      if (activeObject && activeObject.type === "image") {
        const newScale = (activeObject.scaleX ?? 1) * e.scale;
        activeObject.set("scaleX", newScale);
        activeObject.set("scaleY", newScale);
        canvas.value.renderAll();
      }
    });
  }

  return {
    canvas,
    createCanvas,
    backgroundImage,
    activeObjects,
    setActiveObjects,
    hammer,
    createHammer,
  };
});
