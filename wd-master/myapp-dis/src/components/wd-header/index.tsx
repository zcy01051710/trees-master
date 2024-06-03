import React from "react";
import style from "./style.module.scss";
import message from "../../pages/asses/images/common_nav_message_black_s.png";
import userUrl from "../../pages/asses/images/user.png";
import { useAppSelector } from "../../app/hooks";
import { useNavigate } from "react-router-dom";
import { WDImage } from "../wd-image";
interface PropsType {
  showSearch: boolean;
  title?: string
}

export const WDHeader: React.FC<PropsType> = ({ showSearch, title }) => {
  const headPic = useAppSelector(state => state.user.userInfo.headPic)
  const isLogin = useAppSelector(state => state.user.isLogin)
  const navigate = useNavigate()
  const handleClickLeft = () => {
    if(isLogin) {
      navigate('/my')
    } else {
      navigate('/login')
    }
  }
  return (
    <div className={style.header}>
      <div className={style.left} onClick={() => handleClickLeft()}>
        <WDImage src={headPic ? headPic : userUrl } alt={""}/>
        {/* <img src={} alt="" /> */}
      </div>
      <div className={style.middle}>
        {showSearch ? 
          <input type="text" className={style.input} onClick={()=>navigate('/home/searchlist')} placeholder="请搜索内容"/>
       : <div className={style.text}>
          <b>{title || ""}</b>
        </div>}
      </div>
      <div className={style.right}>
        <img src={message} alt="" onClick={() => navigate('/my/mymessage')} />
      </div>
    </div>
  );
};