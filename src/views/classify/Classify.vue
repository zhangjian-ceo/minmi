<template>
  <div class="classify">
    <div class="c_top">
      <div class="t_left">
        <span class="iconfont icon-jiantou"></span>
      </div>
      <div class="t_content">分类</div>
      <div class="t_right">
        <span class="iconfont icon-sousuotubiao"></span>
      </div>
    </div>
    <div class="c_bottom">
      <div class="b_left" ref="abc">
        <ul class="kpl" v-if="arr.length !== 0">
          <li
            class="lpl"
            @click="chit(index)"
            :class="index === currentlpl ? 'nb' : ''"
            v-for="(item, index) in arr"
            :key="index"
          >
            {{ item.left }}
          </li>
        </ul>
      </div>
      <div class="kr" ref="def">
        <div>
          <div class="b_right" v-for="(item, index) in arr" :key="index">
            <div class="r_picture">
              <img :src="item.info[0].title_img" alt="" />
            </div>
            <div class="r_catalogue">
              <div class="c_left"></div>
              <div class="c_content">{{ item.info[0].title }}</div>
              <div class="c_right"></div>
            </div>
            <div class="r_content">
              <ul class="die">
                <li
                  class="er"
                  v-for="(item2, index) in item.info[0].list"
                  :key="index"
                >
                  <img :src="item2.img" alt="" class="imgs" />
                  <p>{{ item2.name }}</p>
                </li>
              </ul>
            </div>
            <van-button class="giao" type="primary" block>查看更多</van-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { nava } from "../../api";
import BetterScroll from "better-scroll";

export default {
  name: "Classify",
  data() {
    return {
      arr: [],
      serkpl: 0,
      serkr: [],
      searimg: null
    };
  },
  methods: {
    //请求数据
    navs() {
      nava().then(res => {
        // console.log(res)
        this.arr = res;
        // console.log(this.arr);
      });
    },
    //点击左边导航栏
    Betters() {
      this.searimg = new BetterScroll(this.$refs.abc, {
        click: true
      });
      this.rightBcrll = new BetterScroll(this.$refs.def, {
        probeType: 3
      });
      this.rightBcrll.on("scroll", pos => {
        this.serkpl = Math.floor(Math.abs(pos.y));
        console.log(this.serkpl);
      });
    },
    Berlpl() {
      let lis = this.$refs.def.querySelectorAll(".b_right");
      let tempArr = [];
      let top = 0;
      tempArr.push(top);
      lis.forEach((item, index) => {
        if (index === lis.length - 1) {
          item.style.paddingBottom = `${window.innerHeight -
            item.clientHeight -
            76}px`;
          this.rightBcrll.refresh();
        }
        top += lis[index].clientHeight;
        tempArr.push(top);
      });
      this.serkr = tempArr;
    },
    Berain(i) {
      let sil = this.$refs.abc.querySelectorAll(".lpl");
      let el = sil[i];
      this.searimg.scrollToElement(el, 300);
    },
    chit(i) {
      this.scrollY = this.serkr[i];
      this.rightBcrll.scrollTo(0, -this.scrollY, 300);
    }
  },
  created() {
    //调用请求数据函数
    this.navs();
  },
  computed: {
    currentlpl() {
      return this.serkr.findIndex((item, index) => {
        this.Berain(index);
        return this.serkpl >= item && this.serkpl < this.serkr[index + 1];
      });
    }
  },
  watch: {
    arr(val) {
      if (val) {
        this.$nextTick(() => {
          this.Betters();
          this.Berlpl();
        });
      }
    }
  }
};
</script>

<style scoped lang="less">
.classify {
  width: 100%;
  /*height: 100vh;*/
}
.c_top {
  width: 100%;
  height: 0.45rem;
  background: #f2f2f2;
  position: fixed;
  top: 0;
  z-index: 100;
  display: flex;
  justify-content: space-between;
  .t_left {
    line-height: 0.45rem;
    margin-left: 0.2rem;
  }
  .t_content {
    font-size: 0.2rem;
    color: #666666;
    line-height: 0.45rem;
  }
  .t_right {
    line-height: 0.45rem;
    margin-right: 0.15rem;
  }
}
.c_bottom {
  width: 100%;
  position: fixed;
  top: 0.45rem;
  bottom: 0.45rem;
  display: flex;
}
.b_left {
  width: 15%;
  .kpl {
    width: 100%;
    .lpl {
      width: 100%;
      height: 0.46rem;
      font-size: 0.16rem;
      /*color: #666666;*/
      text-align: center;
      line-height: 0.46rem;
    }
  }
}
.kr {
  width: 85%;
  /*height: 100%;*/
  .b_right {
    width: 100%;
    height: 3.83rem;
    overflow: hidden;
    /*background: #55a532;*/
    .r_picture {
      margin-left: 0.12rem;
      margin-top: 0.1rem;
      margin-bottom: 0.12rem;
      width: 100%;
      height: 1rem;
      img {
        width: 2.8rem;
        height: 1rem;
        margin-bottom: 0.12rem;
      }
    }
    .r_catalogue {
      display: flex;
      margin-left: 1.1rem;
      margin-bottom: 0.23rem;
      .c_left {
        width: 0.17rem;
        height: 0.01rem;
        background: #e0e0e0;
        margin-right: 0.17rem;
        margin-top: 0.05rem;
      }
      .c_content {
        font-size: 0.14rem;
        color: #000;
        margin-right: 0.13rem;
      }
      .c_right {
        width: 0.17rem;
        height: 0.01rem;
        background: #e0e0e0;
        margin-top: 0.05rem;
      }
    }
    .r_content {
      width: 100%;
      height: 1.84rem;

      .die {
        width: 2.3rem;
        height: 100%;
        margin-left: 0.42rem;
        display: flex;
        justify-content: space-between;
        text-align: center;
        flex-wrap: wrap;
        .er {
          width: 33.33333%;
          height: 1.05rem;
          .imgs {
            width: 0.33rem;
            height: 0.4rem;
            margin-bottom: 0.13rem;
          }
          p {
            width: 100%;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            font-size: 0.12rem;
            color: #757575;
          }
        }
      }
    }
    .giao {
      width: 80%;
      height: 0.34rem;
      background: #f9f5e6;
      border: 0.01rem solid #f9f5e6;
      font-size: 0.17rem;
      color: #aea38d;
      text-align: center;
      line-height: 0.34rem;
      margin-left: 10%;
    }
  }
}
.nb {
  border-right: 0.04rem solid #e02e24;
  color: #e02e24;
}
</style>
