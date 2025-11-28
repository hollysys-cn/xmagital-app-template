<script setup lang="ts">
import { ElConfigProvider } from "element-plus";
import zhCn from "element-plus/es/locale/lang/zh-cn";
</script>

<template>
  <el-config-provider :locale="zhCn">
    <div class="app-container">
      <el-menu
        mode="horizontal"
        router
        :default-active="$route.path"
      >
        <el-menu-item index="/">
          首页
        </el-menu-item>
        <el-menu-item index="/students">
          学生管理
        </el-menu-item>
      </el-menu>
      <div class="main-content">
        <router-view />
      </div>
    </div>
  </el-config-provider>
</template>

<style>
body {
  margin: 0;
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
}
.main-content {
  padding: 20px;
}
</style>
