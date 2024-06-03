import { getHttp } from "../service/request";
//轮播图
export function getbanners(){
    return getHttp({url:'/health/share/v1/bannersShow'})
}
//搜索
export function getListSearch(value:string){
    return getHttp({url:'/health/share/v1/homePageSearch',params:{keyWord:value}})
}
//菜单
export function getmenus(){
    return getHttp({url:'/health/share/knowledgeBase/v1/findDepartment'})
}
//tab切换
export function gettabq(){
    return getHttp({url:'/health/share/knowledgeBase/v1/findDepartment',params:{departmentId:2}})
}
//病症
export function getbingzheng(){
    return getHttp({url:'/health/share/knowledgeBase/v1/findDiseaseCategory',params:{departmentId:2,id:1}})
}
//病症详情
export function getbingzhengdetail(){
    return getHttp({url:'/health/share/knowledgeBase/v1/findDiseaseKnowledge',params:{id:18}})
}
//药品科目
export function getYaopin(){
    return getHttp({url:'/health/share/knowledgeBase/v1/findDrugsCategoryList'})
}
//药品内容
export function getYaopind(){
    return getHttp({url:'/health/share/knowledgeBase/v1/findDrugsKnowledgeList',params:{drugsCategoryId:1,page:1,count:1}})
}
//药品详情
export function getyaopindetail(){
    return getHttp({url:'/health/share/knowledgeBase/v1/findDrugsKnowledge',params:{id:1}})
}
//首页列表
export function getlist(){
    return getHttp({url:'/health/share/information/v1/findInformationList',params:{plateId:1,page:1,count:5}})
}
//资讯详情
export function getZixun(infoId:number){
    return getHttp({url:'/health/share/information/v1/findInformation',params: { infoId }})
}

// 标题
export function getHomeTitle() {
  return getHttp({
    url: "/health/share/information/v1/findInformationPlateList",
  });
}

interface ParamsState {
  plateId: number;
  count: number;
  page: number;
}

// 内容
export function getHomeListById(params: ParamsState) {
  return getHttp({
    url: "/health/share/information/v1/findInformationList",
    params,
  });
}
export const getInformation = () => {
  return getHttp({ url: "/health/share/information/v1/findInformationPlateList" });
}

export interface InfoListParamsRawState {
  plateId: number;
  count: number;
  page: number;
}

// 健康咨询列表接口
export const getInformationListById = (params: InfoListParamsRawState) => {
  return getHttp({ url: '/health/share/information/v1/findInformationList', params:{...params} });
}

export const getDoctortitle=()=>{
  return getHttp({url:'/health/share/knowledgeBase/v1/findDepartment'})
}

//查询问诊医生列表
export function getDocterList(params: any) {
  return getHttp({ url: "/health/user/inquiry/v1/findDoctorList", params });
}
//医生详情
export function getDcotorDetail(doctorId:number){
  return getHttp({url:'health/user/inquiry/v1/findDoctorInfo',params:{doctorId:doctorId}})
}
