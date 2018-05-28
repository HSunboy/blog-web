export default {
    // baseUrl:"http://10.0.200.59:8080",
    baseUrl:"http://blog.hsxixiboy.com:8080",
    // baseUrl:"http://101.132.45.2:8080"
}
export const errorObj={
    "401":"请先登录",
    "403":"无权限访问",
    "500":"服务器异常",
    "9999":"未知错误"
}
export function getErrorObj(code,ErrorData){
    let errorMsg=errorObj[code];
    if(!errorMsg){
        code="9999";
        errorMsg=errorObj[code]
    }

    return {
        errorCode:code,
        errorMsg:errorMsg,
        data:ErrorData
    }
}