<template>
  <div class="shopping">
    <div class="header">
      购物车
      <div class="header-left">
        <span class="iicon iconfont  icon-changyongicon-1"></span>
      </div>
      <div class="header-right">
        <span class="iicon iconfont  icon-sousuo"></span>
      </div>
    </div>
    <div class="logo" v-if="shoppingArr.length === 0 ">
      <div class="logo-left">登录后享受更多优惠</div>
      <div class="logo-right">去登录<span class="iiconn iconfont icon-changyongicon-"></span> </div>
    </div>
    <div class="empty" v-if="shoppingArr.length === 0 ">
      购物车还是空的
      <span>去逛逛</span>
    </div>
    <div class="details" v-else>
      <div class="imgg"><img src="../../../src/assets/img/timg.jpg" alt=""></div>
      <div class="mess">
        <div class="mess-name">小米8屏幕指纹版</div>
        <div class="tota">¥7399</div>
        <div class="number">
          <van-stepper v-model="value" />
        </div>
      </div>
      <div class="remove">
        <span class="iii iconfont icon-iconfontshanchu5"></span>
      </div>
    </div>
    <div class="content">
        <div class="thinking">
          实时推荐你的心心念念
          <div class="thinking-left"></div>
          <div class="thinking-right"></div>
        </div>
      <div class="recommend">
          <ul>
            <li v-for="item in recom" :key="item.id">
              <div class="img"><img :src="item.img" alt=""></div>
              <h1>{{ item.name }}</h1>
              <div class="name">{{ item.content }}</div>
              <div class="pic">{{ item.price }}</div>
            </li>
          </ul>
      </div>
    </div>
    <div class="picre">
      <div class="price">
        <div class="num">共<p>{{4}}</p>件 金额:</div>
        <div class="money">{{num}}<span>元</span></div>
      </div>
      <div class="cont">继续购物</div>
      <div class="close">去结算</div>
    </div>
  </div>
</template>

<script>
  import {shoppingrec} from '../../api'
export default {
  name: "shopping",
  data(){
    return {
      recom:{},
      shoppingArr:[{}],
      value: 1,
      num:0
    }
  },
  methods:{
    //渲染购物车推荐信息
    newShopping(){
      shoppingrec().then(res =>{
        console.log(res)
        this.recom = res
        // this.shoppingArr = res
      })
    },
    //计算总价
    price(){

    }
  },
  created() {
    this.newShopping()
    console.log(this.shoppingArr)
  }
};
</script>

