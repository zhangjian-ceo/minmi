<template>
  <div class="list-details">
    <div class="title">
      <van-icon
        name="share-o"
        size="30"
        color="gray"
        class="getBack"
        @click="getBack"
      />
    </div>
    <header>
      <!--      图片轮播-->
      <div class="carousel">
        <van-swipe :autoplay="3000">
          <van-swipe-item v-for="(item, index) in msg.imgList" :key="index">
            <img :src="item.img" alt="" />
          </van-swipe-item>
        </van-swipe>
      </div>
      <!--      标题-->
      <h1>{{ msg.name }}</h1>
      <p>{{ msg.info }}</p>
      <b>￥{{ msg.price }}</b>
      <ul>
        <li style="border-bottom: 0.01rem solid #ccc" @click="showProp">
          <h2>已选</h2>
          <p v-if="msg.edition">
            {{ msg.name }} {{ msg.edition[0].Memory }} ×1
          </p>
          <van-icon name="arrow" size="25" class="pointTo" />
        </li>

        <!--        已选详情-->
        <van-popup
          class="pop-up-box"
          v-model="show"
          closeable
          round
          position="bottom"
          :style="{ height: '75%' }"
        >
          <header v-if="msg.edition">
            <img :src="msg.edition[a].color[b].img" alt=""  />
            <div class="deploy">
              <h1>￥{{ msg.price }}</h1>
              <p>{{ msg.name }}<span>{{ msg.edition[a].Memory }}</span> <span>{{ msg.edition[a].color[b].color_list }}</span> </p>
            </div>
          </header>
          <!--          选择配置-->
          <div class="memory">
            <h1>版本</h1>
            <div
              class="box"
              v-for="(item, index) in msg.edition"
              :key="index"
              @click="fn(index)"
            >
              <span
                :class="make === index ? 'memory-border' : ''"
                @click="colorShow(index)"
                >{{ item.Memory }}<i>{{ item.edition_price }}元</i></span
              >
            </div>
          </div>
          <!--          选择颜色-->
          <div class="color">
            <h1>颜色</h1>
            <div class="boxs" v-if="msg.edition">
              <div
                :class="sub1 === index ? 'color-border' : 'box'"
                @click="fn1(index)"
                v-for="(item, index) in msg.edition[0].color"
                :key="item.id"
                v-show="one"
              >
                <span>{{ item.color_list }}</span>
              </div>
              <div
                :class="sub2 === index ? 'color-border' : 'box'"
                @click="fn2(index)"
                v-for="(item, index) in msg.edition[1].color"
                :key="item.id"
                v-show="two"
              >
                <span>{{ item.color_list }}</span>
              </div>
            </div>
          </div>
          <!--          购买数量-->
          <div class="buy-num">
            <h1>购买数量</h1>
            <van-stepper v-model="val" class="add" />
          </div>
          <!--          加入购物车-->
          <button>加入购物车</button>
        </van-popup>
        <li>
          <h2>送至</h2>
          <p>北京 - 东城区</p>
          <van-icon name="arrow" size="25" class="pointTo" />
        </li>
      </ul>
    </header>
    <div class="banner" v-for="(item, index) in msg.info_img" :key="index">
      <img :src="item.img" alt="" />
    </div>
    <!--    添加购物车-->
    <div class="add-to-shopping">
      <ul>
        <li>
          <van-icon name="wap-home-o" size="18" />
          <p>首页</p>
        </li>
        <li>
          <van-icon name="shopping-cart-o" size="18" />
          <p>购物车</p>
        </li>
      </ul>
      <button>加入购物车</button>
    </div>
  </div>
</template>

<script>
// import skuData from '../../../../public/data'
import { getListDetails } from "../../../api";
export default {
  name: "ListDetails",
  data() {
    return {
      msg: {},
      make: 0,
      one: true,
      two: false,
      sub1: 0,
      sub2: 0,
      a:0,
      b:0,
      val: 1,
      show: false,
    };
  },
  methods: {
    fn(i) {
      this.make = i;
    },
    fn1(i) {
      this.sub1 = i;
      // this.colorr = text.color_list
      this.b = i


    },
    fn2(i) {
      this.sub2 = i;
      this.b = i

    },
    getBack() {
      //返回首页
      this.$router.push("/home");
    },
    getList() {
      //获取数据
      getListDetails().then(res => {
        console.log(res);
        for (var i = 0; i < res.length; i++) {
          if (res[i].id === this.$route.query.id) {
            this.msg = res[i];
          }
        }
      });
    },
    //点击切换颜色
    colorShow(i) {
      this.one = !this.one;
      this.two = !this.two;
      this.a = i

    },
    //点击显示详情页
    showProp(){
      this.show = true;
    }
  },
  created() {
    this.getList();


  },
  watch:{
    imgList(){
      this.$nextTick(()=>{
          this.getList()
      })
    }

  }
};
</script>

