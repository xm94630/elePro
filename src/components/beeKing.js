import Vue from 'vue';

/* ==========================================================================
 * 一、slot 研究
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
 * 二、子父通信 研究
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
 * 三、数据双向绑定
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


//案例10 v-model的替代方案
//即手动实现 v-model

//这是一个错误的展示
/* Vue.component('bee-king10', {
  props:['value'],  //注意这里
  methods:{
    myclick:function(){
      alert(this.something);
    }
  },
  data(){
    return{
      something:'默认值哈哈'
    }
  },
  template: `<div class="bg2 PD10 MT5">
    啦啦啦
    <input :value="something" @click="something = value" > //注意这里，这里企图使用props，其实犯了大错，props一定是来自于组件上的，而不是input上的value，其而也不能使用 click , 而是input事件
    <button @click="myclick">点击</button>
  </div>`,
}); */

Vue.component('bee-king10', {
  methods:{
    myclick:function(){
      alert(this.something);
    }
  },
  data(){
    return{
      something:'默认值哈哈'
    }
  },
  template: `<div class="bg2 PD10 MT5">
    啦啦啦
    <input :value="something" @input="something = $event.target.value" >
    <button @click="myclick">点击</button>
  </div>`,
});
//注意这里的 @input="something = $event.target.value"
//为什么引号中的是直接是表达式，而案例12中  @update:kingName=" (a) => something = a" 则是函数的形式
//那么到底是 表达式，还是函数呢
//其实这个是受条件限制的~ 比如这里的，浏览器事件就是直接用表达式。而自定义事件则是函数~


//案例11 .sync
//跨组件之间的双向绑定
Vue.component('bee-king11', {
  data(){
    return{
      something:'鲁班七号'
    }
  },
  template: `<div class="bg2 PD10 MT5">
    王者荣耀
    <div>父级的数据：{{something}}</div>
    <bee-king-lbqh :kingName.sync="something"></bee-king-lbqh>
  </div>`,
});

Vue.component('bee-king-lbqh', {
  props:['kingName'],
  data(){
    return{
      kingName2:'',
    }
  },
  methods:{
    myclick:function(){
      this.kingName2 =this.kingName+"副本";
      //注意，这里是一个非常核心的地方
      //其实说白了，.sync 双向绑定的实现机制就是 props down、events up
      this.$emit('update:kingName', this.kingName2);
    }
  },
  template: `<div class="bg2 PD10 MT5">
    来自父级的数据：{{kingName}}
    <button @click="myclick">点击</button>
  </div>`,
});


//案例12 .sync 的手动实现
//跨组件之间的双向绑定
Vue.component('bee-king12', {
  methods:{
    myclick:function(){
      this.something =this.something;
    }
  },
  data(){
    return{
      something:'百里屠苏'
    }
  },
  template: `<div class="bg2 PD10 MT5">
    王者荣耀
    <div>父级的数据：{{something}}</div>
    <bee-king-lbqh :kingName="something" @update:kingName=" (a) => something = a" ></bee-king-lbqh>
  </div>`,
  //注意，上面的 @update:kingName 这个部分是非常核心的！
  //为什么这里是这样子用的呢？可以用下面的方法替换吗？（比如在案例10中就有：@input="something = $event.target.value" 这样子的用法）
  //答案：不行的，为什么呢？其实原因就在于，input事件是浏览器的默认事件，所以 $event 中保存浏览器默认事件中的一些数据
  //但是“update:kingName”是，其实是自定义事件（虽然也是vue提供的，但是依然有别于浏览器默认事件）
  //我们知道这类自定义的实现其实就是一个发布订阅模式！所以上面其实就是对事件响应的处理（" (a) => something = a"）。

  /* template: `<div class="bg2 PD10 MT5">
    王者荣耀
    <div>父级的数据：{{something}}</div>
    <bee-king-lbqh :kingName="something" @update:kingName=" something = $event.target.value " ></bee-king-lbqh>
  </div>`, */
});

Vue.component('bee-king-blts', {
  props:['kingName'],
  data(){
    return{
      kingName2:'',
    }
  },
  methods:{
    myclick:function(){
      this.kingName2 =this.kingName+"副本";
      this.$emit('update:kingName', this.kingName2);
    }
  },
  template: `<div class="bg2 PD10 MT5">
    来自父级的数据：{{kingName}}
    <button @click="myclick">点击</button>
  </div>`,
});




/* ==========================================================================
 * 四、关于组件的嵌套的认识
 * ======================================================================== */

 /*
<father><son></son></father>
<father></father>
这里第一种是我之前理解的组件的嵌套。其实这个一个非常重要的偏见！！！ 在实际的练习中，我明显的感觉到，第一种的写法其实并不是真正意义上的嵌套。
他们只是在html的结构上变现出嵌套的形式，其实在数据的提供上，完全都受外一层的控制的。
如果把 <son></son> 在放在 <father></father>，那就是真正意义上的组件嵌套。
这个对于初学的人容易搞错的。我也是刚刚明白这个道理。
*/


/* ==========================================================================
 * 五、关于vue格式的组件和全局组件的区别
 * ======================================================================== */

/*
.vue 格式的组件的用途：用在路由中
vue.component 定义的组件的用途： 全局组件
在之后，我需要研究下，他们之间的区别。我目前知道的一点是：

export default {
  name: 'privatemanage',
  components: {
    'v-dialogue': vdialog
  },
  ...
}
对于前者而言，它自身依赖的组件，需要在 components 属性中配置。而后者就不用，只需要引入定义的文件就可以了。
我先暂时把这部分内容记下来。等我下次有时间的时候再实例说明。
*/
/*
this.$refs  糗事起到引用的作用
this.$message可能是ele 封装的弹框的一个
就好比 this.$router 是路由对vue的扩展，并不是vue 原生就有的
 */

//<el-transfer v-model="value1" :data="data"></el-transfer>
//这里不是input 也使用了 v-model。。。






