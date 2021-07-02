<template>
  <div id="index">
    <dv-full-screen-container class="bg">
      <dv-loading v-if="loading">Loading...</dv-loading>
      <div v-else class="host-body">
        <div class="d-flex jc-center">
          <dv-decoration-10 style="width:33.3%;height:.0625rem;" />
          <div class="d-flex jc-center">
            <dv-decoration-8 :color="['#568aea', '#000000']" style="width:2.5rem;height:.625rem;" />
            <div class="title">
              <span class="title-text">大数据可视化平台</span>
              <dv-decoration-6
                class="title-bototm"
                :reverse="true"
                :color="['#50e3c2', '#67a1e5']"
                style="width:3.125rem;height:.1rem;"
              />
            </div>
            <dv-decoration-8
              :reverse="true"
              :color="['#568aea', '#000000']"
              style="width:2.5rem;height:.625rem;"
            />
          </div>
          <dv-decoration-10 style="width:33.3%;height:.0625rem; transform: rotateY(180deg);" />
        </div>
        <!-- 第二行 -->
        <div class="d-flex jc-between px-2">
          <div class="d-flex" style="width: 40%;">
            <div
              class="react-right ml-4"
              :style="type==1?'width: 6.25rem; text-align: left;background-color: #0f1325;transition: .5s;':'background-color: #0f1325;transition: .5s; text-align: left;'"
              @click="hanldeClick(1)"
            >
              <span class="react-before"></span>
              <span :class="type==1?'text colorBlue':'text'">数据分析one</span>
            </div>
            <div
              class="react-right ml-3"
              :style="type==2?'width: 6.25rem; text-align: center;background-color: #0f1325;transition: .5s;':'background-color: #0f1325;transition: .5s;'"
              @click="hanldeClick(2)"
            >
              <span :class="type==2?'text colorBlue':'text'">数据分析two</span>
            </div>
          </div>
          <div style="width: 40%" class="d-flex">
            <div class="react-left bg-color-blue mr-3">
              <span class="text fw-b">vue-big-screen</span>
            </div>
            <div
              class="react-left mr-4"
              style="width: 6.25rem; background-color: #0f1325; text-align: right;"
            >
              <span class="react-after"></span>
              <span class="text">2020年03月16日 周一 12:00</span>
            </div>
          </div>
        </div>
        <div class="mainbox" id="center" v-if="type==1">
          <dv-border-box-2 style="padding:0.1rem 0.2rem;" :color="['#ccc','#ccc']">dv-border1</dv-border-box-2>
        </div>
        <div class="mainbox" id="center" v-else>
          <dv-border-box-6 style="padding:0.1rem 0.2rem" :color="['#ccc']">
            <div class="up">
              <div class="bg-color-black item" v-for="item in titleItem" :key="item.title">
                <p class="ml-3 colorBlue fw-b">{{item.title}}</p>
                <div>
                  <dv-digital-flop :config="item.number" style="width:100%;height:.625rem;text-align:center" />
                </div>
              </div>
            </div>
          </dv-border-box-6>
        </div>
      </div>
    </dv-full-screen-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: true,
      type: 2,
      titleItem: [
        {
          title: "今年累计任务建次数",
          number: {
            number: [120],
            toFixed: 1,
            content: "{nt}"
          }
        },
        {
          title: "本月累计任务次数",
          number: {
            number: [18],
            toFixed: 1,
            content: "{nt}"
          }
        },
        {
          title: "今日累计任务次数",
          number: {
            number: [2],
            toFixed: 1,
            content: "{nt}"
          }
        },
        {
          title: "今年失败任务次数",
          number: {
            number: [14],
            toFixed: 1,
            content: "{nt}"
          }
        },
        {
          title: "今年成功任务次数",
          number: {
            number: [106],
            toFixed: 1,
            content: "{nt}"
          }
        },
        {
          title: "今年达标任务个数",
          number: {
            number: [100],
            toFixed: 1,
            content: "{nt}"
          }
        }
      ]
    };
  },
  mounted() {
    this.cancelLoading();
  },
  methods: {
    cancelLoading() {
      setTimeout(() => {
        this.loading = false;
      }, 500);
    },
    hanldeClick(val) {
      this.type = val;
    }
  }
};
</script>

