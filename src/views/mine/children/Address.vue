<template>
    <div class="address">
        <div class="header">
            <van-icon name="arrow-left"  size="25" class="h-left" @click="gomine"/>
            <p>收获地址</p>
            <van-icon name="search" size="25" class="h-right"/>
        </div>
        <ul class="content" v-for="item in arr" :key="item.id">
            <li>
                <p>{{item.name}}</p>
                <p style="color: #2F2F2F">{{item.phone}}<span>[默认]</span></p>
                <p style="color:#A2A2A2">删除</p>
            </li>
            <li style="border-bottom: none">
                <div class="text">
                    <h1>{{item.address_region}}</h1>
                    <h1 style="margin-top: 0.04rem;">{{item.address_info}}</h1>
                </div>
                <van-icon name="arrow" size="20" class="luo"/>
            </li>
        </ul>
        <div class="btn" @click="skipnew">新建地址</div>
    </div>
</template>

<script>
    import {added} from '../../../api'
    export default {
        name: "Address",
        data(){
            return{
                arr:{}
            }
        },
        methods:{
            addeds(){
                added().then(res=>{
                    // console.log(res)
                    this.arr=res
                })
            },
            skipnew(){
                this.$router.push('newaddress')
            },
            gomine(){
               this.$router.push('mine')
            }
        },
        created() {
            this.addeds()
        }
    }
</script>

<style scoped lang="less">
    .header{
        width: 100%;
        height: 0.5rem;
        background: #F2F2F2;
        position: relative;
        .h-left{
            color: #676767;
            position: absolute;
            left: 0.15rem;
            top:0.15rem
        }
        p{
            line-height: 0.5rem;
            font-size: 0.14rem;
            text-align: center;
        }
        .h-right{
            color: #676767;
            position: absolute;
            right: 0.15rem;
            top:0.15rem
        }
    }
    .content{
        width: 3.5rem;
        height: 1rem;
        border: 0.01rem solid #EEEEEE;
        margin: 0.15rem auto;
        border-radius: 0.05rem;
        li{
            width: 3.2rem;
            height: 0.5rem;
            border-bottom: 0.01rem solid #EEEEEE;
            margin: auto;
            display: flex;
            justify-content: space-between;
            p{
                font-size: 0.15rem;
                color: #FF7316;
                line-height: 0.5rem;
                span{
                    font-size: 0.12rem;
                    margin-left: 0.05rem;
                    color: #FF7316;
                }
            }
            .text{
                /*line-height: 0.5rem;*/
                margin-top: 0.1rem;
                h1{
                    font-size: 0.14rem;
                    line-height: 100%;
                    color: #3C3C3C;
                }
            }
            .luo{
                line-height: 0.5rem;
                color: #A2A2A2;
            }
        }
    }
    .btn{
        width: 100%;
        height: 0.5rem;
        background: #FF7316;
        position: fixed;
        left: 0;
        bottom: 0.5rem;
        font-size: 0.14rem;
        color: #FFF;
        line-height: 0.5rem;
        text-align: center;
    }
</style>