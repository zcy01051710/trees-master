import React from "react";
import style from "./style.module.scss";
import { useRequest, useSetState } from "ahooks";
import { getDcotorDetail, getDoctorPj } from "../../../../api/HomeIndex";
import { useParams } from "react-router-dom";
import tu from "../../../asses/images/flower.png";
import tu2 from "../../../asses/images/gift_certificate.png";
import tu3 from "../../../asses/images/gift_cup.png";
import { NavBar, Toast } from "react-vant";
interface DoctorDetailData {
  commentNum: number;
  doctorId: number;
  doctorName: string;
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
interface pjdata {
  commentTime: number;
  content: string;
  headPic: string;
  nickName: string;
}
const Index: React.FC = () => {
  const { id } = useParams()!;
  const { data: DoctorData = {} as DoctorDetailData } = useRequest(
    async () => (await getDcotorDetail(Number(id))).result
  );
  console.log(DoctorData);
  const [params, setParams] = useSetState({
    doctorId: +id!,
    page: 1,
    count: 5,
  });

  // 使用修正后的 params 发起请求
  const { data: getDoctorPjData = [] } = useRequest(
    async () => (await getDoctorPj(params)).result as pjdata[]
  );

  console.log(getDoctorPjData, 111);

  return (
    <div className={style.box}>
      <NavBar title="医生详情" />
      <dl className={style.dl}>
        <dt className={style.dt}>
          {" "}
          <img className={style.img} src={DoctorData.imagePic} alt="" />{" "}
        </dt>
        <dd className={style.dd}>
          <b>{DoctorData.doctorName}</b>
          <span className={style.span}>{DoctorData.jobTitle}</span>
          <p className={style.p}>好评率：{DoctorData.praiseNum}%</p>
          <p className={style.p}>他收到的礼物</p>
          <div>
            <img className={style.img1} src={tu} alt="" />
            <img className={style.img1} src={tu2} alt="" />
            <img className={style.img1} src={tu3} alt="" />
          </div>
        </dd>
      </dl>
      <div className={style.jj}>
        <span className={style.spantwo}></span>
        <p className={style.ptwo}>个人简介</p>
      </div>
      <div className={style.grjj}>
        <p className={style.pthr}>{DoctorData.personalProfile}</p>
      </div>
      <div className={style.jj}>
        <span className={style.spantwo}></span>
        <p className={style.ptwo}>擅长领域</p>
      </div>
      <div className={style.scly}>
        <p className={style.pfour}> {DoctorData.goodField} </p>
      </div>
      <div className={style.pj}>
        <span className={style.spanthr}></span>
        <p className={style.pfiv}>用户评价</p>
      </div>
      <div className={style.pjlist}>
        {getDoctorPjData.map((v, i) => (
          <div key={i}>
            <div className={style.pjpj}>
              <div className={style.headerX}>
                <img className={style.head} src={v.headPic} alt="" />
                {v.nickName}
              </div>
              {v.commentTime}
            </div>
            <p className={style.psix}>{v.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Index;
