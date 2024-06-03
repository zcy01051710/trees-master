import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Toast, NavBar } from 'react-vant'
import { Search } from '@react-vant/icons'
import style from './style.module.scss'
import mytu1 from '../../../xxhdpi/evaluation_icon_laugh_n.png'
import mytu2 from '../../../xxhdpi/my_icon_next_n.png'
import mytu3 from '../../../xxhdpi/my_icon_next_n.png'
import mytu4 from '../../../xxhdpi/my_icon_next_n.png'
import mytu5 from '../../../xxhdpi/my_icon_next_n.png'
import {store} from '../../../app/store';
const Index:React.FC=()=>{
  const navigate=useNavigate();
  const app=store.getState();
  console.log(app);

  const outLogin=()=>{
    navigate('/my/login');
    localStorage.clear()
  }
  return (
    <div>
        <NavBar
        title='设置'
        leftText
        onClickLeft={() => navigate('/my')}
        onClickRight={() => Toast('按钮')}
        />
        <div className={style.myone} >
          <img src={app.user.userInfo.headPic} alt="" className={style.tu1} />
          <span>{app.user.userInfo.nickName}</span>
          <img src={mytu2} alt="" className={style.tu2} onClick={()=>navigate('/my/mypeople')} />
        </div>
        <div className={style.mytwo}>
          <span>修改密码</span>
          <img src={mytu3} alt="" className={style.tu3}  onClick={()=>navigate('/my/mypad')}  />
        </div>
        <div className={style.mythr}>
          <div className={style.myth1}>
            <span>清除缓存</span>
            <img src={mytu4} alt="" className={style.tu4} />
          </div>
          <div className={style.myth1}>
            <span>屏幕亮度</span>
            <img src={mytu4} alt="" className={style.tu4}  onClick={()=>navigate('/my/mystart')}  />
          </div>
          <div className={style.myth1}>
            <span>版本检测</span>
            <img src={mytu4} alt="" className={style.tu4}  onClick={()=>navigate('/my/mynum')}  />
          </div>
        </div>
        <div className={style.myfor}>
          <div className={style.myth1}>
            <span>帮助中心</span>
            <img src={mytu4} alt="" className={style.tu4} />
          </div>
          <div className={style.myth1}>
            <span>关于我们</span>
            <img src={mytu4} alt="" className={style.tu4} />
          </div>
        </div>
        <div className={style.myfiv}>
          <span>邀请好友</span>
          <img src={mytu5} alt="" className={style.tu5} onClick={()=>navigate('/my/myfriend2')} />
        </div>
        <button onClick={outLogin}>退出登录</button>
    </div>
  )
}
export default Index