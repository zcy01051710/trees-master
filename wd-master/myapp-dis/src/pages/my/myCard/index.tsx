import React from 'react'
import style from './style.module.scss';
import { useNavigate } from 'react-router-dom';
import logo from '../../asses/icon/common resource/hdpi/common_icon_back_black_n.png';
import { Button } from 'react-vant';
import logo1 from '../../asses/hdpi/bank_card_front.png';
const Index:React.FC=()=>{
    const navigate=useNavigate()
  return (
    <div className={style.box}>
        <div className={style.top}>
        <img src={logo} alt="" onClick={()=>navigate('/my')}/>
        <span>绑定银行卡</span>
       </div>
        <div className={style.cons}>
       <div className={style.con}>
       <img src={logo1} alt="" className={style.img}/>
      </div>
     <Button type='primary' className={style.btn}>下一步</Button>
       </div>
    </div>
  )
}
export default  Index
