import Vue from 'vue';
import App from './app';
import './assets/custom.css';
import 'element-ui/lib/theme-default/index.css';
import ElementUI from 'element-ui';

// 引入自定义的组件，这样子就可以在html中嵌入组件
import './components/caseA';
import './components/caseB';
import Page from './components/caseC';
import './components/caseD';


Vue.use(ElementUI);
new Vue({ // eslint-disable-line
  el: '#app',
  render: h => h(App)
});

//允许在页面中使用多个vue实例，也不会相互影响的
//这里的 App、Page 都是“单文件的组件”，这类的组件适合在路由器中使用的~~
//因为一个路由正好对应了一个页面
//不过下面的这个组件，你在UI上看不到，是因为被上面的组件给挡住了，这个只是样式的上的问题~
new Vue({ 
  el: '#app2',
  render: h => h(Page)
});


