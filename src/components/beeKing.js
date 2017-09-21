import Vue from 'vue';

//案例1：这里是对 slot 的简单运用
Vue.component('bee-king', {
  template: '<div class="bg1"><div>王者荣耀组件1</div><slot>我是默认的内容</slot></div>',
});

//案例2：不知道为何，在jsx中slot不能被识别
Vue.component('bee-king2', {
  render() {
    return (<div class="bg2"><div>王者荣耀组件2</div><slot>我是默认的内容</slot></div>)
  }
});

