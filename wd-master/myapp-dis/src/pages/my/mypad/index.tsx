import React, { useState, useEffect } from'react';
import { Form, Input, Button, Toast, NavBar } from "react-vant";
import style from './style.module.scss'
import { RegisterState } from "../../../type";
import item3 from "../../asses/icon/common resource/hdpi/login_icon_hide_password_n.png";
import { useNavigate } from "react-router-dom";
import logo from "../../asses/s2.png";
import logo2 from '../../asses/icon/common resource/hdpi/common_icon_back_black_n.png';
import { putPwd } from '../../../api/MyIndex';
import { useRequest } from 'ahooks';

const Index: React.FC = () => {
  const [pwd1, setpwd1] = useState("");
  const [pwd2, setpwd2] = useState("");
  const navigate=useNavigate()
  

const TiaoDeng=()=>{
   console.log(pwd1,pwd2);
   putPwd({pwd1,pwd2}).then(resp=>{
    if(resp.status==='0000')
        {
            navigate('/my/login');
        }
   })
}
  return (
    <div className={style.loginBox1}>
      <div className={style.one} onClick={()=>navigate('/my/myset')} >
      <NavBar title="修改密码"/>
       </div>
        <div className={style.box1}>
          <Form
          className={style.box3}
        >
         <Form.Item
            labelWidth='50px'
            name="pwd1"
            label="我的密码"
            rules={[{ message: "密码不可以为空", required: true }]}
          >
            <Input 
              value={pwd1}
              onChange={(value)=>setpwd1(value)
              }
                suffix={
                // eslint-disable-next-line jsx-a11y/alt-text
                <img src={item3}></img>
              }
              className={style.input}
            ></Input>
          </Form.Item>
          <Form.Item
            labelWidth='50px'
            name="pwd2"
            label="设置新密码"
            rules={[{ message: "密码不可以为空", required: true }]}
          >
            <Input 
              value={pwd1}
              onChange={(value)=>setpwd2(value)
              }
                suffix={
                // eslint-disable-next-line jsx-a11y/alt-text
                <img src={item3}></img>
              }
               className={style.input}
            ></Input>
          </Form.Item>
        </Form>
        <div style={{ margin: "200px 16px 0" }}>
              <Button className={style.btn}  nativeType="submit" type="default" block onClick={()=>{TiaoDeng()}}>
               完成
              </Button>
            </div>
        </div>
        </div>
  );
};
export default Index;