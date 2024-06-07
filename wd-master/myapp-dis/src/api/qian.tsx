import { getHttp, postHttpForm, postHttpJSON,putHttp } from "../service/request";
export function qian(){
    return getHttp({url:'/health/user/inquiry/v1/findDoctorList',
    params:{
        deptId:2,page:1,count:5,sortBy:4,condition:4
    }})
}
export function qianbao(){
    return getHttp({url:'/health/user/verify/v1/findUserWallet',
        params:{
            userId:1,sessionId:15320748258726
        }
    })
}
export function chong(){
    return postHttpJSON({url:'/health/user/verify/v1/recharge',
        params:{
            money:1,
            payType:1
        }
    })
}
export function jl(){
    return getHttp({url:'/health/user/verify/v1/findUserDrawRecordList',
        params:{
            page:1,
            count:5
        }
    })
}
export function tixian(){
    return postHttpJSON({url:'/health/user/verify/v1/drawCash',
        params:{
            money:2300
        }
    })
}
export const getTixianjilu = () => {
    return getHttp({ url: "/health/user/verify/v1/findUserDrawRecordList" ,params:{page:1,count:5}});
}
export const getBuy = (data:{page:number,count:number}) => {
    return getHttp({ url: "/health/user/verify/v1/findUserVideoBuyList" ,params:{page:data.page,count:data.count}});
}
//tab切换
export function zhishi(){
    return getHttp({url :"/health/share/knowledgeBase/v1/findDepartment"})
}
export function liebiao(){
    return getHttp({
        url:"/health/user/inquiry/v1/findDoctorList"
    })
}

export interface DoectorHistoryList{
    inquiryId: number;
    page: number;
    count: number;
}

//查询医生明细信息
export function xx(){
    return getHttp({url :"/health/user/inquiry/v1/findDoctorInfo", params:{doctorId:2}})
}
export function getmenus(){
    return getHttp({url:'/health/share/knowledgeBase/v1/findDepartment'})
}
export function getDocterList(params: any) {
  return getHttp({ url: "/health/user/inquiry/v1/findDoctorList", params });
}
export function getDiseaseTitle() {
  return getHttp({ url: "/health/share/knowledgeBase/v1/findDepartment" });
}
//医生明细
export function minxi(doctorId:number){
    return getHttp({ url:"/health/user/inquiry/v1/findDoctorInfo",params:{doctorId:doctorId}});
}
//评论
export interface lb{
    doctorId:number;
    page:number;
    count:number;
}
export function pl(params: lb){
    return getHttp({ url:"/health/user/inquiry/v1/findDoctorEvaluateList",params })
}
export interface lb{
    doctorId:number;
    page:number;
    count:number;
}

export function getDoctorPjDetail(doctorId:number){
  return getHttp({url:"/health/user/inquiry/v1/findDoctorEvaluateList",params:{doctorId:doctorId,page:1,count:5}})
}
export interface DoectorHistoryList {
  inquiryId: number;
  page: number;
  count: number;
}
export interface SendState {
  inquiryId: number;
  content: string;
  type: number;
  doctorId: number;
}
export function GetDoctor() {
  return getHttp({
    url: "/health/user/inquiry/verify/v1/findCurrentInquiryRecord",
  });
  
}
export function GetXiaoxi(params:DoectorHistoryList) {
  return getHttp({
    url: "/health/user/inquiry/verify/v1/findInquiryRecordList",
     params:params
  });
}
export function postSendMessgess(params:SendState) {
  return postHttpForm({
    url: "/health/user/inquiry/verify/v1/pushMessage",
    data:params
  });
}
//立即咨询
export function zixun(doctorId:number) {
  return putHttp({
    url: "/health/user/inquiry/verify/v1/consultDoctor",
    params:{doctorId:doctorId}
  });
}
export function jieshu(recordId:number) {
  return putHttp({
    url: "/health/user/inquiry/verify/v1/endInquiry",
    params:{recordId:recordId}
  });
}