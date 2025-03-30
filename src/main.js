import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import BaseIcon from './BaseIcon.vue'

const app = createApp(App)
app.component('BaseIcon', BaseIcon) // 投入先のcomponentにimport文が記載されなくなるので保守性が悪くなるので頻出のものだけglobal登録する
app.mount('#app')