<style scoped lang="less">
.list-details {
  width: 100%;
  .title {
    width: 100%;
    overflow: hidden;
    position: fixed;
    left: 0;
    top: 0;
    background: #fff;
    z-index: 10;
    .getBack {
      margin-left: 0.1rem;
      margin-top: 0.1rem;
      margin-bottom: 0.1rem;
    }
  }
  header {
    width: 100%;
    margin-top: 0.5rem;
    img {
      width: 100%;
    }
    h1 {
      text-indent: 0.1rem;
      font-size: 0.16rem;
      margin-top: 0.1rem;
      display: block;
    }
    p {
      font-size: 0.13rem;
      color: #757575;
      margin-top: 0.04rem;
      margin-left: 0.1rem;
      margin-right: 0.1rem;
      line-height: 0.18rem;
    }
    b {
      text-indent: 0.1rem;
      font-size: 0.24rem;
      color: #ea625b;
      margin-top: 0.04rem;
      display: block;
      margin-bottom: 0.2rem;
    }
    ul {
      li {
        width: 90%;
        margin-left: 5%;
        height: 0.55rem;
        line-height: 0.55rem;
        overflow: hidden;
        background: #fafafa;
        h2 {
          float: left;
          text-indent: 0.2rem;
          color: #737373;
          font-size: 0.14rem;
        }
        p {
          float: left;
          margin-top: 0.19rem;
          font-size: 0.13rem;
        }
        .pointTo {
          float: right;
          margin-top: 0.15rem;
        }
      }
      .pop-up-box {
        header {
          display: flex;
          img {
            width: 1.1rem;
            height: 1.1rem;
            border: 0.01rem solid #ccc;
            margin-left: 5%;
          }
          .deploy {
            h1 {
              font-size: 0.34rem;
              margin-top: 0.2rem;
            }
            p {
              font-size: 0.13rem;
              text-indent: 0.07rem;
              color: #212121;
              span{
                margin-left: 0.04rem;
              }
            }
          }
        }
        .memory {
          h1 {
            font-size: 0.13rem;
            margin-left: 4%;
            text-indent: 0;
            margin-top: 0.2rem;
            margin-bottom: 0.07rem;
          }
          .box {
            width: 90%;
            margin-left: 5%;
            overflow: hidden;
            span {
              width: 99%;
              height: 0.32rem;
              display: block;
              background: #fff;
              line-height: 0.32rem;
              text-indent: 0.15rem;
              color: #8f8f94;
              border: 0.02rem solid #ccc;
              margin-top: 0.1rem;
              i {
                float: right;
                margin-right: 0.15rem;
                font-style: normal;
              }
            }
            .memory-border {
              border: 0.02rem solid #f56600;
              color: #f56600;
            }
          }
        }
        .color {
          h1 {
            font-size: 0.13rem;
            margin-left: 4%;
            text-indent: 0;
            margin-top: 0.2rem;
            margin-bottom: 0.07rem;
          }
          .boxs {
            width: 86%;
            margin-left: 7%;
            overflow: hidden;
            .box {
              float: left;
              width: 20%;
              height: 0.32rem;
              margin-left: 3%;
              margin-top: 0.14rem;
              border: 0.02rem solid #ccc;
              text-align: center;
              line-height: 0.32rem;
              font-size: 0.14rem;
              color: #8f8f94;
            }
          }
          .color-border {
            float: left;
            width: 20%;
            height: 0.32rem;
            margin-left: 3%;
            margin-top: 0.14rem;
            border: 0.02rem solid #f56600;
            text-align: center;
            line-height: 0.32rem;
            font-size: 0.14rem;
            color: #f56600;
          }
        }
        .buy-num {
          overflow: hidden;
          h1 {
            float: left;
            font-size: 0.13rem;
            margin-left: 4%;
            text-indent: 0;
            margin-top: 0.35rem;
            margin-bottom: 0.07rem;
          }
          .add {
            float: right;
            border: 0.02rem solid #bbb;
            border-radius: 0.04rem;
            margin-top: 0.25rem;
            margin-right: 4%;
          }
        }
        button {
          width: 90%;
          height: 0.3rem;
          margin-left: 5%;
          background: #ff6700;
          margin-top: 0.15rem;
          border: none;
          border-radius: 0.2rem;
          color: #fff;
          font-size: 0.14rem;
        }
      }
    }
  }
  .banner {
    width: 100%;
    img {
      width: 100%;
    }
  }
  .add-to-shopping {
    width: 90%;
    height: 0.39rem;
    margin-left: 5%;
    position: fixed;
    bottom: 0.2rem;
    background: #fff;
    display: flex;
    border-radius: 0.05rem;
    align-items: center;
    z-index: 10;
    ul {
      display: flex;
      li {
        text-align: center;
        margin-left: 0.15rem;
      }
    }
    button {
      width: 40%;
      height: 70%;
      margin-left: 30%;
      border-radius: 0.14rem;
      background: #f56600;
      color: #fff;
      border: none;
      font-size: 0.15rem;
    }
  }
}
</style>
