import $http from "./request";
console.log($http);
//首页轮播图
export const slideshow = () => $http("/data/rotationChart.json");
//首页商品列表
export const getList = () => $http("/data/homeGoods.json");
//首页商品列表详情
export const getListDetails = () => $http("/data/homeGoods.json");
