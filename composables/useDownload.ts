export function useDownload() {
  const canvasStore = useCanvasStore();
  const { canvas } = storeToRefs(canvasStore);

  function downloadCanvasAsImage() {
    try {
      const dataURL = canvas.value.toDataURL({ format: "png", quality: 1 });
      const img = createImage(dataURL);
      img.onload = function () {
        const croppedCanvas = cropImage(img, 18, 15, 18, 19);
        const roundedDataURL = createRoundedCanvasDataURL(
          croppedCanvas as unknown as HTMLImageElement
        );
        downloadImage(roundedDataURL);
      };
    } catch (error) {
      console.error("Error downloading canvas as image:", error);
    }
  }

  return { downloadCanvasAsImage };
}

/* aux function */

function createImage(dataURL: string): HTMLImageElement {
  const img: HTMLImageElement = new Image();
  img.src = dataURL;
  return img;
}

function cropImage(
  img: HTMLImageElement,
  left: number,
  top: number,
  right: number,
  bottom: number
): HTMLCanvasElement {
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  const width = img.width - left - right;
  const height = img.height - top - bottom;
  canvas.width = width;
  canvas.height = height;
  if (ctx) {
    ctx.drawImage(img, left, top, width, height, 0, 0, width, height);
  }
  return canvas;
}

function createRoundedCanvasDataURL(img: HTMLImageElement): string {
  const roundedCanvas: HTMLCanvasElement = createRoundedCanvas(img);
  return roundedCanvas.toDataURL();
}

function createRoundedCanvas(img: HTMLImageElement): HTMLCanvasElement {
  const roundedCanvas: HTMLCanvasElement = document.createElement("canvas");
  const roundedContext: CanvasRenderingContext2D | null =
    roundedCanvas.getContext("2d");
  roundedCanvas.width = img.width;
  roundedCanvas.height = img.height;
  if (roundedContext) {
    roundedContext.beginPath();
    roundedContext.moveTo(30, 0);
    roundedContext.arcTo(img.width, 0, img.width, img.height, 30);
    roundedContext.arcTo(img.width, img.height, 0, img.height, 30);
    roundedContext.arcTo(0, img.height, 0, 0, 30);
    roundedContext.arcTo(0, 0, img.width, 0, 30);
    roundedContext.closePath();
    roundedContext.clip();
    roundedContext.drawImage(img, 0, 0);
  }
  return roundedCanvas;
}

function downloadImage(dataURL: string): void {
  const link: HTMLAnchorElement = document.createElement("a");
  link.href = dataURL;
  link.download = "make_your_case_rounded.png";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
