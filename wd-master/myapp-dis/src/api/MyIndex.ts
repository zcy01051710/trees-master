import { deleteHttp, getHttp, postHttpForm, postHttpJSON, putHttp, putHttpParams} from "../service/request";
import { RegisterState } from "../type";
import { RSA } from "../utils";

  //登录接口
export function loginApi(data: { username: string, password: string }) {
  data.password = RSA(data.password)
  return postHttpForm({
    url: '/health/user/v1/login',
    data:{email: data.username, pwd: data.password}
  })
}

//关注医生接口
export function getDoctor(params:{page:number,count:number}){
  return getHttp({
    url:'/health/user/verify/v1/findUserDoctorFollowList',
    params:{
       page:1,
       count:5
    }
  })
}

//系统通知接口
export function getUserList(params:{page:number,count:number}){
  return getHttp({
    url:'/health/user/verify/v1/findSystemNoticeList',
    params:{
      page:1,
      count:5
    }
  })
}

//问诊接口
export function getLook(params:{page:number,count:number}){
  return getHttp({
    url:'/health/user/verify/v1/findInquiryNoticeList',
    params:{
      page:2,
      count:5
    }
  })
}


//H币接口
export function getMoney(params:{page:number,count:number}){
  return getHttp({
    url:'/health/user/verify/v1/findHealthyCurrencyNoticeList',
    params:{
      page:2,
      count:5
    }
  })
}

//我的收藏接口
export function getLike(params:{page:number,count:number}){
  return getHttp({
    url:'/health/user/verify/v1/findUserInfoCollectionList',
    params:{
      page:1,
      count:5
    }
  })
}


//我的收藏病友圈
export function getFrieend(params:{page:number,count:number})
{
  return getHttp({
    url:'/health/user/verify/v1/findUserSickCollectionList',
    params:{
      page:1,
      count:5
    }
  })
}

//我的收藏视频
export function getAdio(params:{page:number,count:number}){
  return getHttp({
    url:'/health/user/verify/v1/findVideoCollectionList',
    params:{
      page:1,
      count:5
    }
  })
}

//购买的视频
export function getBuy(params:{page:number,count:number}){
  return getHttp({
    url:'/health/user/verify/v1/findUserVideoBuyList',
    params:{
      page:1,
      count:5
    }
  })
}

// 注册接口 -  获取验证码
export function getEmailCodeApi(email: string) {
  return postHttpJSON({
    url: "/health/user/v1/sendOutEmailCode",
    params: {
      email,
    },
  });
}
// 注册接口 -  用户信息注册66

export function registerApi(params: RegisterState) {
  params.pwd1 = RSA(params.pwd1)
  params.pwd2 = params.pwd1
  return postHttpJSON({
    url: "/health/user/v1/register",
    params: {
      ...params,
    },
  });
}


//被采纳的建议
export function getDesc(params:{page:number,count:number}){
  return getHttp({
    url:'/health/user/verify/v1/findMyAdoptedCommentList',
    params:{
      page:1,
      count:5,
    }
  })
}


// 重置密码，验证码验证
export function GetCodeHttp(params:{email:string,code:string}){
  return postHttpJSON({
    url:'/health/user/v1/checkCode',
    params:{
      email:params.email,
      code:params.code,
    }
  })
}

// 重制密码
export function PutHttp(params:{email:string,pwd1:string,pwd2:string}){
   params.pwd1= params.pwd2=RSA(params.pwd1)
  return putHttpParams({
    url:'/health/user/v1/resetUserPwd',
    params:{
      email:params.email,
      pwd1:params.pwd1,
      pwd2:params.pwd2,
    }
  })
}

//完善绑定邮箱验证
export function PutShan(params:{email:string}){
  return putHttpParams({
    url:'/health/user/verify/v1/perfectEmail',
    params:{
      email:params.email,
    }
  })
}


//生成邀请码
export function getPlase(){
  return postHttpJSON({
    url:'/health/user/verify/v1/makeInvitationCode' })
}



//我的任务
export function gettask(){
  return getHttp({
    url:'/health/user/verify/v1/findUserTaskList'
  })
}

//病友圈列表
export function getFriend(params:{page:number,count:number}){
  return getHttp({
    url:'/health/user/sickCircle/verify/v1/findMySickCircleList',
    params:{
      page:1,
      count:5,
    }
  })
}

// 病友圈发表评论列表

export function getFriends(params:{sickCircleId:any,page:number,count:number}){
  return getHttp({
    url:'/health/user/sickCircle/verify/v1/findMySickCircleCommentList',
    params:{
      ...params
    }
  })
}


// 查询档案
export function getUserFiles() {
  return getHttp({ url: '/health/user/verify/v1/findUserArchives' })
}

// 添加档案
export function addUserFile(data: any) {
  return postHttpJSON({
    url: '/health/user/verify/v1/addUserArchives',
    data
  })
}

// 删除档案
export function deleteUserFiles(params:{archivesId:number}) {
  return deleteHttp({
    url: '/health/user/verify/v1/deleteUserArchives',
     params:{
       archivesId:params.archivesId
     } 
  })
}

// 修改档案
export function updateUserFile(data: any) {
  return putHttp({
     url: '/health/user/verify/v1/updateUserArchives',
    data
  })
}

//修改密码
export function putPwd(params:{pwd1:string,pwd2:string}){
  params.pwd1= RSA(params.pwd1)
  params.pwd2=RSA(params.pwd2)
  return putHttpParams({
    url:'/health/user/verify/v1/updateUserPwd',
    params:{
    oldPwd:params.pwd1,
    newPwd:params.pwd2,
    }
  })
}


//上传头像
export function getImg(){
  return postHttpForm({
    url:"/health/user/verify/v1/modifyHeadPic"
  })
}

// 修改昵称
// export function modifyNickName(
//   headers: { nickName: string },
//   params: { userId: number; sessionId: string }
// ) {
//   return putHttpParams(
//     "/health/user/verify/v1/modifyNickName",
//     {
//      headers,
//     params
//     }
   
//   );
// }
// export function getUserInfoById() {
//   return getHttp({
//     url: "/health/user/verify/v1/getUserInfoById",
//   });
// }

// 修改性别
// export function updateUserSex(
//   headers: { sex: number },
//   params: { userId: number; sessionId: string }
// ) {
//   return putHttpParams("/health/user/verify/v1/updateUserSex", headers, params);
// }


export function postImage(archivesId: string,picture:File) {
   const form = new FormData();
  form.append("archivesId", archivesId);
   form.append("picture", picture);
  return postHttpJSON({
    url: "/health/user/verify/v1/uploadArchivesPicture",
    data:form
  });
}
export function Putname(nickName: string) {
  return putHttp({
     url: '/health/user/verify/v1/modifyNickName',
    params:{nickName:nickName}
  })
}