import { ParamsStateList } from "../pages/wardmate/wenzen";
import { getHttp, postHttpJSON } from "../service/request";

export function getListMeta(from:{id:string,page:number,count:number}) {
    return getHttp({url:'/health/user/sickCircle/v1/findSickCircleList',params:{departmentId:from.id,page:from.page,count:from.count}})
}
export function getListDetail(id:string) {
    return getHttp({url:'/health/user/sickCircle/v1/findSickCircleInfo',params:{sickCircleId:id}})
}
export function getTitle() {
    return getHttp({url:'/health/share/knowledgeBase/v1/findDepartment'})
}
export function getListSearch(value:string) {
    return getHttp({url:'/health/user/sickCircle/v1/searchSickCircle',params:{keyWord:value}})
}
export function getpinglist(data:{id:number,page:number,count:number}) {
    return getHttp({url:'/health/user/sickCircle/v1/findSickCircleCommentList',params:{sickCircleId:data.id,page:data.page,count:data.count}})
}
export function jianyi(data:{sickCircleId:number,content:string}) {
    return postHttpJSON({url:'/health/user/sickCircle/verify/v1/publishComment',params:{sickCircleId:data.sickCircleId,content:data.content}})
}
export function Postwite(data:{
  title: string; // 标题
  departmentId: number; //科室 id
  disease: string; //	病症描述
  detail: string; //病症详情
  treatmentHospital: string; //治疗医院
  treatmentStartTime: string; //治疗开始时间 格式’2018-3-26’
  treatmentEndTime: string; //治疗结束时间 格式’2018-6-26’
  treatmentProcess: string; //治疗过程描述
  amount: number; // 悬赏额度，//无时为0
}) {
    return postHttpJSON({url:'/health/user/sickCircle/verify/v1/publishSickCircle',data:data})
}
interface ParamsState {
  departmentId: number;
  count: number;
  page: number;

}
// 首页
// 获取病友圈 详情
export function getDiseaseListById(params: ParamsState) {
  return getHttp({
    url: "/health/user/sickCircle/v1/findSickCircleList",
    params,
  });
}
export function getDiseaseLis(departmentId: number) {
  return getHttp({
    url: "/health/share/knowledgeBase/v1/findDiseaseCategory",
    params: {
      departmentId,
    },
  });
}
export function postImage(sickCircleId: string,picture:File) {
   const form = new FormData();
  form.append("sickCircleId", sickCircleId);
   form.append("picture", picture);
  return postHttpJSON({
    url: "/health/user/sickCircle/verify/v1/uploadSickCirclePicture",
    data:form
  });
}
export function getdoctorList(params:ParamsStateList) {
  return getHttp({
    url: "/health/user/inquiry/v1/findDoctorList",
    params
  });
}
export function getdoctorDetail(doctorId:number) {
  return getHttp({
    url: "/health/user/inquiry/v1/findDoctorInfo",
    params:{doctorId:doctorId}
  });
}