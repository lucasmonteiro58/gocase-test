<script setup lang="ts">
import { Icon } from "#components";
import EmojiPicker, { type EmojiExt } from "vue3-emoji-picker";

const mdiEmoticon = h(Icon, { name: "mdi:emoji-outline" });

const stickerStore = useStickerStore();

const showEmojiPicker = ref(false);

const { selectedSticker } = storeToRefs(stickerStore);
const { addSticker } = useSticker();

const groupNames = {
  smileys_people: "Emojis & Pessoas",
  animals_nature: "Animais & Natureza",
  food_drink: "Comida & Bebida",
  activities: "Atividades",
  travel_places: "Viagens & Lugares",
  objects: "Objetos",
  symbols: "Símbolos",
  flags: "Bandeiras",
  recent: "Recentemente usados",
};

function onSelectEmoji(emoji: EmojiExt) {
  selectedSticker.value = emoji;
  showEmojiPicker.value = false;
  addSticker();
}
</script>

<template>
  <v-menu v-model="showEmojiPicker" :close-on-content-click="false">
    <template #activator="{ props }">
      <VBtn
        v-bind="props"
        rounded="lg"
        color="primary"
        variant="flat"
        height="40px"
        :prepend-icon="mdiEmoticon"
      >
        Emoji
      </VBtn>
    </template>
    <div class="mt-2">
      <EmojiPicker
        display-recent
        disable-sticky-group-names
        :group-names="groupNames"
        :static-texts="{
          placeholder: 'Procurar emoji',
          skinTone: 'Tom de pele',
        }"
        @select="onSelectEmoji"
      />
    </div>
  </v-menu>
</template>
<style>
.v3-foot-left {
  opacity: 0;
}
</style>
