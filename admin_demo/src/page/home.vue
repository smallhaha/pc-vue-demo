<template>
  <el-container>
    <el-header>
      <headBox></headBox>
    </el-header>
    <el-container>
      <router-view />
    </el-container>
  </el-container>
</template>

<script>
import headBox from "../components/common/head";
export default {
  name: "home",
  components: {
    headBox
  }
};
</script>

<style>
.el-header {
  box-shadow: 0 2px 6px 0px rgba(0, 0, 0, 0.2);
  /* z-index: 3333; */
  padding: 0 10px !important;
}
.el-header,
.el-footer {
  background-color: #ffffff;
  /* color: #333;
  text-align: center; */
  padding: 0 10px !important;
  /* line-height: 60px; */
}

.el-aside {
  background-color: #fff;
  /* color: #333; */
  text-align: center;
  height: calc(100vh - 60px);
  overflow-y: auto;
  /* line-height: 200px; */
}

.el-main {
  /* background-color: #e9eef3; */
  color: #333;
  /* text-align: center; */
  height: calc(100vh - 140px);
  overflow-y: auto;
  /* line-height: 160px; */
  padding: 10px !important;
}

body > .el-container {
  margin-bottom: 40px;
  width: 100vw;
}
.homeMain{
  width: 100%;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  /* line-height: 260px; */
}

.el-container:nth-child(7) .el-aside {
  /* line-height: 320px; */
}
.el-submenu__title{
  font-size: 12px !important;
}
</style>