<script setup lang="ts">
definePageMeta({
  layout: "app",
  title: "Make your case - Criar",
});

const refCanvas = ref<HTMLCanvasElement | null>(null);
const refImg = ref<HTMLImageElement | null>(null);
const refContainer = ref<HTMLImageElement | null>(null);

const canvasStore = useCanvasStore();
const textStore = useTextStore();
const stickerStore = useStickerStore();

const { height } = useElementSize(refContainer);

const width = computed(() => height.value * 0.52231);

useKeyboardListener(canvasStore, textStore, stickerStore);

const sizeStyle = computed(() => {
  return {
    width: width.value + "px",
    height: height.value + "px",
  };
});

onMounted(() => {
  canvasStore.createCanvas(refCanvas.value!, {
    width: width.value,
    height: height.value,
    selection: false,
  });
});
</script>

<template>
  <div
    class="tw-flex tw-flex-col tw-h-full tw-gap-x-2 tw-gap-y-2 tw-justify-center tw-items-center"
  >
    <AppTopBar />
    <div
      class="tw-full tw-border-b tw-border-none sm:tw-border tw-border-gray-500 tw-pb-4 tw-rounded-lg"
    >
      <div
        ref="refContainer"
        class="tw-h-[calc(100vh-300px)] tw-w-full tw-relative tw-flex tw-justify-center tw-items-center"
      >
        <div
          ref="refImg"
          :style="sizeStyle"
          class="tw-bg-phone tw-bg-cover tw-absolute"
        ></div>
        <div class="clip-image-mask tw-absolute" :style="sizeStyle">
          <canvas ref="refCanvas" class="" :style="sizeStyle"></canvas>
        </div>
      </div>
    </div>
    <AppFooter></AppFooter>
  </div>
</template>
<style>
.clip-image-mask {
  -webkit-mask-image: url("~/assets/images/mask15.png");
  mask-image: url("~/assets/images/mask15.png");
  mask-size: cover;
}
</style>
