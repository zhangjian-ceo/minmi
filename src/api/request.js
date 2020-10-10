import axios from "axios";
// axios.defaults.baseURL = "http://localhost:3000";
axios.defaults.timeout = 100000;


axios.interceptors.request.use(
    function(config) {
        // loadingInstance = Loading.service({ fullscreen: true });
        return config;
    },
    function(error) {
        return Promise.reject(error);
    }
);

// 添加一个响应拦截器
axios.interceptors.response.use(
    function(response) {
        // loadingInstance.close();
        return response.data;
    },
    function(error) {
        return Promise.reject(error);
    }
);

//请求方式进行一次封装
function $http(url, method = "GET", data = {}) {


    let promise = null;
    return new Promise(function(resolve, reject) {
        if (method === "GET") {
            promise = axios.get(url, {
                params: data
            });
        } else if (method === "POST") {
            promise = axios.post(url, data);
        }
        promise
            .then(res => {
                resolve(res);
            })
            .catch(error => {
                reject(error);
            });

        return promise;
    });
}

export default $http;
