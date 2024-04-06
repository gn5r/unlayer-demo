<template>
  <v-app-bar color="primary" density="compact">
    <template #title>
      <slot>unlayer demo</slot>
    </template>
    <template #append>
      <v-icon
        :icon="current.dark ? 'mdi-brightness-4' : 'mdi-brightness-7'"
        @click="toggleTheme"
      />
    </template>
  </v-app-bar>
</template>

<script setup lang="ts">
import { useTheme } from "vuetify";

const { global, current } = useTheme();
const toggleTheme = () => {
  global.name.value = current.value.dark ? "light" : "dark";
};
</script>

<style lang="sass" scoped></style>
