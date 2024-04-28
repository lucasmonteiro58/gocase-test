export const useTextStore = defineStore("text", () => {
  const fonts = ref([
    "Acme",
    "Anton",
    "Bangers",
    "Bebas Neue",
    "Cutive Mono",
    "Dancing Script",
    "DM Serif Display",
    "Jacquard 24",
    "Khand",
    "Lobster",
    "Oswald",
    "Pacifico",
    "Roboto",
    "Rubik Mono One",
    "Zilla Slab",
  ]);

  const canvasStore = useCanvasStore();
  const { activeObjects } = storeToRefs(canvasStore);

  const texts = ref([] as fabric.IText[]);
  const selectedFont = ref("Anton");
  const color = ref("#303a4a");
  const textDecoration = ref<("underline" | "bold" | "italic")[]>([]);

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
    textDecoration,
    texts,
  };
});
