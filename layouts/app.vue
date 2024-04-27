<script setup></script>

<template>
  <VApp>
    <AppSideBar />
    <AppTopBar />

    <v-main class="!tw-pr-0 sm:!tw-pr-2">
      <v-container fluid class="!tw-p-5">
        <NuxtPage />
      </v-container>
    </v-main>
  </VApp>
</template>
