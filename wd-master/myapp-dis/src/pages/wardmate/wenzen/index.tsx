import React from "react";
import { WDHeader } from "../../../components";
import style from "./style.module.scss";
import { Tabs, Image } from "react-vant";
import { useRequest, useSetState } from "ahooks";
import { getTitle, getdoctorList } from "../../../api/Wardmeta";
import { useSearchParams } from "react-router-dom";
import { addClassName } from "../../../utils";
import detail from '../../asses/icon/common resource/hdpi/common_icon_more_n.png'
import { useNavigate } from "react-router-dom";
export interface Title {
  departmentName: string;
  id: number;
  pic: string;
  rank: number;
}
export interface ParamsStateList {
  deptId: number;
  condition: number;
  sortBy?: number;
  page: number;
  count: number;
}
export interface DoctorList {
  badNum: number;
  doctorId: number;
  doctorName: string;
  imagePic: string;
  inauguralHospital: string;
  jobTitle: string;
  praise: string;
  praiseNum: number;
  serverNum: number;
  servicePrice: number;
}
const Index: React.FC = () => {
  const [searchparams] = useSearchParams();
  const navigate=useNavigate()
  const id = +searchparams.get("id")!;
  const conditionList=[
    {
      label:"综合",
      value:1,
    },
    {
      label:"好评",
      value:2,
    },
    {
      label:"咨询数",
      value:3,
    },
    {
      label:"价格",
      value:4,
    }
  ]
  const [params, setParams] = useSetState({
    deptId: id,
    condition: 1,
    page: 1,
    count: 3,
  } as ParamsStateList);

  const { data: titleTabs = [] } = useRequest(async () => {
    const resp = await await getTitle();
    if (params.deptId) {
    } else {
      setParams({
        deptId: resp.result[0].id,
      });
    }
    return resp.result as Title[];
  });
  const { data: doctorList = [] } = useRequest(
    async () => {
      const resp = await getdoctorList(params);
      setcurrentDoctor(resp.result[0])
      console.log(resp);
      return resp.result as DoctorList[];
    },
    { refreshDeps: [params] }
  );
  
  
  const [currentDoctor,setcurrentDoctor]=useSetState({} as DoctorList)
  return (
    <div className={style.doctorList}>
      <div className={style.header}>
        <WDHeader showSearch={false}></WDHeader>
      </div>
      <div className={style.demotabs}>
        <Tabs
          onClickTab={({ name }) => {
            setParams({
              deptId: name,
              page: 1,
            });
          }}
          active={params.deptId}
        >
          {titleTabs.length &&
            titleTabs.map((item) => (
              <Tabs.TabPane
                key={item.id}
                title={item.departmentName}
                name={item.id}
              ></Tabs.TabPane>
            ))}
        </Tabs>
      </div>
      <div className={style.conditionList}>
        {
          conditionList.map((v,i)=>{
            return (
              <div 
                key={i}
                className={v.value===params.condition ? style.active:''}
                onClick={()=>setParams({condition:v.value,page:1})}
              >
                {v.label}
              </div>
            )
          })
        }
      </div>
      <div className={style.concent}>
        <dl>
          <dt>
            <Image width="100%" height="200" src={currentDoctor.imagePic} />
          </dt>
          <dd className={style.fristadd}>
            <div>
              <div className={style.div}><h4>{currentDoctor.doctorName}</h4> <span>{currentDoctor.jobTitle}</span></div>
              <p>{currentDoctor.inauguralHospital}</p>
              <p><span>好评率 {currentDoctor.praise}</span> <span>服务患者数量 {currentDoctor.praiseNum}</span></p>
            </div>
            <Image width="30" height="30" src={detail} onClick={()=>{navigate(`/home/wendetail/${currentDoctor.doctorId}`)}} />
          </dd>
          <dd className={style.twoadd}>  
            <p>{currentDoctor.servicePrice}H币/次</p>
            <p>立即咨询</p>
          </dd>
        </dl>
      </div>
      <div className={style.page}>
        <svg
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="8342"
          width="50"
          height="50"
          onClick={()=>{
            if(params.page>1){
              setParams({page:params.page-1})
            }
          }}
        >
          <path
            d="M872.533 819.627a34.133 34.133 0 0 1-48.213 48.213L492.373 535.893a34.133 34.133 0 0 1 0-48.213L824.32 155.733a34.133 34.133 0 0 1 48.213 48.214L564.907 512z m-341.333 0a34.133 34.133 0 0 1-48.213 48.213l-331.52-331.52a34.133 34.133 0 0 1 0-48.213L483.413 156.16a34.133 34.133 0 0 1 48.214 48.213L223.573 512z"
            fill="#333333"
            p-id="8343"
          ></path>
        </svg>
        <div className={style.swiper}>
          {doctorList &&
            doctorList.map((v) => {
              return (
                <dl 
                key={v.doctorId} 
                className={style.dl}
                onClick={()=>setcurrentDoctor(v)}
                >
                  <dt>
                    <Image width="100" height="100" src={v.imagePic} />
                  </dt>
                  <dd className={v.doctorId===currentDoctor.doctorId?addClassName(style.dd,style.active) : style.dd}>
                    <span>{v.doctorName}</span>
                  </dd>
                </dl>
              );
            })}
        </div>
        <svg
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="9321"
          width="50"
          height="50"
          onClick={()=>{
            setParams({page:params.page+1})
          }}
        >
          <path
            d="M151.467 204.373a34.133 34.133 0 1 1 48.213-48.213l331.947 331.947a34.133 34.133 0 0 1 0 48.213L199.68 867.84a34.133 34.133 0 1 1-48.213-48.213L459.093 512z m341.333 0a34.133 34.133 0 0 1 48.213-48.213L872.96 488.107a34.133 34.133 0 0 1 0 48.213L541.013 868.267a34.133 34.133 0 0 1-48.213-48.214L800.427 512z"
            fill="#333333"
            p-id="9322"
          ></path>
        </svg>
      </div>
      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        第{params.page}页
      </div>
    </div>
  );
};
export default Index;
