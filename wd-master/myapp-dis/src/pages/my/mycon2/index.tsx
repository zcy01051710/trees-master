import React from 'react'
import { useNavigate } from 'react-router-dom';
import logo from '../../asses/icon/common resource/hdpi/common_icon_back_black_n.png';
import style from './style.module.scss';
import logo1 from '../../asses/icon/common resource/hdpi/circle_icon_drop_down_n.png';
import logo2 from '../../asses/s1.png';
import logo3 from '../../asses/hdpi/add.png';
import { Input } from 'react-vant';
const Index:React.FC=()=>{
    const navigate=useNavigate();
  return (
    <div className={style.box}>
     <div className={style.top}>
        <img src={logo} alt="" onClick={()=>navigate('/my/mycon1')}/>
        <span>我的档案</span>
       </div>
    <div className={style.con}>
    <div className={style.title}>[主要症状]</div>
    <input className={style.titless} placeholder='面神经炎'></input>
    </div>
    <div className={style.con}>
    <div className={style.title}>[现病史]</div>
    <input className={style.titless} placeholder='周围性神经炎，下巴斜的，口齿不清，眼睛闭合不了，右边脸明显动不了'></input>
    </div>
    <div className={style.con}>
    <div className={style.title}>[既往病史]</div>
     <input className={style.titless} placeholder='无'></input>
    </div>
    <div className={style.con}>
    <div className={style.title}>[治疗经历]</div>
   <input className={style.titl} placeholder='北京天坛医院'></input>
     <input className={style.titl} placeholder='2018.12.10'></input>
    <input className={style.titl} placeholder='2018.12.15'></input>
    <input className={style.titl} placeholder='每天进行扎针和按摩，现在情况已经好转了，眼睛基本可以合闭了，说话也没那么费劲了。'></input>
    </div>
    <div className={style.one}>
        [相关图片]
    </div>
 
    <div className={style.three}>
    <img src={logo2} alt="" />
    <img src={logo3} alt="" />
    </div>
     <button>保存</button>
    </div>
  )
}
export default Index
