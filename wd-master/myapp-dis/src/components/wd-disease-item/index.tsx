import React from "react";
import { DiseaseContentState } from "../../pages/wardmate/HomeMate";
import style from "./style.module.scss";
import timestampToTime from "../time";
interface PropsType {
  v: DiseaseContentState;
   onClick?: () => void
}

export const WDDiseaseItem: React.FC<PropsType> = ({ v,onClick }) => {
  return (
    <div className={style.item} onClick={onClick}>
      <h3 className={style.title}>{v.title}</h3>
      <div className={style.releaseTime}>
        {timestampToTime(v.releaseTime)}
      </div>
      <div className={style.detail}>{v.detail}</div>
      <div className={style.btm}>
        <span className={style.span}>收藏{v.collectionNum}</span>
        <span>建议{v.commentNum}</span>
      </div>
    </div>
  );
};