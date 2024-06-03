import {request} from '../service/request';

const getHttp = (url:string, params = {}, headers = {}) => request({
  url,
  method: 'get',
  params: params,
  headers: headers,
});

const postHttp = (url:string, data = {}, headers = {}) => request({
  url,
  method: 'post',
  data: data,
  headers: {
    ...headers,
    'Content-Type': 'application/x-www-form-urlencoded',
  },
});

const postHttpHeaders = (url:string, headers = {}) => request({
  url,
  method: 'post',
  headers: headers,
});

const postHttpMulti = (url:string, data = {}, headers = {}) => request({
  url,
  method: 'post',
  data: data,
  headers: {
    ...headers,
    'Content-Type': 'multipart/form-data',
  },
});

const postHttpJSON = (url:string, data = {}, headers = {}) => request({
  url,
  method: 'post',
  data: data,
  headers: {
    ...headers,
    'Content-Type': 'application/json;charset=utf-8',
  },
});

const postHttpParams = (url:string, headers = {}, params = {}) => request({
  url,
  method: 'post',
  headers: headers,
  params: params,
});

const putHttp = (url:string, data = {}, headers = {}) => request({
  url,
  method: 'put',
  data: data,
  headers: headers,
});

const putHttpJSON = (url:string, data = {}, headers = {}) => request({
  url,
  method: 'put',
  data: data,
  headers: {
    ...headers,
    'Content-Type': 'application/json;charset=utf-8',
  },
});

const putHttpParams = (url:string, params = {}, headers = {}) => request({
  url,
  method: 'put',
  params: params,
  headers: headers,
});

const deleteHttp = (url:string, params = {}, headers = {}) => request({
  url,
  method: 'delete',
  params: params,
  headers: headers,
});

export {
  getHttp,
  postHttp,
  postHttpHeaders,
  postHttpMulti,
  postHttpJSON,
  postHttpParams,
  putHttp,
  putHttpJSON,
  putHttpParams,
  deleteHttp
};