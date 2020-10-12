<template>
  <div class="home">
    <header>
      <img src="../../assets/images/timg.jpg" alt="" />
      <div class="search">
        <input type="text" placeholder="小米10至尊纪念版" />
        <van-icon name="search" size="18" class="zoom" />
      </div>
    </header>
    <!--    首页轮播-->
    <div class="carousel">
      <van-swipe :autoplay="3000">
        <van-swipe-item v-for="(item, index) in msg" :key="index">
          <img :src="item.img" alt="" />
        </van-swipe-item>
      </van-swipe>
    </div>
    <nav>
      <ul>
        <li>
          <van-icon name="balance-pay" size="25" color="#666" />
          <p>折扣</p>
        </li>
        <li>
          <van-icon name="comment-o" size="25" color="#666" />
          <p>评论</p>
        </li>
        <li>
          <van-icon name="like-o" size="25" color="#666" />
          <p>喜欢</p>
        </li>
        <li>
          <van-icon name="qr" size="25" color="#666" />
          <p>二维码</p>
        </li>
        <li>
          <van-icon name="notes-o" size="25" color="#666" />
          <p>通知</p>
        </li>
      </ul>
    </nav>
    <!--    商品列表-->
    <div class="list">
      <ul>
        <li
          v-for="(item, index) in listMsg"
          :key="index"
          @click="toListDetails(item.id)"
        >
          <img :src="item.img" alt="" />
          <p>{{ item.name }}</p>
          <i>{{ item.content }}</i>
          <b>￥{{ item.price }}</b>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { slideshow, getList } from "../../api";
export default {
  name: "Home",
  components: {},
  data() {
    return {
      msg: "",
      listMsg: ""
    };
  },
  methods: {
    toListDetails(id) {
      //跳转详情页
      this.$router.push({
        name: "ListDetails",
        query: { id: id }
      });
    },
    getcasual() {
      //获取轮播图数据
      slideshow().then(res => {
        this.msg = res;
        console.log(res);
      });
    },
    getListArr() {
      //获取图片列表
      getList().then(res => {
        this.listMsg = res;
        console.log(res);
      });
    }
  },
  created() {
    this.getcasual();
    this.getListArr();
  }
};
</script>
<style lang="less">
.home {
  width: 100%;
  header {
    width: 100%;
    overflow: hidden;
    background: #f2f2f2;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    img {
      float: left;
      width: 0.5rem;
      height: 0.5rem;
      border-radius: 50%;
      margin-left: 0.15rem;
      margin-top: 0.12rem;
      margin-bottom: 0.12rem;
    }
    .search {
      float: right;
      margin-right: 0.3rem;
      height: 0.28rem;
      width: 55%;
      margin-top: 0.21rem;
      position: relative;
      input {
        width: 100%;
        height: 100%;
        border: none;
        border: 0.02rem solid #e5e5e5;
        border-radius: 0.2rem;
        text-indent: 18%;
        color: gray;
      }
      .zoom {
        position: absolute;
        left: 8%;
        top: 0.05rem;
        color: #b2b2b2;
      }
    }
  }
  .carousel {
    width: auto;
    height: 1.8rem;
    margin-top: 0.74rem;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
    }
  }
  nav {
    width: 100%;
    height: 0.8rem;
    background: #fff;
    border-bottom: 0.15rem solid #f5f5f5;
    ul {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: space-around;
      text-align: center;
      align-items: center;
      li {
        p {
          color: #999;
          margin-top: 0.04rem;
        }
      }
    }
  }
  .list {
    ul {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      li {
        width: 49%;
        img {
          width: 100%;
        }
        p {
          text-indent: 0.1rem;
          font-size: 0.16rem;
          margin-top: 0.1rem;
        }
        i {
          font-style: normal;
          text-indent: 0.1rem;
          font-size: 0.12rem;
          display: block;
          color: #757575;
          margin-top: 0.04rem;
        }
        b {
          text-indent: 0.1rem;
          font-size: 0.14rem;
          color: #ea625b;
          margin-top: 0.04rem;
          display: block;
          margin-bottom: 0.2rem;
        }
      }
    }
  }
}
</style>
