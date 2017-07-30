<template>
  <div class="all">
    
    <el-row class="">

      <!--顶部导航-->
      <el-col :span="3" class="header1">
        <!--logo-->
        <!--<div class="logoBox">王者荣耀</div>-->
        <logoBox class="logoBox">王者荣耀</logoBox>
      </el-col>

      <el-col :span="18" class="header2">
        <el-menu theme="dark" :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
          <el-menu-item index="2-1"></el-menu-item>
        </el-menu>
      </el-col>

      <el-col :span="3" class="header3">
        <el-menu theme="dark" :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-setting"></i>
              <span>xm94630</span>
            </template>
            <el-menu-item index="3-1">设置</el-menu-item>
            <el-menu-item index="3-2">退出</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-col>

    </el-row>

    <!--导航以下内容区域-->
    <el-row :gutter="0" class="conBox">
      <el-col :span="3" class="menuBox">
        <!--左侧菜单-->
        <el-menu default-active="2" class="el-menu-vertical-demo collapsed" @open="handleOpen" @close="handleClose">
              <el-submenu index="1">
                <template slot="title"><i class="el-icon-message"></i>出装</template>
                <el-menu-item-group>
                  <template slot="title">打野</template>
                  <el-menu-item index="1-1">打野刀</el-menu-item>
                  <el-menu-item index="1-2">打野大刀</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group title="攻击">
                  <el-menu-item index="1-3">饮血刀</el-menu-item>
                  <el-menu-item index="1-3">十方俱灭</el-menu-item>
                </el-menu-item-group>
              </el-submenu>
              <el-menu-item index="2"><i class="el-icon-menu"></i>皮肤</el-menu-item>
              <el-menu-item index="3"><i class="el-icon-setting"></i>商城</el-menu-item>
            </el-menu>
      </el-col>

      <el-col :span="21" class="mainBox">
        <div class="grid-content ">
          
          <titleBar :level=1><span>我就是一个标题组件，怎么样</span><h6>我是副标题，不知道会不会显示</h6></titleBar>
          
          <anchored-heading :level="2">Hi,xm-94630-</anchored-heading>

          <inputBox></inputBox>


          <myTestA class="myBoxStyle">
            <div>我是组件中的子级内容，最后会被原封不动地渲染呢</div>
          </myTestA>

          <myTestB class="myBoxStyle">
            <div slot="name1">我是组件中的子级内容1，最后会被原封不动地渲染呢</div>
            <div slot="name2">我是组件中的子级内容2，最后会被原封不动地渲染呢</div>
          </myTestB>

          <myTestC class="myBoxStyle">
            <template scope="xixi">  
                <div>{{xixi.text}}</div>  
            </template>
          </myTestC>

          <myTestD class="myBoxStyle">
            <p slot="xxx">我是组件中的子级内容，最后会被原封不动地渲染呢</p>
            <template slot="lala" scope="xixi">
              <p>子级模板的子级节点 固有内容</p>
              <p>{{ xixi.vvv }}</p>
            </template>
          </myTestD>

          <myTestE class="myBoxStyle">
            <template slot="name1" scope="xixi">  
                <span>{{xixi.text}}</span>  
            </template> 
            <template slot="name2" scope="xixi">  
                <div>{{xixi.text}}</div>  
            </template>  
          </myTestE>


          <myTestF></myTestF>

          <myTestG></myTestG>

          <myTestB1></myTestB1>
          
          <myTestB2></myTestB2>
          
          <myFish inline-template>
            <div class="myBoxStyle">你一定想不到的是，我是 inline-template 模板中的内容</div> 
          </myFish>

          <myFish2 inline-template>
            <div class="myBoxStyle" @click="alertBox">
              <div>你一定想不到的是，我是 inline-template 模板中的内容</div> 
              <span>{{lala}}</span>
            </div> 
          </myFish2>

          <myDog class="myBoxStyle2"></myDog>

          <myDog2 class="myBoxStyle2"></myDog2>

          <myDog3 class="myBoxStyle2"></myDog3>

          <!-- <myDog4 class="myBoxStyle2"></myDog4> -->
          
















          <el-button @click="visible = true">按钮</el-button>
          <el-button type="primary" icon="search">搜索</el-button>
          <el-button type="success" icon="edit" size="small">编辑</el-button>
          <el-button type="success" :loading=true >我的加载</el-button>
          <el-button-group>
            <el-button type="primary" icon="edit" size="small">左按钮</el-button>
            <el-button type="primary" icon="edit" size="small">右按钮</el-button>
          </el-button-group>

          <el-dialog v-model="visible" title="Hello world">
              <p>欢迎使用 Element</p>
          </el-dialog>
        </div>
      </el-col>
    </el-row>

  </div>
</template>

<style>
  .logoBox{
    background-color: #324157;
    height:60px;
    line-height:60px;
    color:#fff;
    font-size:20px;
    text-align:center;
  }
  .el-menu{
    border-radius: 0px;
  }
  .el-row {
    &:last-child {
      margin-bottom: 0;
    }
    font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
  }
  .el-col {
    border-radius: 4px;
  }
  .grid-content {
    border-radius: 4px;
    padding:15px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
  .bg111{
    background:#EFF2F7;
  }
  html {
      height: 100%;
  }
  .all{
    height: 100%;
  }
  .conBox{
    position:absolute;
    top:60px;
    bottom:0px;
    width:100%;
    overflow: hidden;
  }
  .conBox .menuBox{
    background:#eef1f6;
    height:100%;
  }
  .conBox .mainBox{E
    background:#fff;
    height:100%;
    overflow: auto;
  }
</style>



<script>
export default {
  name: 'app',
  data: function() {
    return {
      visible: false,
      activeIndex: '1',
      activeIndex2: '1',
      message: 'lalal',
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    handleOpen() {
      console.log('打开');
    },
    handleClose() {
      console.log('关闭');
    }
  }
};
</script>
