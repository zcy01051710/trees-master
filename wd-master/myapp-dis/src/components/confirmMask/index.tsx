import React from "react";
import confirmBtn from '../../assets2/images/image/xxhdpi/know.png'
import fellUrl from "../../assets2/images/image/xxhdpi/fell_gesture.png";
import style from "./style.module.scss";

interface PropsType {
  onClose: () => void;
}

export const ConfirmMask: React.FC<PropsType> = ({ onClose }) => {
  return (
    <div>
      <img className={style.slide} src={fellUrl} alt="" />
      <div className={style.text}>下滑查看更多评论</div>
      <img
        onClick={() => onClose()}
        className={style.confirm}
        src={confirmBtn}
        alt=""
      />
    </div>
  );
};
