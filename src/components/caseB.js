import Vue from 'vue';

/* ==========================================================================
 *  第二种方法定义组件 jsx
 *  jsx 其实也是写在 render function 中的，而且也是需要引入vue,利用Vue.component
 *  其实是直接对vue进行了扩脏，就像对jquery进行扩展是一样的道理。所以在使用的时候用直接引入该文件就好了。
 *  但是和方法1不太一样，它需要编译器的参与
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