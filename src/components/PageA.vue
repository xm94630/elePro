<template>
  <div>
      <div>我是路由控制的区域哦，我叫小A</div>

      <!-- 这里的使用和 bee-king 组件定义的名字格式需要保持一致的 -->
      <bee-king></bee-king>
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
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
