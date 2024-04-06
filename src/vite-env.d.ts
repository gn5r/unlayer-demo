/// <reference types="vite/client" />

import { defineComponent } from "vue";

const EditorEmail = defineComponent({
  props: {
    editorId: String,
    options: Object,
    projectId: Number,
    tools: Object,
    appearance: Object,
    locale: String,
    minHeight: {
      type: String,
      default: "500px",
    },
  },
  emits: ["load", "ready"],
});

declare module "vue-email-editor" {
  export const EmailEditor: typeof EmailEditor;
}

declare module "vue" {
  export interface GlobalComponents {
    EmailEditor: typeof EditorEmail;
  }
}
