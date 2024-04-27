import { defineStore } from "pinia";

type TActiveMenu = "text" | "background" | "sticker" | null;

export const useAppStore = defineStore("app", () => {
  const isOpen = ref(true);
  const { width } = useWindowSize();

  const isMobile = computed(() => width.value < 640);

  const activeMenu = ref<TActiveMenu>("background");

  function setActiveMenu(type: TActiveMenu) {
    activeMenu.value = type;
    if (isMobile.value) isOpen.value = false;
  }

  return {
    activeMenu,
    setActiveMenu,
    isMobile,
    isOpen,
  };
});