<style lang="scss">
// @import url('../style/_variable.scss');
#center {
  display: flex;
  flex-direction: column;
  .up {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    .item {
      border-radius: 0.0625rem;
      padding-top: 0.1rem;
      padding-bottom: 0.1rem;
      margin-top: 0.1rem;
      margin-bottom: 0.1rem;
      text-align: center;
      width: 13%;
      height: 0.875rem;
    }
  }
  .down {
    padding: 0.07rem 0.05rem;
    padding-bottom: 0;
    width: 100%;
    display: flex;
    height: 3.1875rem;
    justify-content: space-between;
    .bg-color-black {
      border-radius: 0.0625rem;
    }
    .ranking {
      padding: 0.125rem;
      width: 59%;
    }
    .percent {
      width: 40%;
      display: flex;
      flex-wrap: wrap;
      .item {
        width: 50%;
        height: 1.5rem;
        span {
          margin-top: 0.0875rem;
          display: flex;
          justify-content: center;
        }
      }
      .water {
        width: 100%;
      }
    }
  }
}
#index {
  color: #d3d6dd;
  background-color: #000000;
  width: 100%;
  height: 100vh;

  .bg {
    padding: 0.2rem 0.2rem 0 0.2rem;
    background-image: url("../assets/pageBg.png");
    background-size: cover;
    background-position: center center;
  }

  .host-body {
    .title {
      position: relative;
      width: 6.25rem;
      text-align: center;
      background-size: cover;
      background-repeat: no-repeat;

      .title-text {
        font-size: 0.3rem;
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translate(-50%);
      }

      .title-bototm {
        position: absolute;
        bottom: -0.375rem;
        left: 50%;
        transform: translate(-50%);
      }
    }

    // 平行四边形
    .react-left {
      cursor: pointer;
      font-size: 0.225rem;
      width: 3.75rem;
      height: 0.625rem;
      line-height: 0.625rem;
      text-align: center;
      transform: skewX(-45deg);

      .react-after {
        position: absolute;
        right: -0.3125rem;
        top: 0;
        height: 0.625rem;
        width: 0.625rem;
        background-color: #0f1325;
        transform: skewX(45deg);
      }

      .text {
        display: inline-block;
        transform: skewX(45deg);
      }
    }

    .react-right {
      cursor: pointer;
      font-size: 0.225rem;
      width: 3.75rem;
      height: 0.625rem;
      line-height: 0.625rem;
      text-align: center;
      transform: skewX(45deg);

      .react-before {
        position: absolute;
        left: -0.3125rem;
        top: 0;
        height: 0.625rem;
        width: 0.625rem;
        background-color: #0f1325;
        transform: skewX(-45deg);
      }

      .text {
        display: inline-block;
        transform: skewX(-45deg);
      }
    }

    .body-box {
      margin-top: 0.2rem;
      display: flex;
      flex-direction: column;

      //下方区域的布局
      .content-box {
        display: grid;
        grid-template-columns: 2fr 3fr 5fr 3fr 2fr;
      }

      // 底部数据
      .bototm-box {
        margin-top: 0.125rem;
        display: grid;
        grid-template-columns: repeat(2, 50%);
      }
    }
  }
}
.jc-center {
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
}
.d-flex {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}
.px-2 {
  padding-left: 0.1rem;
  padding-right: 0.1rem;
}
.jc-between {
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
}
.bg-color-blue {
  background-color: #1a5cd7;
}
.colorBlue {
  color: #257dff !important;
}
.ml-3 {
  margin-left: 0.2rem;
}
.mr-3 {
  margin-right: 0.2rem;
}
.mainbox {
  padding-top: 0.2rem;
}

</style>