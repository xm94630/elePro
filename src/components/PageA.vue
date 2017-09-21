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
