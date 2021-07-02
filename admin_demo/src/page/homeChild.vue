<template>
  <el-container>
    <!-- <el-aside> -->
    <el-scrollbar style="background:#fff">
      <slider></slider>
    </el-scrollbar>
    <!-- </el-aside> -->
    <el-container>
      <el-main>
        <mainBox></mainBox>
      </el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </el-container>
</template>

<script>
import mainBox from "../components/common/main";
import slider from "../components/common/slider";
export default {
  name: "child",
  components: {
    mainBox,
    slider
  },
  mounted() {
    
  }
};
</script>

<style scoped>
.el-main {
  margin: 10px;
  background: #fff;
}
</style>