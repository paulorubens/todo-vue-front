import VueSweetalert2 from 'vue-sweetalert2'
import { createApp } from 'vue'
import router from './routes'
import App from './App.vue'

import 'nprogress/nprogress.css';
import 'sweetalert2/dist/sweetalert2.min.css';

createApp(App)
.use(router)
.use(VueSweetalert2)
.mount('#app')
