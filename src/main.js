import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import '@/assets/tailwind.css'
import "@/assets/styles/index.css";
import "@/assets/icomoon/style.css";

const app = createApp(App)

app.use(router)
app.mount('#app')
