<template>
  <div>
    <section class="demo_Layout">
      <h2 class="title">Form 表单</h2>
      <p>由输入框、选择器、单选框、多选框等控件组成，用以收集、校验、提交数据</p>
      <h2 class="box_title" id="box0">典型表单</h2>
      <p>包括各种表单项，比如输入框、选择器、开关、单选框、多选框等。在 Form 组件中，每一个表单域由一个 Form-Item 组件构成，表单域中可以放置各种类型的表单控件，包括 Input、Select、Checkbox、Radio、Switch、DatePicker、TimePicker</p>

      <div class="box_block">
        <div class="box_detail">
          <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="活动名称">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="活动区域">
              <el-select v-model="form.region" placeholder="请选择活动区域">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="活动时间">
              <el-col :span="11">
                <el-date-picker
                  type="date"
                  placeholder="选择日期"
                  v-model="form.date1"
                  style="width: 100%;"
                ></el-date-picker>
              </el-col>
              <el-col class="line" :span="2">-</el-col>
              <el-col :span="11">
                <el-time-picker placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-picker>
              </el-col>
            </el-form-item>
            <el-form-item label="即时配送">
              <el-switch v-model="form.delivery"></el-switch>
            </el-form-item>
            <el-form-item label="活动性质">
              <el-checkbox-group v-model="form.type">
                <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
                <el-checkbox label="地推活动" name="type"></el-checkbox>
                <el-checkbox label="线下主题活动" name="type"></el-checkbox>
                <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
              </el-checkbox-group>
            </el-form-item>
            <el-form-item label="特殊资源">
              <el-radio-group v-model="form.resource">
                <el-radio label="线上品牌商赞助"></el-radio>
                <el-radio label="线下场地免费"></el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item label="活动形式">
              <el-input type="textarea" v-model="form.desc"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="onSubmit">立即创建</el-button>
              <el-button>取消</el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
      <div class="tip">
        <p>
          W3C 标准中有如下
          <a>规定</a>:
        </p>
        <p>
          <i>When there is only one single-line text input field in a form, the user agent should accept Enter in that field as a request to submit the form.</i>
        </p>
        <p>即：当一个 form 元素中只有一个输入框时，在该输入框中按下回车应提交该表单。如果希望阻止这一默认行为，可以在el-form标签上添加 @submit.native.prevent。</p>
      </div>
      <h2 class="box_title" id="box1">行内表单</h2>
      <p>当垂直方向空间受限且表单较简单时，可以在一行内放置表单。设置 inline 属性可以让表单域变为行内的表单域</p>
      <div class="box_block">
        <div class="box_detail">
          <el-form :inline="true" :model="formInline" class="demo-form-inline">
            <el-form-item label="审批人">
              <el-input v-model="formInline.user" placeholder="审批人"></el-input>
            </el-form-item>
            <el-form-item label="活动区域">
              <el-select v-model="formInline.region" placeholder="活动区域">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="onSubmit">查询</el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
      <h2 class="box_title" id="box2">对齐方式</h2>
      <p>根据具体目标和制约因素，选择最佳的标签对齐方式。通过设置 label-position 属性可以改变表单域标签的位置，可选值为 top、left，当设为 top 时标签会置于表单域的顶部</p>
      <div class="box_block">
        <div class="box_detail">
          <el-radio-group v-model="labelPosition" size="small">
            <el-radio-button label="left">左对齐</el-radio-button>
            <el-radio-button label="right">右对齐</el-radio-button>
            <el-radio-button label="top">顶部对齐</el-radio-button>
          </el-radio-group>
          <div style="margin: 20px;"></div>
          <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
            <el-form-item label="名称">
              <el-input v-model="formLabelAlign.name"></el-input>
            </el-form-item>
            <el-form-item label="活动区域">
              <el-input v-model="formLabelAlign.region"></el-input>
            </el-form-item>
            <el-form-item label="活动形式">
              <el-input v-model="formLabelAlign.type"></el-input>
            </el-form-item>
          </el-form>
        </div>
      </div>
      <h2 class="box_title" id="box3">表单验证</h2>
      <p>在防止用户犯错的前提下，尽可能让用户更早地发现并纠正错误。Form 组件提供了表单验证的功能，只需要通过 rules 属性传入约定的验证规则，并将 Form-Item 的 prop 属性设置为需校验的字段名即可。校验规则参见 async-validator</p>
      <div class="box_block">
        <div class="box_detail">
          <el-form
            :model="ruleForm"
            :rules="rules"
            ref="ruleForm"
            label-width="100px"
            class="demo-ruleForm"
          >
            <el-form-item label="活动名称" prop="name">
              <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>
            <el-form-item label="活动区域" prop="region">
              <el-select v-model="ruleForm.region" placeholder="请选择活动区域">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="活动时间" required>
              <el-col :span="11">
                <el-form-item prop="date1">
                  <el-date-picker
                    type="date"
                    placeholder="选择日期"
                    v-model="ruleForm.date1"
                    style="width: 100%;"
                  ></el-date-picker>
                </el-form-item>
              </el-col>
              <el-col class="line" :span="2">-</el-col>
              <el-col :span="11">
                <el-form-item prop="date2">
                  <el-time-picker placeholder="选择时间" v-model="ruleForm.date2" style="width: 100%;"></el-time-picker>
                </el-form-item>
              </el-col>
            </el-form-item>
            <el-form-item label="即时配送" prop="delivery">
              <el-switch v-model="ruleForm.delivery"></el-switch>
            </el-form-item>
            <el-form-item label="活动性质" prop="type">
              <el-checkbox-group v-model="ruleForm.type">
                <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
                <el-checkbox label="地推活动" name="type"></el-checkbox>
                <el-checkbox label="线下主题活动" name="type"></el-checkbox>
                <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
              </el-checkbox-group>
            </el-form-item>
            <el-form-item label="特殊资源" prop="resource">
              <el-radio-group v-model="ruleForm.resource">
                <el-radio label="线上品牌商赞助"></el-radio>
                <el-radio label="线下场地免费"></el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item label="活动形式" prop="desc">
              <el-input type="textarea" v-model="ruleForm.desc"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
              <el-button @click="resetForm('ruleForm')">重置</el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
      <h2 class="box_title" id="box4">自定义校验规则</h2>
      <p>这个例子中展示了如何使用自定义验证规则来完成密码的二次验证。本例还使用status-icon属性为输入框添加了表示校验结果的反馈图标。</p>
      <div class="box_block">
        <div class="box_detail">
          <el-form
            :model="ruleForm1"
            status-icon
            :rules="rules1"
            ref="ruleForm1"
            label-width="100px"
            class="demo-ruleForm"
          >
            <el-form-item label="密码" prop="pass">
              <el-input type="password" v-model="ruleForm1.pass" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="确认密码" prop="checkPass">
              <el-input type="password" v-model="ruleForm1.checkPass" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="年龄" prop="age">
              <el-input v-model.number="ruleForm1.age"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitForm('ruleForm1')">提交</el-button>
              <el-button @click="resetForm('ruleForm1')">重置</el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
      <h2 class="box_title" id="box5">动态增减表单项</h2>
      <p>除了在 Form 组件上一次性传递所有的验证规则外还可以在单个的表单域上传递属性的验证规则</p>
      <div class="box_block">
        <div class="box_detail"></div>
      </div>
      <h2 class="box_title" id="box6">数字类型验证</h2>
      <p>数字类型的验证需要在 v-model 处加上 .number 的修饰符，这是 Vue 自身提供的用于将绑定值转化为 number 类型的修饰符。</p>
      <div class="box_block">
        <div class="box_detail"></div>
      </div>

      <h2 class="box_title" id="box7">表单内组件尺寸控制</h2>
      <p>通过设置 Form 上的 size 属性可以使该表单内所有可调节大小的组件继承该尺寸。Form-Item 也具有该属性。如果希望某个表单项或某个表单组件的尺寸不同于 Form 上的size属性，直接为这个表单项或表单组件设置自己的size即可。</p>

      <div class="box_block">
        <div class="box_detail"></div>
      </div>

      <h2 class="box_title" id="box8">Form Attributes</h2>

      <el-table :data="tableData1" style="width: 100%;margin-top:10px">
        <el-table-column prop="date" label="参数" width="90"></el-table-column>
        <el-table-column prop="explanation" label="说明"></el-table-column>
        <el-table-column prop="type" label="类型"></el-table-column>
        <el-table-column prop="vaule" label="可选值" width="90"></el-table-column>
        <el-table-column prop="defaultvalue" label="默认值" width="100"></el-table-column>
      </el-table>
      <h2 class="box_title" id="box9">Form Methods</h2>

      <el-table :data="tableData1" style="width: 100%;margin-top:10px">
        <el-table-column prop="date" label="参数" width="90"></el-table-column>
        <el-table-column prop="explanation" label="说明"></el-table-column>
        <el-table-column prop="type" label="类型"></el-table-column>
        <el-table-column prop="vaule" label="可选值" width="90"></el-table-column>
        <el-table-column prop="defaultvalue" label="默认值" width="100"></el-table-column>
      </el-table>
      <h2 class="box_title" id="box10">Form Events</h2>

      <el-table :data="tableData1" style="width: 100%;margin-top:10px">
        <el-table-column prop="date" label="参数" width="90"></el-table-column>
        <el-table-column prop="explanation" label="说明"></el-table-column>
        <el-table-column prop="type" label="类型"></el-table-column>
        <el-table-column prop="vaule" label="可选值" width="90"></el-table-column>
        <el-table-column prop="defaultvalue" label="默认值" width="100"></el-table-column>
      </el-table>
      <h2 class="box_title" id="box11">Form-Item Attributes</h2>

      <el-table :data="tableData1" style="width: 100%;margin-top:10px">
        <el-table-column prop="date" label="参数" width="90"></el-table-column>
        <el-table-column prop="explanation" label="说明"></el-table-column>
        <el-table-column prop="type" label="类型"></el-table-column>
        <el-table-column prop="vaule" label="可选值" width="90"></el-table-column>
        <el-table-column prop="defaultvalue" label="默认值" width="100"></el-table-column>
      </el-table>
      <h2 class="box_title" id="box12">Form-Item Slot</h2>

      <el-table :data="tableData1" style="width: 100%;margin-top:10px">
        <el-table-column prop="date" label="参数" width="90"></el-table-column>
        <el-table-column prop="explanation" label="说明"></el-table-column>
        <el-table-column prop="type" label="类型"></el-table-column>
        <el-table-column prop="vaule" label="可选值" width="90"></el-table-column>
        <el-table-column prop="defaultvalue" label="默认值" width="100"></el-table-column>
      </el-table>
      <h2 class="box_title" id="box13">Form-ItForm-Item Scoped Slot</h2>

      <el-table :data="tableData1" style="width: 100%;margin-top:10px">
        <el-table-column prop="date" label="参数" width="90"></el-table-column>
        <el-table-column prop="explanation" label="说明"></el-table-column>
        <el-table-column prop="type" label="类型"></el-table-column>
        <el-table-column prop="vaule" label="可选值" width="90"></el-table-column>
        <el-table-column prop="defaultvalue" label="默认值" width="100"></el-table-column>
      </el-table>
      <h2 class="box_title" id="box14">Form-Item Methods</h2>

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
      <el-scrollbar style="width:100%;height:100%">
        <div class="demo_fixed_div" v-for="(item,index) in AnchoLlink" :key="item">
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
    var checkAge = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("年龄不能为空"));
      }
      setTimeout(() => {
        if (!Number.isInteger(value)) {
          callback(new Error("请输入数字值"));
        } else {
          if (value < 18) {
            callback(new Error("必须年满18岁"));
          } else {
            callback();
          }
        }
      }, 1000);
    };
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm.pass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      labelPosition: "right",
      formLabelAlign: {
        name: "",
        region: "",
        type: ""
      },
      formInline: {
        user: "",
        region: ""
      },
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      },
      moveIndex: "",
      AnchoLlink: [
        "典型表单",
        "行内表单",
        "对齐方式",
        "表单验证",
        "自定义校验规则",
        "动态增减表单项",
        "数字类型验证",
        "表单内组件尺寸控制",
        "Form Attributes",
        "Form Methods",
        "Form Events",
        "Form-Item Attributes",
        "Form-Item Slot",
        "Form-Item Scoped Slot",
        "Form-Item Methods"
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
      ],
      ruleForm: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      },
      rules: {
        name: [
          { required: true, message: "请输入活动名称", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],
        region: [
          { required: true, message: "请选择活动区域", trigger: "change" }
        ],
        date1: [
          {
            type: "date",
            required: true,
            message: "请选择日期",
            trigger: "change"
          }
        ],
        date2: [
          {
            type: "date",
            required: true,
            message: "请选择时间",
            trigger: "change"
          }
        ],
        type: [
          {
            type: "array",
            required: true,
            message: "请至少选择一个活动性质",
            trigger: "change"
          }
        ],
        resource: [
          { required: true, message: "请选择活动资源", trigger: "change" }
        ],
        desc: [{ required: true, message: "请填写活动形式", trigger: "blur" }]
      },
      ruleForm1: {
        pass: "",
        checkPass: "",
        age: ""
      },
      rules1: {
        pass: [{ validator: validatePass, trigger: "blur" }],
        checkPass: [{ validator: validatePass2, trigger: "blur" }],
        age: [{ validator: checkAge, trigger: "blur" }]
      }
    };
  },
  mounted() {
    let that = this;
    document.getElementsByClassName("el-main")[0].scrollTop = 0;
    window.addEventListener(
      "scroll",
      function() {
        that.moveIndex = that.utils.handleScroll(that.AnchoLlink, true);
      },
      true
    );
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    },
    handleClick(item, index) {
      this.moveIndex = item;
      console.log(item);
    },
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>

<style>
</style>