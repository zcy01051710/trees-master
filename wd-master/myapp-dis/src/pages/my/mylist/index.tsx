import React from 'react'
import logo from '../../asses/icon/common resource/hdpi/common_icon_back_black_n.png';
import style from './style.module.scss';
import logo1 from '../../asses/hdpi/no_message.png';
import { useNavigate } from 'react-router-dom';
const Index:React.FC=()=>{
  const navigate=useNavigate();
    return(
      <div>
       <div className={style.top}>
        <img src={logo} alt="" onClick={()=>navigate('/my')}/>
        <span>我的档案</span>
       </div>
       <div className={style.con}>
         <img src={logo1} alt="" />
         <div className={style.title}>当前暂无问诊</div>
         <button onClick={()=>navigate('/my/mycon')}>添加</button>
       </div>
      </div>
    )
}
export default Index