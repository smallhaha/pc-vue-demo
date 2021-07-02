import { createApp } from 'vue';
import App from './App.vue';
import ElementPlus from 'element-plus';
import '../theme/index.css';
import router from './router';
import utils from './util/index';
import * as  echarts from 'echarts';
import './assets/westeros.js';
import "echarts-gl";
import $ from 'jquery';
import'echarts/extension/bmap/bmap'//引入百度地图api，才会显示原始echarts的样式
// import 'echarts/map/js/china'//引入china.js，变成中国地图的大公鸡，会独立成一个新的地图覆盖在之前的map地图之上，若是不需要则可以不引入
// 按需引入vue-awesome图标
import Icon from 'vue-awesome/components/Icon';
import 'vue-awesome/icons/chart-bar.js';
import 'vue-awesome/icons/chart-area.js';
import 'vue-awesome/icons/chart-pie.js';
import 'vue-awesome/icons/chart-line.js';
import 'vue-awesome/icons/align-left.js';
import dataV from '@jiaminghi/data-view';

// 适配flex
import './common/flexible.js';
// 引入全局css
import './style/_variable.scss';
window.$ = $;
const app = createApp(App)
app.config.globalProperties.utils = utils
app.config.globalProperties.$echarts = echarts
app.config.globalProperties.icon = Icon
app.use(ElementPlus)
app.use(dataV)
app.use(router)
app.mount('#app')
// createApp(App).mount('#app')
