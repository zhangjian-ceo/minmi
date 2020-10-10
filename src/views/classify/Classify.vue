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
        <div>
          <ul class="kpl">
            <li class="lpl" v-for="item in arr" :key="item.id">
              {{ item.left }}
            </li>
          </ul>
        </div>
      </div>
      <div class="kr" ref="def">
        <div class="b_right" v-for="item in arr" :key="item.title">
          <div>
            <div class="r_picture">
              <img :src="item.info[0].title_img" alt="">
            </div>
            <div class="r_catalogue">
              <div class="c_left"></div>
              <div class="c_content">{{item.info[0].title}}</div>
              <div class="c_right"></div>
            </div>
            <div class="r_content">
              <ul class="die">
                <li class="er" v-for="item2 in item.info[0].list" :key="item2.img">
                  <img :src="item2.img" alt="" class="imgs">
                  <p>{{item2.name}}</p>
                </li>
              </ul>
            </div>
            <div class="r_more">查看更多</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { nava } from "../../api";
import BetterScroll from "better-scroll"
export default {
  name: "Classify",
  data() {
    return {
      arr: [],
    };
  },
  methods: {
    navs() {
      nava().then(res => {
        // console.log(res)
        this.arr = res;
        console.log(this.arr);
      });
    },
    Betters() {
      new BetterScroll(this.$refs.abc, {

      });
      new BetterScroll(this.$refs.def, {

      });
    },
  },
  mounted() {},
  created() {
    this.navs();
  },
  watch:{
    arr(val) {
      if (val) {
        this.$nextTick(() => {
          this.Betters();
        });
      }
    }
  }
};
</script>

<style scoped lang="less">
.classify {
  width: 100%;
  height: 100vh;
  /*overflow: hidden;*/
}
.c_top {
  width: 100%;
  height: 0.45rem;
  background: #f2f2f2;
  position: fixed;
  top: 0;
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
  /*height: 100vh;*/
  position: fixed;
  top: 0.45rem;
  display: flex;
}
.b_left {
  width: 15%;
  height: 100%;
  /*background: red;*/
  .kpl {
    width: 100%;
    height: 100%;
    .lpl {
      width: 100%;
      height: 0.46rem;
      /*border-right: 0.04rem solid #E02E24;*/
      /*color: #E02E24;*/
      font-size: 0.15rem;
      text-align: center;
      line-height: 0.46rem;
    }
  }
}
.kr{
  width: 85%;
  height: 100%;
  .b_right {
    width: 100%;
    height: 3.83rem;
    overflow: hidden;
    /*background: #55a532;*/
    .r_picture{
      margin-left: 0.12rem;
      margin-top: 0.1rem;
      margin-bottom: 0.12rem;
      width: 100%;
      height: 1rem;
      img{
        width: 2.8rem;
        height: 1rem;
        margin-bottom: 0.12rem;
      }
    }
    .r_catalogue{
      display: flex;
      margin-left: 1.1rem;
      margin-bottom: 0.23rem;
      .c_left{
        width: 0.17rem;
        height: 0.01rem;
        background: #E0E0E0;
        margin-right: 0.17rem;
        margin-top: 0.05rem;
      }
      .c_content{
        font-size: 0.14rem;
        color: #000;
        margin-right: 0.13rem;
      }
      .c_right{
        width: 0.17rem;
        height: 0.01rem;
        background: #E0E0E0;
        margin-top: 0.05rem;
      }
    }
    .r_content{
      width: 100%;
      height: 1.84rem;

      .die{
        width: 2.3rem;
        height: 100%;
        margin-left: 0.42rem;
        display: flex;
        justify-content: space-between;
        text-align: center;
        flex-wrap: wrap;
        .er{
          width: 33.33333%;
          height: 1.05rem;
          .imgs{
            width: 0.33rem;
            height: 0.4rem;
            margin-bottom: 0.13rem;
          }
          p{
            font-size: 0.12rem;
            color: #757575;
          }
        }
      }
    }
    .r_more{
      width: 80%;
      height: 0.34rem;
      background: #F9F5E6;
      font-size: 0.17rem;
      color: #AEA38D;
      text-align: center;
      line-height: 0.34rem;
      margin-left: 10%;
    }
  }
}
</style>
