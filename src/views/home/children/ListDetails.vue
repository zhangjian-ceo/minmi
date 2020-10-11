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
      <img :src="msg.img" alt="" />
      <h1>{{ msg.name }}</h1>
      <p>{{ msg.info }}</p>
      <b>￥{{ msg.price }}</b>
      <ul>
        <li style="border-bottom: 0.01rem solid #ccc">
          <h2>已选</h2>
          <p></p>
          <van-icon name="arrow" size="25" class="pointTo" />
        </li>
        <li>
          <h2>送至</h2>
          <p></p>
          <van-icon name="arrow" size="25" class="pointTo" />
        </li>
      </ul>
    </header>
    <div class="banner" v-for="(item, index) in msg.info_img" :key="index">
      <img :src="item.img" alt="" />
    </div>
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
import { getListDetails } from "../../../api";
export default {
  name: "ListDetails",
  data() {
    return {
      msg: {}
    };
  },
  methods: {
    getBack() {
      this.$router.push("/home");
    },
    getList() {
      getListDetails().then(res => {
        console.log(res);
        for (var i = 0; i < res.length; i++) {
          if (res[i].id === this.$route.query.id) {
            this.msg = res[i];
          }
        }
      });
    }
  },
  created() {
    this.getList();
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
        }
        .pointTo {
          float: right;
          margin-top: 0.15rem;
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
  .add-to-shopping{
    width: 90%;
    height: 0.39rem;
    margin-left: 5%;
    position: fixed;
    bottom: 0.2rem;
    background: #fff;
    display: flex;
    border-radius: 0.05rem;
    align-items: center;
    ul{
      display: flex;
      li{
        text-align: center;
        margin-left: 0.15rem;
      }
    }
    button{
      width: 40%;
      height: 70%;
      margin-left: 30%;
      border-radius: 0.14rem;
      background: #F56600;
      color: #fff;
      border: none;
      font-size: 0.15rem;
    }
  }
}
</style>
