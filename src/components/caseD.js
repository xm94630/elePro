import Vue from 'vue';

/* ==========================================================================
 *  第四种方法定义组件 inline-template
 *  这个方法 和caseA\B 一样都是依赖 Vue.component
 *  但是又像 caseC 那样没有render函数，那么他的模板是不是就没有地方写了
 *
 *  事实上，该方法的模板是是可以写在html中的，不过需要在组件中添加inline-template属性
 *  这样子组件标签内部的内容背会被识别为模板
 * ======================================================================== */

/*
 * caseD01 简单的开始
 */
Vue.component('myFish', {});

/*
 * caseD02 加强
 */
Vue.component('myFish2', {
  data(){
    return{
      lala:false
    }
  },
  methods:{
    alertBox(){
      this.lala = !this.lala
    }
  }
});