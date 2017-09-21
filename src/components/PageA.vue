<template>
  <div>
      <div>我是路由控制的区域哦，我叫小A</div>

      <!-- 案例1 -->
      <!-- 这里的使用和 bee-king 组件定义的名字格式需要保持一致的 -->
      <bee-king>
        <p>我是蓝爸爸</p>
      </bee-king>

      <!-- 案例2 -->
      <bee-king2>
        <p>我是蓝爸爸</p>
      </bee-king2>

      <!-- 案例3 -->
      <bee-king3>
        <p slot="myCon">我是蓝爸爸</p>
        <p>我是红爸爸</p>
      </bee-king3>

      <!-- 案例4 -->
      <bee-king4>
        <!-- 这里的两部分都会被放到父级的slot中呢 -->
        <bee-king-llw>
          我是子组件的蓝爸爸 <!-- 这里的是会被放到子组件中的slot中呢 -->
        </bee-king-llw>
        <p>我是蓝爸爸</p>
      </bee-king4>

      <!-- 案例5 -->
      <bee-king5>
        <p>这部分文字将会看不到哦...</p>    <!-- 当没有指定name的时候，这个就会被忽略 -->
        <template scope="hero">         <!-- 当没有指定name的时候，就会被用在组件的未名slot处，这里会被用到1次 -->
          <div>{{hero.kingName}}</div>
        </template>
      </bee-king5>
      <!-- 案例5-2 -->
      <bee-king5>
        <p>被发现啦...</p>                    <!-- 当指定name的时候，就会被用在组件的未名slot处，这里会被用到1次 -->
        <template scope="hero" slot="xixi">  <!-- 当指定name的时候，就会被用在组件的对应名slot处，这里会被用到2次(被复用) -->
          <div>{{hero.kingName}}</div>
        </template>
      </bee-king5>

  </div>
</template>

<script>
export default {
  name: 'hello',
  data: function xxx() {
    return {
      msg: 'Welcome to Your Vue.js App'
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
