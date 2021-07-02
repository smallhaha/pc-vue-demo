<template>
  <div>
    <section class="demo_Layout">
      <h2 class="title">Layout布局</h2>
      <p>通过基础的24分栏，快速简单的创建布局。</p>
      <h2 class="box_title" id="box0">基础布局</h2>
      <p>使用单一分栏创建基础的栅格布局通过 row 和 col 组件，并通过 col 组件的 span 属性我们就可以自由地组合布局。</p>
      <div class="box_block">
        <div class="box_detail">
          <el-row>
            <el-col :span="24">
              <div class="grid-content bg-purple-dark"></div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12">
              <div class="grid-content bg-purple"></div>
            </el-col>
            <el-col :span="12">
              <div class="grid-content bg-purple-light"></div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="8">
              <div class="grid-content bg-purple"></div>
            </el-col>
            <el-col :span="8">
              <div class="grid-content bg-purple-light"></div>
            </el-col>
            <el-col :span="8">
              <div class="grid-content bg-purple"></div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="6">
              <div class="grid-content bg-purple"></div>
            </el-col>
            <el-col :span="6">
              <div class="grid-content bg-purple-light"></div>
            </el-col>
            <el-col :span="6">
              <div class="grid-content bg-purple"></div>
            </el-col>
            <el-col :span="6">
              <div class="grid-content bg-purple-light"></div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="4">
              <div class="grid-content bg-purple"></div>
            </el-col>
            <el-col :span="4">
              <div class="grid-content bg-purple-light"></div>
            </el-col>
            <el-col :span="4">
              <div class="grid-content bg-purple"></div>
            </el-col>
            <el-col :span="4">
              <div class="grid-content bg-purple-light"></div>
            </el-col>
            <el-col :span="4">
              <div class="grid-content bg-purple"></div>
            </el-col>
            <el-col :span="4">
              <div class="grid-content bg-purple-light"></div>
            </el-col>
          </el-row>
        </div>
      </div>
      <h2 class="box_title" id="box1">分栏布局</h2>
      <p>分栏之间存在间隔。Row 组件 提供 gutter 属性来指定每一栏之间的间隔，默认间隔为 0。</p>
      <div class="box_block">
        <div class="box_detail">
          <el-row :gutter="20">
            <el-col :span="6">
              <div class="grid-content bg-purple"></div>
            </el-col>
            <el-col :span="6">
              <div class="grid-content bg-purple"></div>
            </el-col>
            <el-col :span="6">
              <div class="grid-content bg-purple"></div>
            </el-col>
            <el-col :span="6">
              <div class="grid-content bg-purple"></div>
            </el-col>
          </el-row>
        </div>
      </div>
      <h2 class="box_title" id="box2">混合布局</h2>
      <p>通过基础的 1/24 分栏任意扩展组合形成较为复杂的混合布局。</p>
      <div class="box_block">
        <div class="box_detail">
          <el-row :gutter="20">
            <el-col :span="16">
              <div class="grid-content bg-purple"></div>
            </el-col>
            <el-col :span="8">
              <div class="grid-content bg-purple"></div>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="8">
              <div class="grid-content bg-purple"></div>
            </el-col>
            <el-col :span="8">
              <div class="grid-content bg-purple"></div>
            </el-col>
            <el-col :span="4">
              <div class="grid-content bg-purple"></div>
            </el-col>
            <el-col :span="4">
              <div class="grid-content bg-purple"></div>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="4">
              <div class="grid-content bg-purple"></div>
            </el-col>
            <el-col :span="16">
              <div class="grid-content bg-purple"></div>
            </el-col>
            <el-col :span="4">
              <div class="grid-content bg-purple"></div>
            </el-col>
          </el-row>
        </div>
      </div>
      <h2 class="box_title" id="box3">分栏偏移</h2>
      <p>支持偏移指定的栏数。通过制定 col 组件的 offset 属性可以指定分栏偏移的栏数。</p>
      <div class="box_block">
        <div class="box_detail">
          <el-row :gutter="20">
            <el-col :span="6">
              <div class="grid-content bg-purple"></div>
            </el-col>
            <el-col :span="6" :offset="6">
              <div class="grid-content bg-purple"></div>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="6" :offset="6">
              <div class="grid-content bg-purple"></div>
            </el-col>
            <el-col :span="6" :offset="6">
              <div class="grid-content bg-purple"></div>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="12" :offset="6">
              <div class="grid-content bg-purple"></div>
            </el-col>
          </el-row>
        </div>
      </div>
      <h2 class="box_title" id="box4">对齐方式</h2>
      <p>通过 flex 布局来对分栏进行灵活的对齐。将 type 属性赋值为 'flex'，可以启用 flex 布局，并可通过 justify 属性来指定 start, center, end, space-between, space-around 其中的值来定义子元素的排版方式。</p>
      <div class="box_block">
        <div class="box_detail">
          <el-row :gutter="20">
            <el-col :span="16">
              <div class="grid-content bg-purple"></div>
            </el-col>
            <el-col :span="8">
              <div class="grid-content bg-purple"></div>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="8">
              <div class="grid-content bg-purple"></div>
            </el-col>
            <el-col :span="8">
              <div class="grid-content bg-purple"></div>
            </el-col>
            <el-col :span="4">
              <div class="grid-content bg-purple"></div>
            </el-col>
            <el-col :span="4">
              <div class="grid-content bg-purple"></div>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="4">
              <div class="grid-content bg-purple"></div>
            </el-col>
            <el-col :span="16">
              <div class="grid-content bg-purple"></div>
            </el-col>
            <el-col :span="4">
              <div class="grid-content bg-purple"></div>
            </el-col>
          </el-row>
        </div>
      </div>
      <h2 class="box_title" id="box5">响应式布局</h2>
      <p>参照了 Bootstrap 的 响应式设计，预设了五个响应尺寸：xs、sm、md、lg 和 xl。</p>
      <div class="box_block">
        <div class="box_detail">
          <el-row :gutter="10">
            <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1">
              <div class="grid-content bg-purple"></div>
            </el-col>
            <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11">
              <div class="grid-content bg-purple-light"></div>
            </el-col>
            <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11">
              <div class="grid-content bg-purple"></div>
            </el-col>
            <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1">
              <div class="grid-content bg-purple-light"></div>
            </el-col>
          </el-row>
        </div>
      </div>
      <h2 class="box_title" id="box6">基于断点的隐藏类</h2>
      <p>Element Plus 额外提供了一系列类名，用于在某些条件下隐藏元素。这些类名可以添加在任何 DOM 元素或自定义组件上。如果需要，请自行引入以下文件：</p>
      <div class="box_block">
        <div class="box_detail">import 'element-plus/lib/theme-chalk/display.css';</div>
      </div>
      <div>
        <p style="line-height:3em">包含的类名及其含义为：</p>
        <ul class="box_ul">
          <li>hidden-xs-only - 当视口在 xs 尺寸时隐藏</li>
          <li>hidden-sm-only - 当视口在 sm 尺寸时隐藏</li>
          <li>hidden-sm-and-down - 当视口在 sm 及以下尺寸时隐藏</li>
          <li>hidden-sm-and-up - 当视口在 sm 及以上尺寸时隐藏</li>
          <li>hidden-md-only - 当视口在 md 尺寸时隐藏</li>
          <li>hidden-md-and-down - 当视口在 md 及以下尺寸时隐藏</li>
          <li>hidden-md-and-up - 当视口在 md 及以上尺寸时隐藏</li>
          <li>hidden-lg-only - 当视口在 lg 尺寸时隐藏</li>
          <li>hidden-lg-and-down - 当视口在 lg 及以下尺寸时隐藏</li>
          <li>hidden-lg-and-up - 当视口在 lg 及以上尺寸时隐藏</li>
          <li>hidden-xl-only - 当视口在 xl 尺寸时隐藏</li>
        </ul>
      </div>
      <h2 class="box_title" id="box7">Row Attributes</h2>

      <el-table :data="tableData" style="width: 100%;margin-top:10px">
        <el-table-column prop="date" label="参数" width="90"></el-table-column>
        <el-table-column prop="explanation" label="说明"></el-table-column>
        <el-table-column prop="type" label="类型"></el-table-column>
        <el-table-column prop="vaule" label="可选值" width="90"></el-table-column>
        <el-table-column prop="defaultvalue" label="默认值" width="100"></el-table-column>
      </el-table>

      <h2 class="box_title" id="box8">Col Attributes</h2>

      <el-table :data="tableData1" style="width: 100%;margin-top:10px">
        <el-table-column prop="date" label="参数" width="90"></el-table-column>
        <el-table-column prop="explanation" label="说明"></el-table-column>
        <el-table-column prop="type" label="类型"></el-table-column>
        <el-table-column prop="vaule" label="可选值" width="90"></el-table-column>
        <el-table-column prop="defaultvalue" label="默认值" width="100"></el-table-column>
      </el-table>
      <!-- <div v-for="(item,index) in AnchoLlink" :key="item" :id="'box'+index" class="box">{{item}}</div> -->
    </section>
    <div class="demo_Layout_fixed">
      <el-scrollbar>
        <div  class="demo_fixed_div"  v-for="(item,index) in AnchoLlink" :key="item">
          <a
            :href="'#box'+index"
            :class="moveIndex == item?'active':''"
            :title="item"
            @click="handleClick(item,index)"
          >
            <span>{{item}}</span>
          </a>
        </div>
      </el-scrollbar>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      moveIndex: "",
      AnchoLlink: [
        "基础布局",
        "分栏布局",
        "混合布局",
        "分栏偏移",
        "对齐方式",
        "响应式布局",
        "基于断点的隐藏类",
        "Row Attributes",
        "Col Attributes"
      ],
      tableData: [
        {
          date: "gutter",
          explanation: "栅格间隔",
          type: "number",
          vaule: "—",
          defaultvalue: "0"
        },
        {
          date: "type",
          explanation: "布局模式，可选 flex，现代浏览器下有效",
          type: "string",
          vaule: "—",
          defaultvalue: "—"
        },
        {
          date: "justify",
          explanation: "flex 布局下的水平排列方式",
          type: "string",
          vaule: "start/end/center/space-around/space-between",
          defaultvalue: "start"
        },
        {
          date: "align",
          explanation: "flex 布局下的垂直排列方式",
          type: "string",
          vaule: "top/middle/bottom",
          defaultvalue: "top"
        },
        {
          date: "tag",
          explanation: "自定义元素标签",
          type: "string",
          vaule: "*",
          defaultvalue: "div"
        }
      ],
      tableData1: [
        {
          date: "span",
          explanation: "栅格占据的列数",
          type: "number",
          vaule: "—",
          defaultvalue: "24"
        },
        {
          date: "offset",
          explanation: "栅格左侧的间隔格数",
          type: "number",
          vaule: "—",
          defaultvalue: "0"
        },
        {
          date: "push",
          explanation: "栅格向右移动格数",
          type: "number",
          vaule: "—",
          defaultvalue: "0"
        },
        {
          date: "pull",
          explanation: "栅格向左移动格数",
          type: "number",
          vaule: "—",
          defaultvalue: "0"
        },
        {
          date: "xs",
          explanation: "<768px 响应式栅格数或者栅格属性对象",
          type: "number/object (例如： {span: 4, offset: 4})",
          vaule: "—",
          defaultvalue: "—"
        },
        {
          date: "md",
          explanation: "≥992px 响应式栅格数或者栅格属性对象",
          type: "number/object (例如： {span: 4, offset: 4})",
          vaule: "—",
          defaultvalue: "—"
        },
        {
          date: "lg",
          explanation: "≥1200px 响应式栅格数或者栅格属性对象",
          type: "number/object (例如： {span: 4, offset: 4})",
          vaule: "—",
          defaultvalue: "—"
        },
        {
          date: "xl",
          explanation: "≥1920px 响应式栅格数或者栅格属性对象",
          type: "number/object (例如： {span: 4, offset: 4})",
          vaule: "—",
          defaultvalue: "—"
        },
        {
          date: "tag",
          explanation: "自定义元素标签",
          type: "string",
          vaule: "*",
          defaultvalue: "div"
        }
      ]
    };
  },
  mounted() {
    let that = this;
    document.getElementsByClassName("el-main")[0].scrollTop=0
    window.addEventListener(
      "scroll",
      function() {
        that.moveIndex = that.utils.handleScroll(that.AnchoLlink, true);
      },
      true
    );
  },
  methods: {
    handleClick(item, index) {
      this.moveIndex = item;
    }
  }
};
</script>

<style scoped>
.el-row {
  margin-bottom: 20px;
}
.el-row:last-child {
  margin-bottom: 0;
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
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>