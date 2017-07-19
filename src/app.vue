<template>
  <div>
    <el-menu theme="dark" :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-menu-item index="1">处理中心</el-menu-item>
      <el-submenu index="2">
        <template slot="title">我的工作台</template>
        <el-menu-item index="2-1">选项1</el-menu-item>
        <el-menu-item index="2-2">选项2</el-menu-item>
        <el-menu-item index="2-3">选项3</el-menu-item>
      </el-submenu>
      <el-menu-item index="3"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
    </el-menu>
    <h1>elePro</h1>
    <p>xm94630</p>
    <el-row :gutter="15">
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
