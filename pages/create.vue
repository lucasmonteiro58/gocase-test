<script setup lang="ts">
const refCanvas = ref<HTMLCanvasElement | null>(null);

const canvasStore = useCanvasStore();

onMounted(() => {
  canvasStore.createCanvas(refCanvas.value!);
});
</script>

<template>
  <div class="tw-flex tw-gap-x-2 tw-gap-y-8 tw-flex-col sm:tw-flex-row">
    <SideActions />
    <div>
      <TopBar />
      <div class="tw-h-[calc(100vh-200px)]">
        <div class="tw-h-full sm:tw-px-4 tw-px-0 tw-w-fit tw-mx-auto">
          <img
            ref="refImg"
            src="~/assets/images/iphone15.png"
            alt="iphone15"
            class="tw-h-full tw-w-full"
          />

          <canvas ref="refCanvas" class="" width="296.91" height="568"></canvas>
        </div>
      </div>
    </div>
  </div>
</template>
