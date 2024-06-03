import React, { useState, useEffect } from'react';
import { Form, Input, Button, Toast } from "react-vant";
import style from './style.module.scss'
import { RegisterState } from "../../../type";
import item3 from "../../asses/icon/common resource/hdpi/login_icon_hide_password_n.png";
import { useNavigate } from "react-router-dom";
import logo from "../../asses/s2.png";
import logo2 from '../../asses/icon/common resource/hdpi/common_icon_back_black_n.png';
import { PutHttp } from '../../../api/MyIndex';
const emeailReg =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const Index: React.FC = () => {
  const [email, setEmail] = useState("");
  const [pwd1, setpwd1] = useState("");
  const [pwd2, setpwd2] = useState("");
  const navigate=useNavigate()

const TiaoDeng=()=>{
 if (pwd1 !== pwd2) return Toast.fail("两次密码不一致");
 PutHttp({email,pwd1,pwd2}).then(resp=>{
  console.log(resp);
  if(resp.status==='0000'){
    navigate('/my/login')
  }
 })
}
  return (
    <div className={style.loginBox1}>
      <div>
        <div className={style.top}>
        <img src={logo2} alt="" onClick={()=>navigate('/my/mypassword')}/>
        <span>设置新密码</span>
       </div>
        <div className={style.box1}>
          <Form
          className={style.box3}
        >
          <Form.Item
         
          labelWidth='50px'
          className={style.boxItem1}
            name="email"
            label="邮箱号"
            rules={[
              { pattern: emeailReg, message: "邮箱格式不正确", required: true },
            ]}
          >
            <Input
              value={email}
              onChange={(value) => setEmail(value)}
              placeholder='账户邮箱'
            ></Input>
          </Form.Item>
          <Form.Item
            labelWidth='50px'
            name="pwd1"
            label="密码"
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
            ></Input>
          </Form.Item>
          <Form.Item
          labelWidth='60px'
            name="pwd2"
            label="重复密码"
            rules={[{ message: "密码不可以为空", required: true }]}
          >
            <Input
            value={pwd2}
              onChange={(value)=>setpwd2(value)}
               suffix={
                // eslint-disable-next-line jsx-a11y/alt-text
                <img src={item3}></img>
              }
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
    </div>
  );
};
export default Index;