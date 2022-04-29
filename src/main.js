import { createApp } from 'vue'
import App from './App.vue'
import router from './routes'
import VueApexCharts from "vue3-apexcharts";

import Iconly from "vue-iconly";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

const app = createApp(App);

app.use(VueApexCharts);
app.use(router).mount('#app')
