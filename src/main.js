import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import { createPinia } from "pinia";
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import router from "./router";

const app = createApp(App);
const pinia = createPinia();
pinia.use(piniaPluginPersistedstate)
app.use(app);
app.use(router);
app.use(pinia);
app.use(PrimeVue);
app.mount("#app");
