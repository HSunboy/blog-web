import axios from "axios";
import config, { getErrorObj } from "./config"
import store from "@/store";

let nowCode="";
const axiosInstance = axios.create({
    baseURL: config.baseUrl,
    timeout: 20000,
    withCredentials: true
});
function promiseFunc(path, params, needLogin) {
    if (needLogin) {
        if(!store.getUser()){
            location.replace("#/login")
            return Promise.reject("未登陆");
        }
        params = params || {};
        params.headers = {
            token: store.getUser().token
        }
    }
    return new Promise(function (resolve, reject) {
        axiosInstance.get(path, params)
            .then(function (response) {

                resolve(response.data);
            })
            .catch(function (error) {
                let errorObj
                if (error.response) {
                    if(error.response.status=="401"){
                        location.replace("#/login")
                    }
                    errorObj = getErrorObj(error.response.status, error);
                } else {
                    errorObj = getErrorObj(null, error);
                }

                reject(errorObj);
            });
    });
}
function promiseFuncPost(path, params, needLogin,isUpload) {
    let headers={};
    if (needLogin) {
        if(!store.getUser()){
            location.replace("#/login")
            
            return Promise.reject("未登陆");
        }
        headers = {
            token: store.getUser().token
        }
        if(isUpload){
            headers["content-type"]='multipart/form-data';
        }
    }
    return new Promise(function (resolve, reject) {
        axiosInstance.post(path, params,{headers})
            .then(function (response) {

                resolve(response.data);
            })
            .catch(function (error) {
                let errorObj
                if (error.response) {
                    if(error.response.status=="401"){
                        location.replace("/login")
                    }
                    errorObj = getErrorObj(error.response.status, error);
                } else {
                    errorObj = getErrorObj(null, error);
                }

                reject(errorObj);
            });
    });
}
const req = {
    "getAllResources": function (params) {
        return promiseFunc("/blogService/v1/resource/getallresources", params, true);
    },
    "login": function (params) {
        params.params.a=nowCode;
        return promiseFunc("/blogService/v1/sys/login", params);
    },
    "getAuth": function () {
        let random = Math.random();
        nowCode=random;
        return config.baseUrl + "/blogService/v1/sys/getcaptcha?a=" + random;
    },
    "newRole": function (params) {
        return promiseFuncPost("/blogService/v1/role/savesinglerole",params,true);
    },
    "getArticle":function(params){
    	return promiseFunc("/blogService/v1/homepage/getarticleslist",params)
    },
    "getArticleDetail":function(params){
    	return promiseFunc("/blogService/v1/apparticle/getarticle",params)
    }



}
export default req;