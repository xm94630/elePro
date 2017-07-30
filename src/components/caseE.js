import Vue from 'vue';

/* ==========================================================================
 *  第五种方法定义组件 X-Templates
 *  这种方式和第四中方法是非常类似的，只是模板直接写在  template 参数中。
 * ======================================================================== */

/*
 * caseE01 简单的开始
 */
Vue.component('myDog', {
  template: '<div>我是直接在 template 中写的字符串啦，需要cooking配置的alias中添加一项哦</div>',
});

/*
 * caseE02 上例变化
 */
 Vue.component('myDog2', {
   template: '<div @click="alertBox">我是直接在 template 中写的字符串啦，需要cooking配置的alias中添加一项哦(点击我试试)</div>',
   methods:{
    alertBox(){
      alert('被点了！')
    }
   }
 });

/*
* caseE03 这个例子中， template中是一个id索引字串串
* 其实和上面2例子是类似的
*/
Vue.component('myDog3', {
  template: '#haha',
  methods:{
   alertBox(){
    alert('哎哟哟，被点了！')
   }
  }
});




