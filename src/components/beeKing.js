import Vue from 'vue';

//案例1：这里是对 slot 的简单运用
Vue.component('bee-king', {
  //使用``换行妥妥的
  template: `<div class="bg1">
    <div>王者荣耀组件1</div>
    <slot>我是默认的内容</slot>
  </div>`,
});

//案例2：不知道为何，在jsx中slot不能被识别
Vue.component('bee-king2', {
  render() {
    //jsx中换行很自由的呢
    return <div class="bg2">
      <div>王者荣耀组件2</div>
      <slot>我是默认的内容</slot>
    </div>
  }
});

//案例3：slot使用名字的时候，就有了针对性呢~
Vue.component('bee-king3', {
  template:
  `<div class="bg3">
    <slot>我是默认的内容1</slot>
    <div>王者荣耀组件3</div>
    <slot name='myCon'>我是默认的内容2</slot>
  </div>`,
});
