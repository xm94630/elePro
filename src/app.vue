<template>
  <div>
    <h1>elePro</h1>
    <p>xm94630</p>
    <el-row :gutter="15">
      <el-col :span="4">
        <div class="grid-content bg-purple">
          我是左侧区域
        </div>
      </el-col>
      <el-col :span="20">
        <div class="grid-content bg-purple">
          <div>我是右侧的区域</div>
          <el-button @click="visible = true">按钮</el-button>
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
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    padding:15px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>

<script>
export default {
  name: 'app',
  data: function() {
    return { visible: false };
  }
};
</script>
