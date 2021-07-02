<template>
  <div class="sliderChild">
    <el-menu
      class="sidebar-el-menu"
      :default-active="onRoutes"
      :collapse="collapse"
      unique-opened
      router
    >
      <template v-for="item in routeList[rout]">
        <template v-if="item.subs">
          <el-submenu :index="item.index" :key="item.index">
            <template #title>
              <i :class="item.icon"></i>
              <span>{{ item.title }}</span>
            </template>
            <template v-for="subItem in item.subs">
              <el-submenu v-if="subItem.subs" :index="subItem.index" :key="subItem.index">
                <template #title>{{ subItem.title }}</template>
                <el-menu-item
                  v-for="(threeItem, i) in subItem.subs"
                  :key="i"
                  :index="threeItem.index"
                >{{ threeItem.title }}</el-menu-item>
              </el-submenu>
              <el-menu-item v-else :index="subItem.index" :key="subItem.index">{{ subItem.title }}</el-menu-item>
            </template>
          </el-submenu>
        </template>
        <template v-else>
          <el-menu-item :index="item.index" :key="item.index">
            <i :class="item.icon"></i>
            <template #title>{{ item.title }}</template>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
    <div class="collapse-btn" @click="collapseChage">
      <i v-if="!collapse" class="el-icon-s-fold"></i>
      <i v-else class="el-icon-s-unfold"></i>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      rout: "Basic",
      collapse: false,
      routeList: {
        Basic: [
          {
            icon: "el-icon-lx-home",
            index: "Layout",
            title: "布局"
          },
           {
            icon: "el-icon-lx-cascades",
            index: "form",
            title: "表单"
          },
          {
            icon: "el-icon-lx-cascades",
            index: "Container",
            title: "布局容器"
          },
          {
            icon: "el-icon-lx-copy",
            index: "Color",
            title: "色彩"
          },
          {
            icon: "el-icon-lx-emoji",
            index: "Typography",
            title: "字体"
          },
          {
            icon: "el-icon-pie-chart",
            index: "Border",
            title: "边框",
             subs: [
            {
              index: "form",
              title: "基本表单"
            },
            //         {
            //             index: "3-2",
            //             title: "三级菜单",
            //             subs: [
            //                 {
            //                     index: "editor",
            //                     title: "富文本编辑器"
            //                 },
            //                 {
            //                     index: "markdown",
            //                     title: "markdown编辑器"
            //                 }
            //             ]
            //         },
            {
              index: "upload",
              title: "文件上传"
            }
          ]
          },
          {
            icon: "el-icon-lx-global",
            index: "Icon",
            title: "图标"
          },
          {
            icon: "el-icon-lx-redpacket_fill",
            index: "Button",
            title: "按钮"
          },
          {
            icon: "el-icon-lx-redpacket_fill",
            index: "Link",
            title: "文字链接"
          },
          {
            icon: "el-icon-lx-redpacket_fill",
            index: "Space",
            title: "间距"
          },
          {
            icon: "el-icon-lx-redpacket_fill",
            index: "Scrollbar",
            title: "滚动条"
          }
        ]
      }
    };
  },
  computed: {
    onRoutes() {
      this.rout = localStorage.getItem("location");
      if (this.$route.path.replace("/", "") === this.rout) {
        this.$router.push('/'+this.routeList[this.rout][0].index)
        return this.routeList[this.rout][0].index;
      } else {
        return this.$route.path.replace("/", "");
      }
    }

    // collapse() {
    //   return this.$store.state.collapse;
    // }
  },
  mounted() {},
  methods: {
    collapseChage() {
      this.collapse = !this.collapse;
    }
  }
};
</script>

<style scoped>
.sliderChild {
  background-color: #fff;
}
.el-dropdown-menu__item,
.el-menu-item {
  font-size: 12px;
  height: 45px;
  line-height: 45px;
}
.el-submenu .el-submenu__title {
  font-size: 12px !important;
}
.el-menu-item [class^="el-icon-"] {
  font-size: 14px;
}
.sliderChild >>> .el-submenu__icon-arrow {
  top: 55% !important;
}
.sliderChild .sidebar-el-menu {
  height: (100% - 20px);
  overflow-y: auto;
}
.collapse-btn {
  position: absolute;
  bottom: 10px;
  left: 20px;
  font-size: 16px;
}
.sidebar-el-menu:not(.el-menu--collapse) {
  width: 150px;
}
.el-menu {
  border: none;
}
</style>