<template>
    <div class="newaddress">
        <div class="header">
            <van-icon name="arrow-left"  size="25" class="h-left" @click="goadress"/>
            <p>新增收获地址</p>
            <van-icon name="search" size="25" class="h-right"/>
        </div>
        <van-address-edit
                :area-list="areaList"
                show-delete
                show-set-default
                show-search-result
                :search-result="searchResult"
                :area-columns-placeholder="['请选择', '请选择', '请选择']"
                @save="onSave"
                @delete="onDelete"
                @change-detail="onChangeDetail"
        />
    </div>
</template>

<script>
    import { Toast } from 'vant';
    import coutry from "../../../assets/js/coutry";
    export default {
        data() {
            return {
                areaList:coutry,
                searchResult: [],
                parameters:{},
                arr:[],
            };
        },
        methods: {
            //添加地址
            onSave(content) {
                Toast('添加成功');
                //this.parameters=content;
                this.arr = JSON.parse(sessionStorage.getItem('arr')) || [];
                this.arr.push(content)
                sessionStorage.setItem('arr',JSON.stringify(this.arr));
                this.$router.push('address')
            },
            onDelete() {
                Toast('delete');
            },
            onChangeDetail(val) {
                if (val) {
                    this.searchResult = [
                        {
                            name: '黄龙万科中心',
                            address: '杭州市西湖区',
                        },
                    ];
                } else {
                    this.searchResult = [];
                }
            },
            //跳转
            goadress(){
                this.$router.push('address')
            },

        },
    };
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
</style>