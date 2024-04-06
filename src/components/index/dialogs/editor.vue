<template>
  <v-dialog
    v-model="internalValue"
    height="90%"
    max-height="90%"
    persistent
    scrollable
  >
    <v-card height="100%">
      <v-card-title class="pa-0">
        <v-toolbar color="primary" density="compact" flat>
          <template #title>Email Build</template>
          <template #append>
            <v-icon icon="mdi-close" @click="internalValue = false" />
          </template>
        </v-toolbar>
      </v-card-title>
      <v-card-text>
        <email-editor
          ref="editor"
          editorId="1"
          style="height: 100%"
          @load="loaded"
        />
      </v-card-text>
      <v-divider />
      <v-card-actions>
        <v-btn color="primary" @click="saveDesign">一時保存</v-btn>
        <v-btn color="primary" @click="exportHtml">出力</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup lang="ts">
import { ref, shallowRef, computed, watch } from "vue";

const props = defineProps({
  modelValue: Boolean,
  html: { type: String, required: false },
  design: { type: Object, required: false },
});
const emit = defineEmits(["update:modelValue", "update:html", "update:design"]);
const isActive = ref(props.modelValue);

const editor = shallowRef();

const internalValue = computed({
  set: (val: boolean) => {
    isActive.value = val;
    emit("update:modelValue", val);
  },
  get: () => isActive.value,
});

watch(
  () => props.modelValue,
  (val) => (isActive.value = val)
);

function loaded() {
  if (editor.value && props.design) {
    console.debug("loadDesign");
    console.debug("props.design:", { ...props.design });
    editor.value.loadDesign({ ...props.design });
  }
}

function saveDesign() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  editor.value.editor.saveDesign((design: any) => {
    console.debug("design:", design);
    internalValue.value = false;
    emit("update:design", design);
  });
}

function exportHtml() {
  console.debug("editor:", editor.value);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  editor.value.editor.exportHtml((data: any) => {
    console.debug("exportHtml:", data);
    internalValue.value = false;
    emit("update:html", data.html);
    emit("update:design", data.design);
  });
}
</script>

<style lang="sass" scoped></style>
