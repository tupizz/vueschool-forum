import { createApp } from "vue";

import router from "./router";
import App from "./App.vue";

// defining app instance with their providers
const forumApp = createApp(App);
forumApp.use(router);
forumApp.mount("#app");
