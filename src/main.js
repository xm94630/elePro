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
import './components/caseE';
import './components/caseF';
import './components/beeKing';


//这样子就可以使用 ElementUI 中所包含的众多组件。
//Vue.use内部的实现是不是可以人认为 import 了多个组件（从表现上来看是这样子的）。
Vue.use(ElementUI);

/* ==========================================================================
 *  case1 vue实例
 * ======================================================================== */

new Vue({ // eslint-disable-line
  el: '#app',
  render: h => h(App)
});

//这个和上面这个是等效的
// new Vue({
//   el: '#app',
//   template: '<App/>',
//   components: { App }
// });


/* ==========================================================================
 *  case2 vue实例
 * ======================================================================== */

//允许在页面中使用多个vue实例，也不会相互影响的
//这里的 App、Page 都是“单文件的组件”，这类的组件适合在路由器中使用的~~
//因为一个路由正好对应了一个页面
//不过下面的这个组件，你在UI上看不到，是因为被上面的组件给挡住了，这个只是样式的上的问题~
new Vue({
  el: '#app2',
  render: h => h(Page)
});



/* ==========================================================================
 *  case3 vue实例
 *  使用不同于 Vue.component 的组件定义形式，以及使用组件
 * ======================================================================== */

//这里和上面两个例子不同的是，之前实例化的时候使用的是render函数
//这里是使用了 components，他们有什么区别呢？
//
//pig 组件
//先看看这个，这也是一种组件的定义的形式，它是一个对象！
//pig或者Pig都是可以的
var pig = {
  template: `<div>
    小猪猪组件
  </div>`,
  //如果把下面的myDog3写入，也是可以渲染的，因为 myDog3 自定义组件是扩展到 Vue 这个大对象上了
  /*<myDog3 class="myBoxStyle2"></myDog3>*/
}

new Vue({
  el: '#app3',
  //为什么这里会使用 pig 这个呢，是因为我们在 render 函数中 需要动态创建这个组件。
  //言外之意就是，自定义组件（如这里的 pig ）要能够被使用，有两种方式：
  //一种呢，是通过 Vue.component 这样子，在整个Vue大对象上进行扩展。
  //另一种，就是和这里的类似，是在vue实例生成的是时候，把自定义组件传入。
  //后者的自定义组件的形式也有别于前者，这里是一个对象。
  components: {
    pig
  }
})

//注意，上面的这种对象的形式定义的组件，其实是等价于下面的这中形式的~
//这个我之前很多练习中已经实践过了~
/*Vue.component('pig', {
  template: '<div>小猪猪组件2</div>',
});*/




/* ==========================================================================
 * case4 vue实例
 * 本例子和上例子是一样的
 * 只是这里，组件定义的时候不在使用 template ，而是使用了 render 函数
 * ======================================================================== */
var pig2={
  render(h){
    return h(
      'div',
      this.$slots.default,
    )
  },
}
new Vue({
  el:'#app4',
  components:{
    pig2
  },
})


/* ==========================================================================
 * case5 vue实例
 * 在上例的基础上，动态创建了一个元素节点
 * ======================================================================== */
var pig3={
  render(h){
    var newEle = h('div',{
      domProps:{
        innerHTML:'我是动态创建的哦'
      }
    });
    return h('div',[newEle,this.$slots.default]);
  },
}
new Vue({
  el:'#app5',
  components:{
    pig3
  },
})


/* ==========================================================================
 * case6 vue实例 数据在哪里提供？
 * 这个例子中最重要的是，到底是在哪里去提供渲染的数据呢？
 * 是在pig组件中，还是vue实例过程中呢？
 * 本例子是在vue中。但是{{name}}明明被包含在组件中，为什么不在pig组件提供呢？
 *
 * 其实除非是组件的内部template 中的变量渲染，是由组件来提供数据，
 * 其他情况下，则是由vue实例来提供数据的。这里就是这种情况~~~
 *
 * 另外在.vue格式的单页组件，非组件的数据是在 export default {} 对象中定义的
 * ======================================================================== */
 var pig4={
    data(){
      //这个数据在这里没有任何意义
      return{name:'我是程咬金'}
    },
    render(h){
      return h('div',[this.$slots.default]);
    },
 }
 new Vue({
    el:'#app6',
    // name 数据在这里提供。
    // 另外这里的data是对象。而组件中提供数据是（但会data对象的）函数
    data:{
      name:'我是兰陵王!'
    },
    components:{
      pig4
    },
 })


