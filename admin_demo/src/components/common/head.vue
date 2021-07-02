<template>
  <el-row :gutter="10">
    <el-col :xs="2" :sm="2" :md="2" :lg="2" :xl="1">
      <div>
        <img class="headImg" src="../../assets/images/logo.jpg" alt />
      </div>
    </el-col>
    <el-col :xs="16" :sm="16" :md="16" :lg="16" :xl="18">
      <div>
        <el-menu :default-active="onRoutes" class="el-menu-demo" mode="horizontal" unique-opened router>
          <template v-for="item in items">
            <el-menu-item :index="item.index" @click="hanleRouter(item)">
              <template #title>{{ item.title }}</template>
            </el-menu-item>
          </template>
        </el-menu>
      </div>
    </el-col>
    <el-col :xs="6" :sm="6" :md="6" :lg="6" :xl="5">
      <div class="person">
        <img src="../../assets/images/face.jpg" alt />
        <span>admin</span>
        <span>
          <ThemePicker></ThemePicker>
        </span>
      </div>
    </el-col>
  </el-row>
</template>

<script>
import ThemePicker from "../ThemePicker";
export default {
  components: {
    ThemePicker
  },
  data() {
    return {
      onRoutes: "home",
      items: [
        {
          index: "home",
          title: "系统首页"
        },
        {
          index: "Basic",
          title: "Basic"
        },
        {
          index: "visualization",
          title: "数据可视化"
        }
      ]
    };
  },
  computed: {
    onRoutes() {
      return localStorage.getItem("location");
    }
  },
  mounted() {
    // localStorage.setItem("location", 'home');
  },
  methods: {
    hanleRouter(item) {
      localStorage.setItem("location", item.index);
    }
  }
};
</script>

<style scoped>
.heade {
  width: 100%;
}
.headImg {
  width: 60%;
}
.person {
  text-align: right;
  line-height: 60px;
  overflow: hidden;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.person span {
  display: block;
  margin-left: 10px;
}
.person img {
  width: 50px;
  border-radius: 50%;
}
</style>