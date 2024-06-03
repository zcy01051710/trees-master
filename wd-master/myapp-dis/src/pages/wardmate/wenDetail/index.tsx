import { useRequest } from "ahooks";
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getdoctorDetail } from "../../../api/Wardmeta";
import { NavBar, Image } from "react-vant";
import style from './style.module.scss'
import logo from "../../asses/icon/common resource/hdpi/common_icon_back_black_n.png";
import xin from '../../asses/icon/common resource/hdpi/common_icon_attention_large_n.png'
interface commentListState {
  commentTime: number;
  content: string;
  headPic: string;
  nickName: string;
}
interface doctorReceiveGiftListState {
  giftName: string;
  giftPic: string;
  receiveNum: number;
  worth: number;
}
export interface DetailState {
  badNum: number;
  commentList: commentListState[];
  commentNum: number;
  doctorId: number;
  doctorName: string;
  doctorReceiveGiftList: doctorReceiveGiftListState[];
  followFlag: number;
  imagePic: string;
  inauguralHospital: string;
  jobTitle: string;
  personalProfile: string;
  praise: string;
  praiseNum: number;
  serverNum: number;
  servicePrice: number;
}
const Index: React.FC = () => {
  const { id } = useParams()!;
  const navigate = useNavigate();
  const { data: DoctorList={}  as DetailState} = useRequest(
    async () => (await getdoctorDetail(Number(id))).result
  );
console.log(DoctorList);

  return (
    <div className={style.Detail}>
      <div>
        <NavBar
          title="医生详情"
          leftText={<Image width="20" height="20" src={logo} />}
          onClickLeft={() => {
            navigate(-1);
          }}
        />
      </div>
      <div className={style.detaillist}>
          <div>
            <Image width="100" height="130" src={DoctorList.imagePic} />
          </div>
          <div className={style.text}>
            <div className={style.h4}>
              <div><h4>{DoctorList.doctorName}</h4> <span>{DoctorList.jobTitle}</span></div>
              <Image  width="20" height="20" src={xin} />
            </div>
            <p>{DoctorList.inauguralHospital}</p>
            <div className={style.span}><span>好评率 {DoctorList.praise}</span> <span>服务患者数 {DoctorList.serverNum}</span></div>
            <div className={style.liwu}>他收到的礼物</div>
          </div>
      </div>
    </div>
  );
};
export default Index;
