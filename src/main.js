import { createApp } from "vue";
import App from "./App.vue";
import router from "./utils/plugins/router";
import store from "./utils/plugins/store";
import { Quasar } from "quasar";
import quasarUserOptions from "./quasar-user-options";

createApp(App)
  .use(Quasar, quasarUserOptions)
  .use(store)
  .use(router)
  .mount("#app");
