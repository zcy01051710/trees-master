import { getHttp, postHttpJSON,putHttpParams } from "../service/request";
// 收藏 取消收藏
import { deleteHttp, postHttp } from ".";
/************************ 类型 *********************************/

// 病友圈首页参数类型
export interface PatientHomeState {
  departmentId: number
  page: number
  count: number
}
// 病友圈列表参数
export interface CommentListParamsState {
  sickCircleId: any;
  page: number;
  count: number;
}
// 病友圈发表评论参数
export interface PublishCommentParamsState {
  sickCircleId: any;
  content: string;
  
}
// 病友圈详情发表评论参数
export interface detailPutState {
  commentId: any,
  sickCircleId: string
  
}
// 赞同/反对病友圈评论参数
export interface ExpressOpinionParamsState {
  commentId: number;
  opinion: number;
}
//病友圈首tab
export interface PatientTabState {
  departmentName: string
  id: number
  pic: string
  rank: number
}
// 结果页返回数据类型
export interface PatientResultState {
  amount: number,
  collectionNum: number,
  commentNum: number,
  detail: string,
  releaseTime: string,
  sickCircleId: any,
  title: string
}
//  详情
export interface PatientDetailState {
  sickCircleId: any
}
// 详情页回调
export interface PatientDetailDataState {
  sickCircleId: any
  authorUserId: number
  departmentId: number
  adoptFlag: number
  title: string
  department: string
  disease: string
  detail: string
  treatmentHospital: string
  treatmentStartTime: string
  treatmentEndTime: string
  treatmentProcess: string
  picture: string
  collectionFlag: number
  collectionNum: string
  commentNum: number
  adoptNickName: string
  adoptHeadPic: string
  adoptComment: string
  adoptTime: number
}
// 收藏病友圈参数类型
export interface detailSc {
  sickCircleId: any;
}
// 赞同/反对病友圈评论参数
export interface AgreeoOpposeCommentsState {
  commentId: any;
  opinion: number;
}


/************************ 接口 *********************************/
// 病友圈首页列表接口
export function getPatientListApi(params: PatientHomeState) {
  return getHttp({ url: '/health/user/sickCircle/v1/findSickCircleList', params: { ...params } })
}
//tab接口与首页共用
export function getPatientTabApi() {
  return getHttp({ url: '/health/share/knowledgeBase/v1/findDepartment' })
}
// 病友详情页数据接口接口
export function getPatientDetailApi(sickCircleId: any) {
  return getHttp({ url: '/health/user/sickCircle/v1/findSickCircleInfo', params: { sickCircleId: sickCircleId } })
}
// 病友搜索页接口
export function getListSearch(value: string) {
  return getHttp({ url: '/health/user/sickCircle/v1/searchSickCircle', params: { keyWord: value } })
}
// 查询病友圈评论列表

export function getCircleComment  (params: { sickCircleId: any, page: number, count: number }) {
  return getHttp({
    url: '/health/user/sickCircle/v1/findSickCircleCommentList',
    params: {
     ...params
    }
  });
}
  

// 病友圈发表评论
export function postpbComment  (params: PublishCommentParamsState) {
  return postHttpJSON({
    url: "/health/user/sickCircle/verify/v1/publishComment",
    params: {
      ...params
    }
  })
}
  
//   收藏病友圈接口
export function postdetailScApi (data: detailSc) {
  return postHttp("/health/user/verify/v1/addUserSickCollection", data);
}
  

//   取消收藏病友圈接口
export function deletedetailScApi  (params: detailSc) {
   return deleteHttp("/health/user/verify/v1/cancelSickCollection", params);
}
  
// 赞同/反对病友圈评论


export function AgreeoOpposeCommentsApi(params:AgreeoOpposeCommentsState){
   return putHttpParams({
    url: "/health/user/sickCircle/verify/v1/expressOpinion",
    params: {
      ...params
    }
  })
}