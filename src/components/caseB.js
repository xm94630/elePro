import Vue from 'vue';

/* ==========================================================================
 *  第二种方法定义组件 jsx
 *  jsx 其实也是写在 render function 中的
 *  但是和传统的用法不太一样
 * ======================================================================== */

/*
 * caseB01 最简单的jsx用法
 */
Vue.component('myTestB1', {
  render() {
    return <div class="myBoxStyle">我是jsx语法写的哦!</div>
  }
});

/*
 * caseB02 
 */
Vue.component('myTestB2', {

  data(){
    return {
        info:'我是变量哦'
    }
  },
  methods:{
    alertBox(){
        alert('我被点击了！')
    }
  },
  render() {
    return <div class="myBoxStyle" onClick={ this.alertBox }>
        <div>我是jsx语法写的哦! 点击我试试看吧</div>
        <div>{ this.info }</div>
    </div>
  }
});