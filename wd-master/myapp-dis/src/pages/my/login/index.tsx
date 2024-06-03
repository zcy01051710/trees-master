import React, { useState } from "react";
import style from "./style.module.scss";
import logo from "../../asses/s2.png";
import item1 from "../../asses/icon/common resource/hdpi/login_icon_mail_n.png";
import item2 from "../../asses/icon/common resource/hdpi/login_icon_lock_n.png";
import item3 from "../../asses/icon/common resource/hdpi/login_icon_hide_password_n.png";
import item4 from "../../asses/icon/common resource/hdpi/login_icon_weixin_white_n.png";
import { useNavigate } from "react-router-dom";
import { loginApi } from "../../../api/MyIndex";
import { loginSuccess } from "../../../app/user/userSlice";
import {useAppDispatch} from '../../../app/hooks'

const Index: React.FC = () => {
  interface LoginFormData {
    username: string;
    password: string;
  }
  const dispatch=useAppDispatch()
  const [formData, setFormData] = useState<LoginFormData>({
    username: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 这里可以添加登录逻辑，如发送请求等
    console.log(formData);
    loginApi(formData).then(resp=>{
      if(resp.status==='0000'){
        dispatch(loginSuccess(resp.result))
        navigate('/home')
      }
      
    })
  };
  const navigate = useNavigate();
  // 立即注册
  //   const toRegister=()=>{
  //     navigate('/register');
  //   }

  //   // 忘记密码
  //   const toPasOne=()=>{
  //     navigate(`/forgetpasone`)
  //   }

  return (
    <div className={style.loginBox}>
      <img src={logo} alt="" className={style.logo} />

      {/* 登录 */}

      <div className={style.box1}>
        <div className={style.boxItem1}>
          <img src={item1} alt="" />
          <input
            type="text"
            placeholder="请输入邮箱"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
        </div>
        <div className={style.boxItem2}>
          <img src={item2} alt="" />
          <input
            type="text"
            placeholder="请输入密码"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          <img src={item3} alt="" className="icon1" />
        </div>

        <button className={style.loginBtn} onClick={handleSubmit}>
          登录
        </button>
      </div>

      <div className={style.box2}>
        <div className={style.box3}></div>
      </div>

      <div className={style.group}>
        <div onClick={()=>navigate('/my/mypassword')}>忘记密码</div>
        <div className={style.g1}>
          暂无账号？<b onClick={()=>navigate('/my/sigin')}>立即注册</b>
        </div>
      </div>

      <div className={style.g2}>——————————其他登录方式——————————</div>

      <img src={item4} alt="" className={style.wx} />
    </div>
  );
};

export default Index;
