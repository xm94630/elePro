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


/* ==========================================================================
 *  case1 vue实例 
 * ======================================================================== */

Vue.use(ElementUI);
new Vue({ // eslint-disable-line
  el: '#app',
  render: h => h(App)
});


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
    /*data(){
      return{name:'我是程咬金'}
    },*/
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








/*var NestedChild = {
  template: `
  <div>the following scoped Slot was passed from the main Instance through the Child:
  <slot name="my-scoped-slot" message="Nested Message"></slot>
  </div>`,
  mounted() {
     console.log(this.$slots)
  }
}

var Child = {
  render(h) {
   const scopedSlots = this.$vnode.data.scopedSlots
   const table = h('nested-child', { scopedSlots: scopedSlots })
   return h('div',[table])
  },
  data() {
   return { childMessage: "Hello from the Child!"}
  },
  components: { NestedChild }
}

new Vue({
  el: '#app7',
  data: {
   message: 'Hello from the parent!'
  },
  components: {
   Child
  }
})*/












/*
//这里和上面两个例子不同的是，之前实例化的时候使用的是render函数
//这里是使用了 components，他们有什么区别呢？
var NestedChild = {
  template: `
  <div>the following scoped Slot was passed from the main Instance through the Child:
  <slot name="my-scoped-slot" message="Nested Message"></slot>
  </div>`,
  mounted() {
    console.log(this.$slots)
  }
}

var Child = {
  render(h) {
    const scopedSlots = this.$vnode.data.scopedSlots
    const table = h('nested-child', { scopedSlots: scopedSlots })
    return h('div',[table])
  },
  data() {
    return { childMessage: "Hello from the Child!"}
  },
  components: { NestedChild }
}

new Vue({
  el: '#app4',
  data: {
    message: 'Hello from the parent!'
  },
  components: {
    Child
  }
})


*/