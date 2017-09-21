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

//案例4：这里使用了组件的嵌套，而且子组件中还有slot
Vue.component('bee-king-llw', {
  template: `<div class="bg4">
    <p>我是兰陵王</p>
    <slot>我是默认的内容2</slot>
  </div>`,
});
Vue.component('bee-king4', {
  template: `<div class="bg5 PD10">
    <div>王者荣耀组件4</div>
    <slot>我是默认的内容1</slot>
  </div>`,
});


//案例5：作用域slot
Vue.component('bee-king5', {
  data(){
    return{
      //子组件提供数据的方式也有两种，这里是一种，还有是直接提供 "小月月222"
      name1:'小月月111'
    }
  },
  template: `<div class="bg1 PD10 MT5">
    <div>王者荣耀组件5</div>
    <slot kingName="小明明">
      <div>我是默认的内容1</div>
    </slot>
    <slot name="xixi" :kingName=name1 >
      <div>我是默认的内容3</div>
    </slot>
    <slot name="xixi" kingName="小月月222">
      <div>我是默认的内容3</div>
    </slot>
  </div>`,
});















