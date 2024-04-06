<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" lg="10">
        <v-card title="登録・変更確認">
          <v-card-text>
            <v-row dense>
              <v-col cols="1">
                <v-list-subheader>件名</v-list-subheader>
              </v-col>
              <v-col cols="11">
                <v-text-field :model-value="modelValue.subject" disabled />
              </v-col>
              <v-col cols="1">
                <v-list-subheader>本文</v-list-subheader>
              </v-col>
              <v-col cols="11">
                <div v-html="modelValue.body" />
              </v-col>
            </v-row>
            <v-row dense>
              <v-col cols="auto">
                <v-btn color="primary">保存</v-btn>
              </v-col>
              <v-col cols="auto">
                <v-btn color="primary" @click="back">戻る</v-btn>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";

import type { Form } from "@/pages/index.vue";

defineProps({
  modelValue: { type: Object as () => Form, required: true },
});

const router = useRouter();

function back() {
  router.back();
}
</script>

<style lang="sass" scoped></style>
