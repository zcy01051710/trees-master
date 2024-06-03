import axios from "axios";
import { Toast, Notify } from "react-vant";
import { store } from "../app/store";
// 创建请求
export const request = axios.create({
  // 设置
  timeout: 5000,
  timeoutErrorMessage: "请求超时， 请重新请求",
  // 基础路径
  baseURL: "/api",
});

// 添加请求拦截器
request.interceptors.request.use(
  // 请求前
  function (config) {
    // 在发送请求之前做些什么
    // 咱们这里干点啥

    // 获取仓库
    const state = store.getState();
    // 获取仓库数据
    const { userId, sessionId } = state.user.userInfo;
    // 判断
    if (userId && sessionId) {
      // 请求头 携带 userId  sessionId
      config.headers.userId = userId;
      config.headers.sessionId = sessionId;
    }
    return config;
  },
  // 请求前报错函数
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);

// 添加响应拦截器
request.interceptors.response.use(
  // 响应前函数
  function (response) {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    // 公共状态
    // console.log(response)
    const { status, message } = response.data;
    switch (status) {
      case "0000":
        break;
      case "8001":
        Notify.show({ type: "danger", message: message });
        break;
    }
    return response;
  },
  // 响应前报错函数
  function (error) {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    return Promise.reject(error);
  }
);

interface GetState {
  url: string;
  params?: {
    [propsName: string]: any;
  };
}

interface PostState {
  url: string;
  data?: {
    [propsName: string]: any;
  };
   params?: {
    [propsName: string]: any;
  };
}
interface PutState {
  url: string;
  data?: {
    [propsName: string]: any;
  };
  params?: {
    [propsName: string]: any;
  };
}

interface ResponseState {
  data: { status: any; message: any; };
  message: string;
  result: any;
  status: string;
}

export const getHttp = async ({ url, params }: GetState) => {
  const resp = await request.get(url, {
    params,
    
  });

  return resp.data as ResponseState;
};

export const postHttpForm = async ({ url, data }: PostState) => {
  const resp = await request.post(url, data, {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
    },
  });

  return resp.data as ResponseState;
};

export const postHttpJSON = async ({ url, data, params }: PostState) => {
  const resp = await request({
    url: url,
    method: "post",
    params: params,
    data: data,
  });

  return resp.data as ResponseState;
};


export const putHttpParams =async ({ url, data, params }: PutState) => {
  const resp = await request({
    url: url,
    method: "put",
    params: params,
    data: data,
  });

  return resp.data as ResponseState;
};

export const deleteHttp = async ({ url, params }: GetState) => {
  const resp = await request.delete(url, {
    params,
  });

  return resp.data as ResponseState;
};

export const putHttp = async ({ url, data, params }: PostState) => {
  const resp = await request({
    url: url,
    method: "put",
    params: params,
    data: data,
  });

  return resp.data as ResponseState;
};