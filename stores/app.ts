import { defineStore } from "pinia";

type TEditing = "text" | "background" | "sticker" | null;

export const useAppStore = defineStore("app", () => {
  const editing = ref<TEditing>(null);

  function setEditing(type: TEditing) {
    editing.value = type;
  }

  return {
    editing,
    setEditing,
  };
});
