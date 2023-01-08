import type { App } from "vue";
import { pinia } from "./pinia";
import { router } from "./router";
import { vuetify } from "./vuetify";
import { i18n } from "./i18n";
import { initNprogress } from "./npgrogress";

export function registerPlugins(app: App) {
  initNprogress(router);
  app
    .use(vuetify)
    .use(i18n)
    .use(router)
    .use(pinia);
}
