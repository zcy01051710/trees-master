import { useBoolean, useRequest } from "ahooks";
import React from "react";
import { Image, Notify } from "react-vant";
import url1 from "../../../assets2/images/icon/common resource/hdpi/common_button_collection_small_n.png";
import url3 from "../../../assets2/images/icon/common resource/hdpi/common_button_collection_small_s.png";
import url2 from "../../../assets2/images/icon/common resource/hdpi/common_icon_comment_small_n.png";
import {
  useLocation,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";

import style from "./index.module.scss";
import { getListDetail } from "../../../api/Wardmeta";
import { WDHeader } from "../../../components";
import timestampToTime from "../Time/index";
import img from "../../asses/icon/common resource/hdpi/common_tab_circle_s.png";
import img1 from "../../asses/icon/common resource/hdpi/common_tab_home_n.png";
import img2 from "../../asses/icon/common resource/hdpi/common_tab_video_n.png";
import { WDImage } from "../../../components/wd-image";
import { MaskBack } from "../../../components/maskBack";
import { SickCircleCommentList } from "../../../components/sickCircleCommentList";
import {
  deletedetailScApi,
  getPatientDetailApi,
  postdetailScApi,
} from "../../../api/PatientApi";
const src = "https://img.yzcdn.cn/vant/cat.jpeg";
const Index: React.FC = () => {
  const { id } = useParams()
  const [searchParams] = useSearchParams();
  // const sickCircleId = Number(searchParams.get("sickCircleId"));
  
   const sickCircleId =Number(id) ;
  // console.log(sickCircleId);
  const { pathname } = useLocation();
  const navigate = useNavigate();
  // 显示/隐藏 蒙层
  const [showFallConfirm, { setFalse: setFCFalse, setTrue: setFCTrue }] =
    useBoolean(false);
  const { data: detailData = {}, run } = useRequest(
    async () => (await getListDetail(id as string)).result
  );
  if(!(JSON.stringify(detailData) === '{}')){
    console.log(detailData);
  }
  
  
 
  

  // 收藏/取消收藏病友圈
  const toCollect = async (iscollect: number) => {
    // console.log(iscollect);
    iscollect === 2
      ? postdetailScApi({ sickCircleId }).then(({ data }) => {
          // console.log(data);
          if (data.status === "0000") {
            Notify.show({
              type: "success",
              message: data.message,
            });
            run();
          }
        })
      : deletedetailScApi({ sickCircleId }).then(({ data }) => {
          if (data.status === "0000") {
            Notify.show({
              type: "warning",
              message: data.message,
            });
            run();
          }
        });
  };
  return (
    <div>
      
      <WDHeader showSearch={false} />
      <div className={style.res}>
        <h4 className={style.h4}>{detailData.disease}</h4>
        <p className={style.h4}>[病症]</p>
        <p className={style.p}>{detailData.detail}</p>
        <p className={style.h4}>[科室]</p>
        <p className={style.p}>{detailData.treatmentProcess}</p>
        <p className={style.h4}>[病例详情]</p>
        <p className={style.p}>{detailData.treatmentProcess}</p>
        <p className={style.h4}>[治疗经历]</p>
        <div className={style.div}>
          <p className={style.p}>{detailData.treatmentHospital}</p>
          <p className={style.p}>
            {timestampToTime(detailData.treatmentStartTime)}
          </p>
        </div>
        <p className={style.p}> {detailData.treatmentProcess} </p>
        <p className={style.h4}>[相关图片]</p>
        {/* <WDImage src={detailData.picture} alt={""} /> */}
        <Image className={style.img} width='95vw' height='200px' src={detailData.picture}/>
        <div className={style.ping}>
          <div className={style.pul}>
            <ul className={style.collect}>
              <li onClick={() => toCollect(detailData.collectionFlag)}>
                <img
                  src={detailData.collectionFlag === 1 ? url3 : url1}
                  alt=""
                />
                <span>{detailData.collectionNum}</span>
              </li>
              <li onClick={() => setFCTrue()}>
                <img src={url2} alt="" />
                <span>{detailData.commentNum}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div>
        <p className={style.jian}>被采纳的建议</p>
        <div className={style.yong}>
          <div className={style.you}>
            <Image round width="30px" height="30px" src={src} />
            <div>
              <p>{detailData.disease}</p>
              <p>获取20H币</p>
            </div>
          </div>
          <div>{timestampToTime(detailData.treatmentEndTime)}</div>
        </div>
        <p className={style.p}>{detailData.treatmentProcess}</p>
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
      <MaskBack
        isOpen={showFallConfirm}
        content={
          <SickCircleCommentList
            sickCircleId={sickCircleId}
            closeMask={() => {
              setFCFalse();
              run();
            }}
          />
        }
      />
    </div>
  );
};
export default Index;
