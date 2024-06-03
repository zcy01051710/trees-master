import React from 'react'
import style from './style.module.scss';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-vant';
import logo4 from '../../asses/hdpi/interview_news.png';
import logo3 from '../../asses/hdpi/recorded_message.png';
import logo2 from '../../asses/hdpi/system_information.png';
import img1 from '../../asses/icon/common resource/hdpi/message_icon_close_n.png';
import logo from '../../asses/icon/common resource/hdpi/common_icon_back_black_n.png';
const Index:React.FC=()=>{
const navigate=useNavigate();
  return (
    <div className={style.box}>
       <div className={style.top}>
        <img src={logo} alt="" onClick={()=>navigate('/my')}/>
         <div className={style.one}>消息</div>
        <div className={style.title}>全部已读</div>
       </div>
       <div className={style.con}>
       <div className={style.conent}>
        <div className={style.error}>
          <img src={img1} alt="" />
          <div className={style.text}>
            打开系统通知，H币入账信息不错过
          </div>
         <button>开启</button>
        </div>
       </div>
       </div>
       <div className={style.lists}>
        <div className={style.list}>
          <dl onClick={()=>navigate('/my/myone')}>
            <dt><img src={logo2} alt="" /></dt>
            <dd>系统消息</dd>
          </dl>
        </div>
         <div className={style.listq}>
          <dl onClick={()=>navigate('/my/mytwo')}>
            <dt><img src={logo4} alt="" /></dt>
            <dd>问诊消息</dd>
            <dd className={style.num}>5</dd>
          </dl>
        </div>
         <div className={style.listp}>
          <dl onClick={()=>navigate('/my/mythree')}>
            <dt><img src={logo3} alt="" /></dt>
            <dd>H币入账消息</dd>
          </dl>
        </div>
       </div>
    </div>
  )
}
 
export default Index