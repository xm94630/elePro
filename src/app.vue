<template>
  <div>
    <h1>elePro</h1>
    <p>A vue project.</p>
    <el-button @click="visible = true">按钮</el-button>
    <el-dialog v-model="visible" title="Hello world">
        <p>欢迎使用 Element</p>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'app',
  data: function() {
    return { visible: false };
  }
};
</script>
