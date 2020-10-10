import $http from './request'
console.log($http)

export const added = () => $http("/data/data/address.json");