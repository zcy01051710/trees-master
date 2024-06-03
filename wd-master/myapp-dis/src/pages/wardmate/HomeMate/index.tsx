import React, { useEffect, useState } from "react";
import { Image, List } from "react-vant";
import { WDHeader } from "../../../components";
import { Tabs } from "react-vant";
import style from "./index.module.scss";
import img from "../../asses/icon/common resource/hdpi/common_tab_circle_s.png";
import img1 from "../../asses/icon/common resource/hdpi/common_tab_home_n.png";
import img2 from "../../asses/icon/common resource/hdpi/common_tab_video_n.png";
import {useSearchParams} from 'react-router-dom'
import { useRequest ,useSetState } from "ahooks";
import { getDiseaseListById, getListMeta, getTitle } from "../../../api/Wardmeta";
import { useNavigate,useParams } from "react-router-dom";
import timestampToTime from "../Time/index";
import { MetaList } from "../Interface/Interface";
import { addClassName } from "../../../utils";
import { WDDiseaseItem } from "../../../components/wd-disease-item";
interface Titleprop{
    departmentName:string,
    id: number,
    pic: string,
    rank: number
}
export interface DiseaseContentState {
   amount: number;
  collectionNum: number;
  commentNum: number;
  detail: string;
  releaseTime: number;
  sickCircleId: number;
  title: string;
}
const Index: React.FC = () => {
const [searchParams,setSearchParams]=useSearchParams()
  const navigate = useNavigate();
  const id=searchParams.get('id')!;
  const {data:diseaseTitle=[]}=useRequest(async()=>{
    const resp=await getTitle();
    if(!id) setSearchParams({id:resp.result[0].id});
    return resp.result as Titleprop[]
  })
  const [params,setParams]=useSetState({
    count:10,
    page:1,
    departmentId:+id,
  })
  const [list,setList]=useState<DiseaseContentState[]>([])
  const fetchList=async()=>{
    const resp=await getDiseaseListById(params)
    if(params.page===1){
      setList(resp.result)
    }
    else{
      setList([...list, ...resp.result]);
    }
    setParams({page:params.page+1})
  }
  useEffect(()=>{
    fetchList()
  },[params.departmentId])
  return (
    <div>
      <WDHeader showSearch={false}/>
      <div className={style.center}>
        <div className={style.Tabs}>
          <div className={style.title}>
            {
              diseaseTitle&& diseaseTitle.map((v)=>{
                return (
                  <span
                  className={
                    id === v.id+''
                      ? addClassName(style.span, style.active)
                      : style.span
                  }
                  key={v.id}
                onClick={() => {
                setSearchParams({ id: v.id + "" });
                setParams({
                  page: 1,
                  departmentId: v.id
                })                
              }}
                  >
                    {v.departmentName}
                  </span>
                )
              })
            }
          </div>
          <svg
            className={style.postion}
            onClick={() => navigate("/home/meta/search")}
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="4135"
            width="30"
            height="30"
          >
            <path
              d="M955.069071 864.311021 740.015134 649.258107c-3.752464-3.751441-8.841366-5.860475-14.149255-5.860475-5.306866 0-10.395768 2.108011-14.149255 5.860475l-16.692171 16.692171-38.34226-38.34226c53.03796-59.810201 85.298711-138.442072 85.298711-224.478588 0-186.774871-151.952784-338.727655-338.727655-338.727655S64.527642 216.35456 64.527642 403.12943c0 186.775894 151.952784 338.728678 338.727655 338.728678 86.36909 0 165.276231-32.510438 225.170343-85.913718l38.303374 38.303374-17.34504 17.34504c-7.812943 7.813966-7.812943 20.48352 0 28.297486l215.051891 215.052914c3.753487 3.751441 8.841366 5.860475 14.149255 5.860475 5.306866 0 10.395768-2.108011 14.149255-5.860475l62.334697-62.334697C962.883037 884.794541 962.883037 872.124987 955.069071 864.311021zM104.546078 403.12943c0-164.709319 133.9999-298.709219 298.709219-298.709219s298.709219 133.9999 298.709219 298.709219S567.964616 701.839673 403.255297 701.839673 104.546078 567.838749 104.546078 403.12943zM878.585119 912.496463 691.829691 725.741036l34.036187-34.036187 186.755428 186.755428L878.585119 912.496463z"
              fill="#272636"
              p-id="4136"
            ></path>
          </svg>
        </div>
        <List className={style.content} onLoad={fetchList}>
        {list.map((v) => {
          return <WDDiseaseItem key={v.sickCircleId} v={v} onClick={()=>{
            navigate(`/home/meta/detail/${v.sickCircleId}`)
          }}></WDDiseaseItem>;
        })}
      </List>
      </div>

      <div className={style.bottom}>
        <div className={style.icon}>
          <Image
            width="30px"
            height="30px"
            src={img1}
            onClick={() => (window.location.href = "/home")}
          />
          <Image
            width="35px"
            height="35px"
            src={img2}
            onClick={() => (window.location.href = "/qian/shiping")}
          />
        </div>
        <div className={style.pos}>
          <Image
            width="35px"
            height="35px"
            src={img}
            onClick={() => (window.location.href = "/home/patientcircle")}
          />
        </div>
      </div>
    </div>
  );
};
export default Index;
