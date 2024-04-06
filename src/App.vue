<template>
  <router-view />
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";

const { getRoutes } = useRouter();
const routes = getRoutes();
console.debug("routes:", routes);
</script>

<style lang="sass" scoped></style>
