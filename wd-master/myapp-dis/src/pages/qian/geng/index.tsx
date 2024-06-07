import React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { NavBar } from "react-vant";
import style from "./style.module.scss";
import { useRequest } from "ahooks";
import { getDoctorPjDetail } from "../../../api/qian";
import { WDImage } from "../../../components";

interface getDoctorPjDetail {
  commentTime: number;
  content: number;
  headPic: string;
  nickName: string;
}
const Index: React.FC = () => {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id")!;
  const { data: doctor = [] } = useRequest(
    async () => ((await getDoctorPjDetail(Number(+id))).result as getDoctorPjDetail[])
  );
  console.log(doctor);
  const navigate = useNavigate();
  return (
    <div>
      <div className={style.one} onClick={()=>navigate(-1)}>
        <NavBar title="评论列表" />
      </div>
      <div className={style.two}>
        {
            doctor.map((v,i)=>(
                <div key={i}>
                    <div className={style.tx}>
                        <WDImage src={v.headPic} alt={""}></WDImage>
                        <span className={style.emo}>{v.nickName}</span>
                        <span className={style.rty}>{v.commentTime}</span>
                    </div>
                    <p className={style.jkl}>
                        {v.content}
                    </p>
                </div>
            ))
        }
      </div>
    </div>
  );
};
export default Index;