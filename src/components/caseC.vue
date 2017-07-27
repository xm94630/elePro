/* ==========================================================================
 *  第三种方法定义组件 单文件组件 （这种组件是写在一个后缀为 .vue 的文件中的，而不是像之前那样子在js中）
 *  这种单文件组件，适合下面这种的渲染方式，直接在 vue 实例中，对其进行整体的渲染
 *  还有就是，这种也适合在路由器中使用吧。
 *  另外在改组件内部还可以使用，之前定义好的，其他组件，比如这里的 myTestB1
 *  
 *  import Page from './components/caseC';
 *  new Vue({ 
 *    el: '#app',
 *    render: h => h(Page)
 *  });
 * ======================================================================== */

<template>
  <div>
    {{message}}
    <myTestB1></myTestB1>
  </div>
</template>

<script>
export default {
  name: 'myPage',
  data() {
    return {
      message: '我是单页面组件',
    };
  },
  methods: {
  }
};
</script>
