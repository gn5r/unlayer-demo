<template>
  <v-app>
    <app-bar />
    <v-main>
      <router-view />
    </v-main>
    <app-footer />
  </v-app>
</template>

<script setup lang="ts">
import AppBar from "@/components/app/Bar.vue";
import AppFooter from "@/components/app/Footer.vue";
</script>

<style lang="sass" scoped></style>
