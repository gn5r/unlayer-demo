/// <reference types="vite/client" />

declare module "vue-email-editor" {
  import { defineComponent } from "vue";

  export const EmailEditor = defineComponent({
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

  declare module "@vue/runtime-core" {
    export interface GlobalComponents {
      EmailEditor: (typeof import("vue-email-editor"))["EmailEditor"];
    }
  }
}
