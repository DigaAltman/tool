import axios from 'axios';


/**
 * HTTP 请求类型
 * @type {string}
 */
const GET = "GET", POST = "POST";

// 请求状态码
const SUCCESS = 200,
  SERVER = 500,
  VALIDATION = 501,
  NEED_LOGIN = 502,
  TOKEN = 503,
  AUTHORITY = 504,
  ERROR = 404;


/**
 * 底层通用请求方法
 * @param type    请求类型
 * @param url     请求URL地址
 * @param params  携带参数
 * @param loading 请求进行时触发此函数
 * @param success 请求成功时触发此函数
 * @param error   请求失败时触发此函数
 * @param final   结束前触发此函数
 * @return {Promise<unknown>}
 */
function request(type, url, params, loading, success, error, final) {

  return new Promise((resolve, reject) => {
    let promise;

    switch (type) {
      case GET:
        promise = axios.get(url, {params: params});
        break;

      case POST:
        promise = axios.post(url, {params: params});
        break;

    }

    // 触发 loading
    loading instanceof Function && loading();

    promise
      .then(function (success) {
        // 请求成功, 响应成功
        if(success.data.status == SUCCESS) {
            success instanceof Function && success();
            resolve(success.data);
        }
        // 请求成功, 响应失败
        else {
            error instanceof Function && error();
            reject(success.data.message);
        }
      })
      .catch(function(error) {
        error instanceof Function && error(error);
        reject('无法访问后台服务器!!');
      });

  });
}


export default {

  /**
   * GET请求, 基于底层的 request 方法实现
   */
  get(url, params, loading, success, error, final) {
    return request(GET, url, params, loading, success, error, final);
  },

  /**
   * POST请求, 基于底层的 request 方法实现
   */
  post(url, params, loading, success, error, final) {
    return request(POST, url, params, loading, success, error, final);
  }

}
