import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.config.globalProperties.$getpic = (name) => {
	return new URL(`../src/assets/${name}`, import.meta.url).href;
}

app.use(router)
app.mount('#app')
