<template>
    <div class="mine">
        <div class="header">
            <div class="h-top">
                <img src="../../assets/image/keji.jpg"/>
                <p>666666</p>
            </div>
            <div class="h-content">
                <div class="h-l">我的订单</div>
                <div class="h-r">
                    <p>全部订单</p>
                    <van-icon name="arrow" class="right"/>
                </div>
            </div>
            <ul class="h-button">
                <li>
                    <van-icon name="shopping-cart-o" size="30" class="tubiao"/>
                    <p>待付款</p>
                </li>
                <li>
                    <van-icon name="coupon-o" size="30" class="tubiao"/>
                    <p>优惠券</p>
                </li>
                <li>
                    <van-icon name="star" size="30" class="tubiao"/>
                    <p>收藏</p>
                </li>
            </ul>
        </div>
        <ul class="content1">
            <li>
                <van-icon name="like-o" size="25" class="biao"/>
                <div class="list">
                    <p>会员中心</p>
                    <van-icon name="arrow" size="20" class="arrows"/>
                </div>
            </li>
            <li>
                <van-icon name="location-o" size="25" class="biao"/>
                <div class="list" style="border-bottom: none"  @click="skipaddress">
                    <p>收获地址</p>
                    <van-icon name="arrow" size="20" class="arrows" />
                </div>
            </li>
        </ul>
        <ul class="content1">
            <li>
                <van-icon name="coupon-o" size="25" class="biao"/>
                <div class="list">
                    <p>我的优惠</p>
                    <van-icon name="arrow" size="20" class="arrows"/>
                </div>
            </li>
            <li>
                <van-icon name="comment-o" size="25" class="biao"/>
                <div class="list" style="border-bottom: none">
                    <p>我的意见</p>
                    <van-icon name="arrow" size="20" class="arrows"/>
                </div>
            </li>
        </ul>
        <ul class="content2">
            <li>
                <van-icon name="clock-o" size="25" class="biao"/>
                <div class="list" style="border-bottom: none">
                    <p>浏览记录</p>
                    <van-icon name="arrow" size="20" class="arrows"/>
                </div>
            </li>
        </ul>
        <ul class="content2">
            <li>
                <van-icon name="qr" size="25" class="biao"/>
                <div class="list" style="border-bottom: none">
                    <p>我的名片</p>
                    <van-icon name="arrow" size="20" class="arrows"/>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "Mine",
        methods:{
            skipaddress(){
                this.$router.push('/address')
            }
        }
    }
</script>

<style scoped lang="less">
    .header{
        width: 100%;
        .h-top{
            width: 100%;
            height: 0.8rem;
            background: #F37D0F;
            img{
                width: 0.6rem;
                height: 0.6rem;
                border-radius: 50%;
                margin-left: 0.2rem;
                margin-top: 0.1rem;
                float: left;
            }
            p{
                float: left;
                line-height: 0.8rem;
                font-size: 0.14rem;
                color: #fff;
                margin-left: 0.1rem;
            }
        }
        .h-content{
            width: 100%;
            height: 0.5rem;
            border-bottom: 0.01rem solid #D9D9D9;
            display: flex;
            justify-content: space-between;
            .h-l{
                line-height: 0.5rem;
                font-size: 0.14rem;
                color: #212121;
                margin-left: 0.15rem;
            }
            .h-r{
                line-height: 0.5rem;
                font-size: 0.14rem;
                color: #212121;
                margin-right: 0.15rem;
                p{
                    float: left;
                }
                .right{
                    float: left;
                    line-height: 0.53rem;
                    margin-left: 0.03rem;
                }
            }
        }
        .h-button{
            width: 100%;
            height: 1rem;
            border-bottom: 0.1rem solid #F5F5F5;
            display: flex;
            justify-content: space-around;
            align-items: center;
            li{
                width: 0.5rem;
                text-align: center;
                .tubiao{
                }
                p{
                    font-size: 0.14rem;
                    margin-top: 0.05rem;
                }
            }

        }
    }
    .content1{
        width: 100%;
        height: 1rem;
        border-bottom: 0.1rem solid #F5F5F5;
        li{
            width: 100%;
            .biao{
                float: left;
                color: #FF6600;
                line-height: 0.5rem;
                margin-left: 0.2rem;
            }
            .list{
                width: 3.18rem;
                height: 0.5rem;
                border-bottom: 0.01rem solid #D9D9D9;
                float: right;
                p{
                    font-size: 0.15rem;
                    line-height: 0.5rem;
                    float: left;
                }
                .arrows{
                    float: right;
                    line-height: 0.5rem;
                    margin-right: 0.05rem;
                }
            }
        }
    }
    .content2{
        width: 100%;
        height: 0.5rem;
        border-bottom: 0.1rem solid #F5F5F5;
        .biao{
            float: left;
            color: #FF6600;
            line-height: 0.5rem;
            margin-left: 0.2rem;
        }
        .list{
            width: 3.18rem;
            height: 0.5rem;
            float: right;
            p{
                font-size: 0.15rem;
                line-height: 0.5rem;
                float: left;
            }
            .arrows{
                float: right;
                line-height: 0.5rem;
                margin-right: 0.05rem;
            }
        }
    }
</style>