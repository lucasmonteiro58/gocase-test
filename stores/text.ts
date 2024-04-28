export const useTextStore = defineStore("text", () => {
  const fonts = ref([
    "Cutive Mono",
    "Dancing Script",
    "DM Serif Display",
    "Open Sans",
    "Pacifico",
    "Quicksand",
    "Roboto",
    "Rubik Mono One",
    "Zilla Slab",
  ]);

  const canvasStore = useCanvasStore();
  const { activeObjects } = storeToRefs(canvasStore);

  const texts = ref([] as fabric.IText[]);
  const selectedFont = ref("Quicksand");
  const color = ref("#000000");

  const hasSelectedText = computed(() => {
    return (
      texts.value.length > 0 &&
      activeObjects.value.some((o) => o.type === "i-text")
    );
  });

  return {
    fonts,
    selectedFont,
    hasSelectedText,
    color,
    texts,
  };
});
