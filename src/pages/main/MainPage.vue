<template>
  <main-layout>
    <template #content>
      <h1>Main Page</h1>
    </template>
  </main-layout>
</template>

<script>
import MainLayout from "@/components/MainLayout";

export default {
  name: "MainPage",
  components: { MainLayout }
}
</script>

<style lang="scss">
  @import "@/assets/styles/pages/main-page";
</style>