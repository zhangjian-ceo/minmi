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
    <div class="empty">
      购物车还是空的
      <span>去逛逛</span>
    </div>
    <div class="content">
        <div class="thinking">
          实时推荐你的心心念念
          <div class="thinking-left"></div>
          <div class="thinking-right"></div>
        </div>
      <div class="recommend">
          <ul>
            <li>
              <div class="img"><img src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=318916019,1038898963&fm=26&gp=0.jpg" alt=""></div>
              <h1>这就是传说中的僚基</h1>
              <div class="name">压感屏幕指纹，手持超级夜景</div>
              <div class="pic">¥3458</div>
            </li>
            <li>
              <div class="img"><img src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=318916019,1038898963&fm=26&gp=0.jpg" alt=""></div>
              <h1>这就是传说中的僚基</h1>
              <div class="name">压感屏幕指纹，手持超级夜景</div>
              <div class="pic">¥3458</div>
            </li>
            <li>
              <div class="img"><img src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=318916019,1038898963&fm=26&gp=0.jpg" alt=""></div>
              <h1>这就是传说中的僚基</h1>
              <div class="name">压感屏幕指纹，手持超级夜景</div>
              <div class="pic">¥3458</div>
            </li>
          </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "shopping"
};
</script>

<style scoped lang="less">
.shopping {
  width: 100%;
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
  .empty {
    width: 100%;
    height: 1rem;
    background: #ebebeb;
    margin-top: 0.5rem;
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
}
</style>
