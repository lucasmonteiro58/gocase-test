<script setup lang="ts"></script>

<template>
  <div class="flex gap-2">
    <div class="flex flex-col gap-2">
      <button class="bg-primary-500 text-white px-7 py-2 rounded-full">
        <Icon name="tabler:image-in-picture" size="30px" />
        <div class="text-xs">Fundo</div>
      </button>
      <button class="bg-primary-500 text-white px-4 py-2 rounded-full">
        <Icon name="tabler:text-recognition" size="30px" />
        <div class="text-xs">Texto</div>
      </button>
      <button class="bg-primary-500 text-white px-4 py-2 rounded-full">
        <Icon name="tabler:sticker" size="30px" />
        <div class="text-xs">Adesivos</div>
      </button>
    </div>
    <div class="h-[calc(100vh-200px)] border-4 border-primary-500 rounded-3xl">
      <img
        src="~/assets/iphone15.png"
        alt="iphone15"
        class="h-full rounded-3xl"
      />
    </div>
  </div>
</template>
