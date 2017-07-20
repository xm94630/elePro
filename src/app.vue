<template>
  <div>
    
    <el-row class="">

      <el-col :span="4" class="header1">
        <!--logo-->
        <div class="logoBox">王者荣耀</div>
      </el-col>

      <el-col :span="20" class="header2">

        <!--菜单-->
        <el-menu theme="dark" :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
          <el-menu-item index="1">商城</el-menu-item>
          <el-menu-item index="2"><a href="#" target="_blank">装备推荐</a></el-menu-item>
          <el-submenu index="3">
            <template slot="title">我拥有的英雄</template>
            <el-menu-item index="3-1">兰陵王</el-menu-item>
            <el-menu-item index="3-2">程咬金</el-menu-item>
            <el-menu-item index="3-3">李白</el-menu-item>
          </el-submenu>
        </el-menu>

      </el-col>
    </el-row>




    <el-row :gutter="15" class="MT15">
      <el-col :span="4">
        <div class="grid-content bg111">
          <div>我是左侧区域</div>
          <i class="el-icon-edit"></i>
          <i class="el-icon-share"></i>
          <i class="el-icon-delete"></i>
        </div>
      </el-col>
      <el-col :span="20">
        <div class="grid-content bg111">
          <div>我是右侧的区域</div>
          
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
    margin-bottom: 20px;
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

</style>

<script>
export default {
  name: 'app',
  data: function() {
    return {
      visible: false,
      activeIndex: '1',
      activeIndex2: '1'
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>
