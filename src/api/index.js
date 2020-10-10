import $http from './request'
console.log($http)

//购物车推荐数据请求
export const shoppingrec = ()=> $http('/data/homeGoods.json')