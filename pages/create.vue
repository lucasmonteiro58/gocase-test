<script setup lang="ts">
const refCanvas = ref<HTMLCanvasElement | null>(null);
const refImg = ref<HTMLImageElement | null>(null);

const canvasStore = useCanvasStore();

const { width, height } = useElementSize(refImg);

onMounted(() => {
  canvasStore.createCanvas(refCanvas.value!, {
    width: width.value,
    height: height.value,
  });
});
</script>

<template>
  <div class="tw-flex tw-gap-x-2 tw-gap-y-8 tw-flex-col sm:tw-flex-row">
    <SideActions />
    <div>
      <TopBar />

      <div class="sm:tw-px-4 tw-px-0 tw-w-fit tw-mx-auto">
        <img
          ref="refImg"
          src="~/assets/images/iphone15.png"
          alt="iphone15"
          class="tw-h-[calc(100vh-200px)] tw-w-auto tw-absolute"
        />

        <canvas ref="refCanvas" class=""></canvas>
      </div>
    </div>
  </div>
</template>
