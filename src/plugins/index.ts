import router from "./router";
import vuetify from "./vuetify";
import { EmailEditor } from "vue-email-editor";

import type { App } from "vue";

export function registerPlugins(app: App) {
  app.use(router).use(vuetify);
  app.component("EmailEditor", EmailEditor);
}
