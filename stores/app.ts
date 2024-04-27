import { defineStore } from "pinia";

type TActiveMenu = "text" | "background" | "sticker" | null;

export const useAppStore = defineStore("app", () => {
  const isOpen = ref(true);
  const isCompact = ref(false);

  const { width } = useWindowSize();

  const isDesktop = computed(() => width.value >= 1280);

  function toogleMenu() {
    if (isDesktop.value) {
      isCompact.value = !isCompact.value;
      return;
    }
    isOpen.value = !isOpen.value;
  }

  const activeMenu = ref<TActiveMenu>("background");

  function setActiveMenu(type: TActiveMenu) {
    activeMenu.value = type;
  }

  return {
    activeMenu,
    setActiveMenu,
    isOpen,
    isCompact,
    isDesktop,
    toogleMenu,
  };
});
