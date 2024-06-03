import React, { useEffect, useState } from 'react'
import style from './style.module.scss';
import { useNavigate } from "react-router-dom";
import logo2 from '../../asses/hdpi/boy.png';
import logo4 from '../../asses/icon/common resource/hdpi/common_icon_boy_n.png';
import logo3 from '../../asses/icon/common resource/hdpi/my_icon_next_n.png';
import logo from "../../asses/icon/common resource/hdpi/common_icon_back_black_n.png";
import { Input } from 'react-vant';
import {store} from '../../../app/store';
const Index:React.FC=()=>{
    const navigate=useNavigate()
    const app=store.getState()
    console.log(app.user.userInfo.email)
  return (
    <div className={style.box}>
    <div className={style.top}>
        <img src={logo} alt="" onClick={()=>navigate('/my/myset')}/>
        <span>我的信息</span>
      </div>
      <div className={style.con}>
        <div className={style.one}>
            <div className={style.two}>
             <div className={style.text}>头像</div>
             <img src={app.user.userInfo.headPic} alt="" />
            </div>
            <div className={style.three}>
            <div className={style.text}>昵称</div>
             <div className={style.four}>{app.user.userInfo.nickName} 
             <img src={logo3} alt="" onClick={()=>navigate('/my/myname')} />
             </div>
            </div>
        </div>
          <div className={style.one}>
            <div className={style.five}>
             <div className={style.text}>性别</div>
             <img src={logo4} alt="" className={style.img1}/>
             <img src={logo3} alt="" />
            </div>
            <div className={style.seven}>
            <div className={style.text}>体征</div>
             <div className={style.four}>{app.user.userInfo.height}身高{app.user.userInfo.weight}体重{app.user.userInfo.age}年龄
             <img src={logo3} alt="" />
             </div>
            </div>
        </div>
        <div className={style.cons}>
        <div className={style.pp}>
          <div className={style.text}>邮箱</div>
          <span>{app.user.userInfo.email}</span>
        </div>
        <div className={style.qq}>
          <div className={style.texts}>
            绑定微信
          </div>
          <div className={style.left}>去绑定
               <img src={logo3} alt="" />
          </div>
        </div>
        </div>
         <div className={style.cons}>
       <div className={style.pps}>
          <div className={style.texts}>
          实名认证
          </div>
          <div className={style.left} onClick={()=>navigate('/my/mywx')}>去认证
               <img src={logo3} alt="" />
          </div>
        </div>
        <div className={style.qqs}>
          <div className={style.texts}>
            绑定银行卡
          </div>
          <div className={style.left} onClick={()=>navigate('/my/mycard')}>去绑定
               <img src={logo3} alt="" />
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Index
