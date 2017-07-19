<template>
  <div>
    <h1>elePro</h1>
    <p>xm94630</p>
    <el-row :gutter="15">
      <el-col :span="4">
        <div class="grid-content bg1">
          我是左侧区域
        </div>
      </el-col>
      <el-col :span="20">
        <div class="grid-content bg1">
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
  .grid-content {
    border-radius: 4px;
    padding:15px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
  .bg1{
    background:#EFF2F7;
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
