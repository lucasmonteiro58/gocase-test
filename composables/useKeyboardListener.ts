interface CanvasStore {
  canvas: {
    getActiveObjects(): any;
    remove(object: any): void;
  };
}

export function useKeyboardListener(canvasStore: CanvasStore) {
  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.code === "Delete") {
      const activeObject = canvasStore.canvas.getActiveObjects();
      if (activeObject.length > 0) {
        activeObject.forEach((obj: any) => {
          canvasStore.canvas.remove(obj);
        });
      }
    }
  };

  onMounted(() => {
    window.addEventListener("keydown", handleKeyDown);
  });

  onUnmounted(() => {
    window.removeEventListener("keydown", handleKeyDown);
  });
}
