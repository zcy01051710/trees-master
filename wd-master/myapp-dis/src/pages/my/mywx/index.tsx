import React from 'react'
import style from './style.module.scss';
import logo from '../../asses/icon/common resource/hdpi/common_icon_back_black_n.png';
import { useNavigate } from 'react-router-dom';
import logo1 from '../../asses/hdpi/id_card_front.png';
import logo2 from '../../asses/hdpi/id_card_back.png';
import { Button } from 'react-vant';
const Index:React.FC=()=>{
    const navigate=useNavigate();
  return (
    <div className={style.box}>
         <div className={style.top}>
        <img src={logo} alt="" onClick={()=>navigate('/my/mypeople')}/>
        <span>实名认证</span>
       </div>
       <div className={style.cons}>
       <div className={style.con}>
       <img src={logo1} alt="" className={style.img}/>
      </div>
       <div className={style.con}>
       <img src={logo2} alt="" className={style.img}/>
      </div>
     <Button type='primary' className={style.btn}>确定</Button>
       </div>
     
    </div>
  )
}
export default Index