/* ==========================================================================
 * case7
 * ======================================================================== */

//这里对应的模板是
//<template slot="lala" scope="xixi">
//    <div>{{xixi.name}}</div>
//</template>
//这里 <template scope="xixi"> 的写法，是“作用域scope模板”用法。在导图中就有这部分的知识
//slot="lala" 会索引到 命名为“lala”的slot中
//（另外，有命名的slot不在 this.$slots.default之中 ）
// (恰切的说，是在 this.$scopedSlots.lala 中)
// 当然这里看到的 this.$slots.default、this.$scopedSlots.lala 似乎有点不好理解。其实这个是和 render 函数有关的。
// 如果采用的 template 这种方法的时候，就直观多了呢。那么 lala 的slot 因该是这么写的：
// <slot name=“lala”></slot>
// 参见案例9

 var pig5={
    data(){
      //相比case6,这里就有用了
      //这里的数据可以提供给template中
      return{name:'我是程咬金'}
    },
    render(h){
      return h('div',[
        this.$slots.default,
        this.$scopedSlots.lala({name:this.name}),
      ]);
    },
 }
 new Vue({
    el:'#app7',
    data:{
      name:'我是兰陵王'
    },
    components:{
      pig5
    },
 })



 /* ==========================================================================
 * case8 复杂的组件渲染
 * 这里不仅有组件，而且组件中又动态创建了组件，还混合有 template、slot。非常的有趣
 * 学习这个例子之后，可以对一般的组件构建都打下比较好的基础！
 * ======================================================================== */
var Sunzi = {
  template: `
  <div class="myBoxStyle2">
    <span>和孙子同行</span>
    <slot name="xxx" message="孙子~~"></slot>
  </div>`,
}

var Child = {
  data() {
    //这个数据是没地方用呀~
    return { childMessage: "陈咬金"}
  },
  render(h) {
    //这个值后来被用到了，非常神奇，是个函数
    //看来我还需要先了解下，什么是 this.$vnode
    //而且最后取值是哪个 slot中的 message 中的值，其中的关系是怎么样的呢？？

    //我大概缕了一下，
    //首先，这里的代码是在Child中，所以这里的this就是Child组件
    //this.$vnode.data.scopedSlots 应该指向的是，这个组件中所出现的 template 模板中的“内容”
    //然后创建动态元素Sunzi之后，又把该“内容”作为 Sunzi 模板中的 slot 的“内容”
    //template 模板中设置的作用域是”props“,也就是指 Sunzi 中slot组件的属性对象
    //所以 props.message 就是这里slot中 message 的值

    const scopedSlots = this.$vnode.data.scopedSlots  // 这里是来捕获“节点”中的那个“作用域slot”
    //const scopedSlots2= this.$scopedSlots.xxx       // 哦，对了，这个是采用的上例子中的写法，发现等效的用法~~

    const ele1 = this.$slots.default
    const ele2 = h('Sunzi', { scopedSlots: scopedSlots }) // 这里又动态创建了一个自定义的子集元素
    return h('div',[ele1,ele2])
  },
  components: { Sunzi }
}


new Vue({
  el: '#app8',
  data: {
   name: '兰陵王'
  },
  components: {
   Child
  }
})


/* ==========================================================================
 * case9 这是对case7的变化
 * ======================================================================== */

 var pig6={
    data(){
      return{name:'我是程咬金'}
    },

    //这里的这种写法，和下面的这种是一样的
    template:
    `<div>`+
        `<slot></slot>`+
        `<slot name="lala" :myName="name">23</slot>`+
    `</div>`
    ,

    // render(h){
    //     return h('div',[
    //       this.$slots.default,
    //       this.$scopedSlots.lala({name:this.name}),
    //     ]);
    //   },
 }
 new Vue({
    el:'#app9',
    data:{
      name:'我是兰陵王'
    },
    components:{
      pig6
    },
 })

