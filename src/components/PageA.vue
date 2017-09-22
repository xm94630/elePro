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

      <!-- 案例5-3 -->
      <!-- 重要：这里的kingName看上去是被包含在 bee-king5 之中，但是并不是 bee-king5 提供的！ -->
      <!-- 所以，上两个例子中的 template 的真正的作用，其实是把原有父级的作用域(bee-king5的上级)，交给了子级的作用域（bee-king5） -->
      <bee-king5>
        <div>{{kingName}}</div>
      </bee-king5>


      <!-- 案例6 -->
      <!-- 这里展示的从父级传数据到子级 -->
      <!-- 需要注意的是！这里的 myValue 其实最外层中的数据，并不是 bee-king-wzj 的父级 bee-king6！ -->
      <!-- 言外之意，就是这里的都是在最外层的作用域下控制。-->
      <bee-king6>
        <div @click="addAttack">欢迎来到王者荣耀(点击试试)</div>
        <bee-king-wzj :attack="myValue">
          欢迎来看望王昭君
        </bee-king-wzj>
      </bee-king6>


      <!-- 案例7 -->
      <bee-king7 :attackBig="attackBig">
        <div>欢迎来到王者荣耀</div>

        <template scope="hero" slot="xixi">
          <bee-king-wzj :attack="hero.attack">
            欢迎来看望王昭君
          </bee-king-wzj>
        </template>

      </bee-king7>



  </div>
</template>

<script>
export default {
  name: 'hello',
  methods:{
    addAttack(){
      this.myValue = this.myValue+1;
    },
  },
  data: function xxx() {
    return {
      kingName: '哟哟，你看到的文字，是来自父级的哦',
      myValue: 999,
      attackBig: 8888,
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
