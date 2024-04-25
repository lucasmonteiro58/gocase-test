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

  const selectedFont = ref("Quicksand");
  const color = ref("#000000");

  return {
    fonts,
    selectedFont,
    color,
  };
});
