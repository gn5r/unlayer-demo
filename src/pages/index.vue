<template>
  <router-view v-model="form" />
</template>

<script setup lang="ts">
import { ref } from "vue";

export type Form = {
  subject?: string;
  body?: string;
  design?: object;
};

const form = ref<Form>({ subject: "", body: "", design: undefined });
</script>

<style lang="sass" scoped></style>
