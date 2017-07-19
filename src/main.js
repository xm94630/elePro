import Vue from 'vue';
import App from './app';
import 'element-ui/lib/theme-default/index.css';
import ElementUI from 'element-ui';

Vue.use(ElementUI);
new Vue({ // eslint-disable-line
  el: '#app',
  render: h => h(App)
});
