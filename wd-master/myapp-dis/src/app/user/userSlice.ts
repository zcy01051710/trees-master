import { Success } from "@react-vant/icons";
import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "userSlice",
  initialState: {
    // 用户信息
    userInfo: {
      // 年龄
      age: 0,
      bankFlag: 0,
      // 注册邮箱
      email: "",
      // 是否绑定人脸 1=未绑定，2=已绑定
      faceFlag: 0,
      // 用户头像地址
      headPic:"",
      // 身高/cm
      height: 0,
      idCardFlag: 0,
      // 邀请码
      invitationCode: "",
      // 极光密码，
      jiGuangPwd:"",
      // 用户昵称
      nickName: "",
      // 用户登陆凭证
      sessionId: "",
      // 性别
      sex: 0,
      // 用户ID
      userId: 0,
      // 极光IM的账号
      userName: "",
      //体重
      weight: 0,
      // 是否绑定微信 1=是，2=否
      whetherBingWeChat: 0,
    },
    // 登录状态
    isLogin: false
  },
  reducers: {
    loginSuccess(state, action) {
      state.userInfo = action.payload
      state.isLogin = true
     
    },
  },
});


export const { loginSuccess } = userSlice.actions