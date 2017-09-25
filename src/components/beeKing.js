import Vue from 'vue';

/* ==========================================================================
 * slot 研究
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
 * 这里两类列子：
 * 1）props down：从父级通过 props 传递数据到子级
 * 2）events up： 从子级通过 自定义事件 传递数据到父级
 * ======================================================================== */

 //案例6 父->子 props
//在这个案例中，bee-king-wzj组件的prop的参数，其实不是来自它直接的上级，而是上上级别的数据
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

//案例7  父->子 props
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

//补充，其实对于案例7，我最初的目的是想做一个，从bee-king7组件直接传数据给bee-king-wzj组件的方法，其实我现在发现，这样子的想法是错误的。
//比如在ele组件中，其实 el-menu-item 的数据也不是 从el-menu、再从el-col获取的：
//<el-col :span="18" class="header2">
//  <el-menu theme="dark" :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
//    <el-menu-item index="2-1"></el-menu-item>
//  </el-menu>
//</el-col>
//其实，每个（嵌套的）组件，只需要直接和最上层的组件索取数据就可以了。无需要和周围的组件索要数据
//另外，其实很多配置属性，都是静态设置好了就行，这里也就 activeIndex 、 handleSelect 两个方法来自于外部的供应。


//案例7 子->父亲
//bee-king8组件内部发送数据给外层组件，通过的是“自定义事件”，比如这里的 customEvent。
Vue.component('bee-king8', {
  methods:{
    myClick(){
      // emit 这样子的模式其实非常常见，就是“发布订阅模式”的一种。
      // 说简单点，这里其实就是在调用函数的一个过程。
      // 这里的参数是可以多个传递的。
      this.$emit('customEvent', 100,200,300);
    },
  },
  data(){
    return{
      gameName:'王者荣耀游戏（点我看log，来自子组件的事件（数据））',
    }
  },
  template: `<div class="bg2 PD10 MT5" @click="myClick">
    <div>{{gameName}}</div>
    <slot></slot>
  </div>`,
});



/* ==========================================================================
 * 数据双向绑定
 * ======================================================================== */

//案例8 v-model
//这里的双向绑定，其实发生在一个组件内部的（之后会探讨是否存在组件之外的）
//其实就是组件内，input的值和data值进行了双向的绑定

//这里的 <input v-model="something"> 双向绑定是在 “bee-king9” 组件内完成的，所以input的数据对应的是“bee-king9” 组件内的data
//如果   <input v-model="something"> 双向绑定在 “bee-king9” 组件外层完成，对应的数据在外层组件的data中
//所以input的值仅仅和自己所在的组件有关系（就是我上面是说的饿，发生在一个组件中）。

Vue.component('bee-king9', {
  methods:{
    myclick:function(){
      alert(this.something);
    }
  },
  data(){
    return{
      something:'默认值哦哦'
    }
  },
  template: `<div class="bg2 PD10 MT5">
    啦啦啦
    <input v-model="something">
    <button @click="myclick">点击</button>
  </div>`,
});