<style scoped lang="less">
.shopping {
  width: 100%;
  margin-bottom: 1.3rem;
  .header {
    width: 100%;
    height: 0.5rem;
    background: #f2f2f2;
    position: fixed;
    left: 0;
    top: 0;
    overflow: hidden;
    font-size: 0.2rem;
    line-height: 0.5rem;
    color: #666;
    text-align: center;
    .header-left {
      float: left;
      margin-left: 0.05rem;
      .iicon {
        font-size: 0.3rem;
      }
    }
    .header-right {
      float: right;
      margin-right: 0.15rem;
      .iicon {
        font-size: 0.25rem;
      }
    }
  }
  .logo{
    width: 100%;
    height: 0.5rem;
    margin-top: 0.5rem;
    display: flex;
    justify-content: space-between;
      .logo-left{
        font-size: 0.18rem;
        line-height: 0.5rem;
        color: #000;
        text-indent: 0.2rem;
      }
    .logo-right{
      font-size: 0.15rem;
      line-height: 0.5rem;
      color: #757575;
      margin-right: 0.1rem;
      /*.iiconn{*/
      /*  font-size: 0.22rem;*/
      /*  line-height: 0.5rem;*/
      /*}*/
    }
  }
  .empty {
    width: 100%;
    height: 1rem;
    background: #ebebeb;
    text-align: center;
    font-size: 0.15rem;
    line-height: 1rem;
    color: #ABABAB;
    span{
      height: 0.5rem;
      border: 0.01rem solid #C8C8C8;
      font-size: 0.15rem;
      line-height: 0.5rem;
      color: #000;
      text-align: center;
      padding: 0.01rem;
    }
  }
  .details{
    width: 100%;
    height: 1.5rem;
    background: #fff;
    overflow: hidden;
    margin-top: 0.5rem;
    .imgg{
      width: 1.2rem;
      height: 1.2rem;
      border: 0.01rem solid #eee;
      margin-left: 0.15rem;
      margin-top: 0.1rem;
      float: left;
      img{
        width: 100%;
        height: 100%;
      }
    }
    .mess{
      float: left;
      margin-left: 0.15rem;
      .mess-name{
        font-size: 0.15rem;
        line-height: 100%;
        color: #666;
        margin-top: 0.2rem;
      }
      .tota{
        font-size: 0.14rem;
        line-height: 100%;
        color: #999;
        margin-top: 0.2rem;
      }
      .number{
        margin-top: 0.2rem;
      }
    }
    .remove{
      width: 0.05rem;
      height: 0.05rem;
      float: left;
      margin-left: 0.5rem;
      margin-top: 0.85rem;
      .iii{
        font-size: 0.3rem;
      }
    }
  }
  .content{
    width: 100%;

    .thinking{
      margin-top: 0.05rem;
      font-size: 0.13rem;
      line-height: 0.4rem;
      color: #868686;
      text-align: center;
      position: relative;
      .thinking-left{
        width: 0.9rem;
        height: 0.1rem;
        border-top: 0.01rem solid #E3E3E3;
        position: absolute;
        left: 0.2rem;
        top: 0.2rem;
      }
      .thinking-right{
        width: 0.9rem;
        height: 0.1rem;
        border-top: 0.01rem solid #E3E3E3;
        position: absolute;
        right: 0.2rem;
        top: 0.2rem;
      }
    }
    .recommend{
      width: 100%;

      ul{
        display: flex;
        width: 100%;
        justify-content: space-between;
        flex-wrap: wrap;
        li{
          width: 49.5%;
          margin-top: 0.07rem;
          .img{
            width: 100%;
            height: 2rem;
            img{
              width: 100%;
              height: 100%;
            }
          }
          h1{
            font-size: 0.14rem;
            line-height: 100%;
            color: #000;
            margin-top: 0.05rem;
            margin-left: 0.1rem;
          }
          .name{
            font-size: 0.13rem;
            line-height: 100%;
            color: #757575;
            margin-top: 0.05rem;
            margin-left: 0.1rem;
          }
          .pic{
            font-size: 0.13rem;
            line-height: 100%;
            color: #EA625B;
            margin-top: 0.05rem;
            margin-left: 0.1rem;

          }
        }
      }
    }
  }
  .picre{
    width: 100%;
    height: 0.52rem;
    background: #ccc;
    position: fixed;
    bottom: 0.5rem;
    left: 0;
    display: flex;
    .price{
      width: 33.33%;
      .num{
        font-size: 0.13rem;
        line-height: 100%;
        color: #999;
        margin-top: 0.08rem;
        text-align: center;
        p{
          font-size: 0.13rem;
          line-height: 100%;
          color: #999;
          display: inline-block;
        }
      }
      .money{
        font-size: 0.2rem;
        line-height: 100%;
        color: #FF5722;
        text-align: center;
        margin-top: 0.08rem;
        font-weight: bold;
        span{
          font-size: 0.13rem;
          line-height: 100%;
          color: #A2A2A2;
          margin-left: 0.03rem;
        }
      }
    }
    .cont{
      width: 33.33%;
      font-size: 0.18rem;
      line-height:0.52rem;
      color: #000;
      text-align: center;
      background: #F4F4F4;
    }
    .close{
      width: 33.33%;
      font-size: 0.18rem;
      line-height: 0.52rem;
      color: #fff;
      background: #FF6700;
      text-align: center;
    }
  }
}
</style>
