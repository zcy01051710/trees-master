import React from 'react'
import { useNavigate } from 'react-router-dom';
import { NavBar } from 'react-vant';
import style from './style.module.scss'
import { useRequest } from 'ahooks';
import { getPlase } from '../../../api/MyIndex';
import tu1 from "../../../xxhdpi/微信图片_20240529145734_03.gif"

const Index:React.FC=()=>{
  const {data:place}=useRequest(async()=>getPlase())
  console.log(place);
  interface plasedata{
    message: string,
    status: string
}
  const navigate=useNavigate();
    return(
      <div className={style.one}>
        <div onClick={()=>navigate('/my/myset')} >
            <NavBar
                title="邀请好友"
            />
        </div>
        <div className={style.ona}>
          <div className={style.on1}>
            <div className={style.on2}>
              <span className={style.on4}>
                您的邀请码
              </span>
              <span className={style.on5}>复制邀请码</span>
            </div>
            <div className={style.on3}>
              <div className={style.one1}>
                <img src={tu1} alt="" />
              </div>
              <div className={style.one2}>
                  <p>邀请好友下载APP</p>
                  <p>注册填写上方邀请码，双方可分别获得300H币</p>
                  <button>邀请好友</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}
export default Index