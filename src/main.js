import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import '@/assets/tailwind.css'
import "@/assets/styles/index.css";
import "@/assets/icomoon/style.css";
import definePlugins from "@/plugins/index.ts";

const app = createApp(App)


definePlugins(app);

app.use(router)
app.mount('#app')
