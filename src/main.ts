import { createApp } from 'vue';
import App from './App.vue';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';

import { installPlugin } from './plugins';

const app = createApp(App);

installPlugin(app).catch(() => {});

app.use(Antd);
app.mount('#app');
