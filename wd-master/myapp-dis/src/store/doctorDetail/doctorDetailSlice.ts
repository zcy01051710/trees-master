// 医生详情
import { createSlice } from "@reduxjs/toolkit";

// interface doctorReceiveGiftListRawState{
//     worth?:Number,
//     receiveNum?:Number,
//     giftPic?:String,
//     giftName?:String,
//     meaning?:String
// }

// interface commentListRawState{
//     nickName?:String,
//     headPic?:String,
//     content?:String,
//     commentTime?:String
// }

// interface doctorDetailRawState{
//     doctorId:Number,
//     doctorName?:String,
//     imagePic?:String,
//     jobTitle?:String,
//     inauguralHospital?:String,
//     praise?:String,
//     serverNum?:Number,
//     servicePrice?:Number,
//     followFlag?:Number,
//     personalProfile?:String,
//     goodField?:String,
//     commentNum?:Number,
//     praiseNum?:Number,
//     badNum?:Number,
//     doctorReceiveGiftList?:doctorReceiveGiftListRawState,
//     commentList?:commentListRawState
// }

const doctorReducer = createSlice({
  name: "doctorReducer",
  initialState: {
    //医生id
    doctorId: 0,
    //问诊id
    recordId: 0,
    commentList: [],
    //评价状态码
    Cookies: "1",
    // result:[],//************************************目前有问题*********************************** */
  },  
  reducers: {
    // 详情医生id
    addDoctorList(state, { payload }) {
      state.doctorId = payload;
    },
    //问诊id
    addrecordId(state, { payload }) {
      state.recordId = payload;
    },
    addCookies(state, { payload }) {
      state.Cookies = payload;
    },
    // addresult(state, { payload }) {
    //   state.result = payload;
    // },
    // 评论列表
    addCommentList(state, { payload }) {
      state.commentList = payload;
    },
  },
});

export const { addDoctorList, addCommentList, addrecordId,addCookies } =
  doctorReducer.actions;

export default doctorReducer.reducer;
