import React, { useEffect, useState } from "react";
import { NavBar,Button, Notify} from "react-vant";
import { useBoolean, useRequest } from "ahooks";
// import add from "../../../asstes/切图/image/image/hdpi/.png";
import add from "../../asses/hdpi/add.png";
import style from "./style.module.scss";
//import { Delarchives, Getarchives } from "../../../api/MyIndex";
import { useNavigate } from "react-router-dom";
// import no_message from "../../../asstes/切图/image/image/xxhdpi/no_message.png";
import no_message from "../../asses/hdpi/no_message.png";
import logo from '../../asses/icon/common resource/hdpi/common_icon_back_black_n.png';
import { deleteUserFiles, getUserFiles } from "../../../api/MyIndex";


 export interface FileState {
  archivesId: number; // 档案id
  diseaseBefore: string; //既往史
  diseaseMain: string; //主要病状
  diseaseNow: string; //现病史
  treatmentEndTime: number | string; // 结束时间
  treatmentHospitalRecent: string; //最近治疗医院
  treatmentProcess: string; // 治疗过程
  treatmentStartTime: number | string; //开始时间
  userId: number; //用户id
  
}

const Index: React.FC = () => {
  const [isInfo, { setFalse, setTrue }] = useBoolean(true);
  const navigate = useNavigate();
  const { data } = useRequest(async () => {
    const resp = await getUserFiles();
    console.log(resp.result);
    if (resp.result.length) {
      setFalse();
    } else {
      setTrue();
    }
    return resp.result[0] as FileState;
  });

  // 删除档案
   const handleDelete = async () => {
    if (data) {
      const resp = await deleteUserFiles({...data});
      if (resp.status === "0000") {
        Notify.show({ type: "success", message: resp.message });
        setTrue();
      }
    }
  };

  return (
    <div className={style.archivesBox}>
    <div className={style.top}>
        <img src={logo} alt="" onClick={()=>navigate('/my')}/>
        <span>我的档案</span>
       </div>
      {isInfo  ? (
        <div className={style.archivesCon}>
          <div>
            <img src={no_message} alt="" />
            <span>您还没有档案哦</span>
          </div>
          <button onClick={() => navigate("/my/mycon/add/edit?code=1")}>
            添加
          </button>
        </div>
      ) : (
       data&&(<div className={style.Box}>
          <p className={style.p}>[主要症状]</p>
          <span>{data.diseaseMain}</span>
          <p className={style.p}>[现病史]</p>
          <span>{data.diseaseNow}</span>
          <p className={style.p}>[既往病史]</p>
          <span>{data.diseaseBefore}</span>
          <p className={style.p}>[治疗经历]</p>
          <div>
            <div className={style.box}>
              <span>{data.treatmentHospitalRecent}</span>
              <span>
                {new Date(data.treatmentStartTime).toLocaleString()}-
                {new Date(data.treatmentEndTime).toLocaleString()}
              </span>
            </div>
            <span className={style.con}>{data.treatmentProcess}</span>
          </div>
          <p className={style.p}>[相关图片]</p>
          {/* <img src={add} alt="" className={style.add} /> */}

          <div className={style.set}>
            <button className={style.del} onClick={() => handleDelete()}>
              删除
            </button>
            <button
              className={style.edit}
              onClick={() => navigate("/my/mycon/add/edit?code=2" )}
            >
              编辑
            </button>
          </div>
        </div>
       )
      )}
    </div>
  );
};
export default Index;
