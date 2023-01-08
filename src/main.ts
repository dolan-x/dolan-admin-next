import { createApp } from "vue";

import App from "./App.vue";
import { registerPlugins } from "@/plugins";

import "@unocss/reset/tailwind.css";
import "uno.css";

const app = createApp(App);

registerPlugins(app);

app.mount("#app");
