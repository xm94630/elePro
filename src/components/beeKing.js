import Vue from 'vue';

/* ==========================================================================
 *  slot 研究
 * ======================================================================== */

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



/* ==========================================================================
 * 子父通信 研究
 * 在这个案例中，bee-king-wzj组件的prop的参数，其实不是来自它直接的上级，而是上上级别的数据
 * ======================================================================== */
//案例6
Vue.component('bee-king6', {
  data(){
    return{
      gameName:'王者荣耀游戏'
    }
  },
  template: `<div class="bg2 PD10 MT5">
    <div>{{gameName}}</div>
    <slot></slot>
  </div>`,
});
Vue.component('bee-king-wzj', {
  props:['attack'],
  data(){
    return{
      kingName:'王昭君'
    }
  },
  template: `<div class="bg3">
    <div>{{kingName}}的攻击力是：{{attack}}</div>
    <slot></slot>
  </div>`,
});

//案例7
//这个案例中，我特意处理成：数据从顶级组件，上传给bee-king7，再由 bee-king7 传递给 bee-king-wzj 的过程
//这里也运用了作用域slot的作用。进展顺利。也算是掌握了作用域slot。
//但是这个模型其实挺复杂的，有没有简单的形式存在呢？
Vue.component('bee-king7', {
  props:['attackBig'],
  data(){
    return{
      gameName:'王者荣耀游戏',
      attack:this.attackBig,
    }
  },
  template: `<div class="bg2 PD10 MT5">
    <div>{{gameName}}</div>
    <slot name="xixi" :attack="attack"></slot>
  </div>`,
});
//另外我们看到：案例6 和 案例7 都服用了同一个组件 bee-king-wzj。
//对于bee-king-wzj组件而言，不管外层的组件结构如何变化，对已这个组件本身是不会有影响的。
//该组件只是简单的想要一个接受一个attack属性而已，外面如何提供，它也不用关心的。













