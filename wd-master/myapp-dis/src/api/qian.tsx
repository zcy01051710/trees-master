import { putHttp } from ".";
import { getHttp, postHttpJSON } from "../service/request";
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