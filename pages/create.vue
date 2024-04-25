<script setup lang="ts"></script>

<template>
  <div class="tw-flex tw-gap-x-2 tw-gap-y-8 tw-flex-col sm:tw-flex-row">
    <SideActions />
    <div>
      <TopBar />
      <div class="tw-h-[calc(100vh-200px)]">
        <div class="tw-h-full sm:tw-px-4 tw-px-0 tw-w-fit tw-mx-auto">
          <img
            src="~/assets/images/iphone15.png"
            alt="iphone15"
            class="tw-h-full"
          />
        </div>
      </div>
    </div>
  </div>
</template>
