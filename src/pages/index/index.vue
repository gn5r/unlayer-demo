<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" lg="6">
        <v-card title="登録・変更">
          <v-card-text>
            <v-form>
              <v-row dense>
                <v-col cols="12">
                  <v-text-field v-model="internalValue.subject" label="件名" />
                </v-col>
                <v-col cols="12">
                  <v-textarea
                    v-model="internalValue.body"
                    label="本文"
                    rows="20"
                  >
                    <template #prepend-inner>
                      <v-tooltip location="bottom" text="Email Builderを開く">
                        <template #activator="{ props }">
                          <v-icon
                            v-bind="props"
                            icon="mdi-email-edit"
                            @click="isActive = true"
                          />
                        </template>
                      </v-tooltip>
                    </template>
                  </v-textarea>
                </v-col>
              </v-row>
              <v-row dense>
                <v-col cols="auto">
                  <v-btn color="primary" @click="save">確認画面へ</v-btn>
                </v-col>
              </v-row>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <editor
      v-model="isActive"
      v-model:html="internalValue.body"
      v-model:design="internalValue.design"
    />
  </v-container>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { useRouter } from "vue-router";

import type { Form } from "@/pages/index.vue";

import Editor from "@/components/index/dialogs/editor.vue";

const props = defineProps({
  modelValue: { type: Object as () => Form, required: true },
});
const emit = defineEmits(["update:modelValue"]);
const lazyValue = ref<Form>(props.modelValue);
const internalValue = computed({
  set: (val: Form) => {
    lazyValue.value = val;
    emit("update:modelValue", val);
  },
  get: () => lazyValue.value,
});

const isActive = ref(false);

const router = useRouter();

function save() {
  router.push({ path: "/confirm" });
}
</script>

<style lang="sass" scoped></style>
