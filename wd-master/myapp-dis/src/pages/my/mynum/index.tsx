import React from 'react'
import { useNavigate } from 'react-router-dom';
import style from './style.module.scss'
import { Toast, NavBar } from 'react-vant';

const Index:React.FC=()=>{
  const navigate=useNavigate();
    return(
      <div>
        <div className={style.one} onClick={()=>navigate('/my/myset')} >
            <NavBar
                title="版本检测"
            />
        </div>
        <span>已是最新版本</span>
      </div>
    )
}
export default Index