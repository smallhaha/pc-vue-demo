<template>
  <div>
    <router-view />
  </div>
</template>

<script>
import { reactive } from "vue";
export default {
  name: "App",
  components: {
  },
  data() {
    return {
      check: true
    };
  },
  setup() {
    const sendData = reactive({
      val: "sendData"
    });
    // let checked= true
    const tableData = [
      {
        date: "2016-05-02",
        name: "王小虎",
        address: "上海市普陀区金沙江路 1518 弄"
      },
      {
        date: "2016-05-04",
        name: "王小虎",
        address: "上海市普陀区金沙江路 1517 弄"
      },
      {
        date: "2016-05-01",
        name: "王小虎",
        address: "上海市普陀区金沙江路 1519 弄"
      },
      {
        date: "2016-05-03",
        name: "王小虎",
        address: "上海市普陀区金沙江路 1516 弄"
      }
    ];
    setTimeout(() => {
      sendData.val += 1;
    }, 1000);
    function changeName() {
      console.log("事件传送出来了");
    }
    return {
      sendData,
      changeName,
      // checked,
      tableData
    };
  }
};
</script>

<style>
@import "./assets/common.css";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #333;
}
</style>
