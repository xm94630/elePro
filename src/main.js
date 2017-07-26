import Vue from 'vue';
import App from './app';
import './assets/custom.css';
import 'element-ui/lib/theme-default/index.css';
import ElementUI from 'element-ui';

// 引入自定义的组件，这样子就可以在html中嵌入组件
import './components/caseA';
import './components/caseB';




Vue.use(ElementUI);
new Vue({ // eslint-disable-line
  el: '#app',
  render: h => h(App)
});
