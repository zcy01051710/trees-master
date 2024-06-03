import React, { useState } from'react';
import { Form, Input, Button, Toast } from "react-vant";
import { useNavigate } from "react-router-dom";
import { WDImage } from '../../../components';
import style from './style.module.scss'
import {store} from '../../../app/store'
import { PutShan } from '../../../api/MyIndex';
const emeailReg =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const Index: React.FC = () => {
  const [email, setEmail] = useState("");
  const navigate=useNavigate()
  const state=store.getState()
const wanShan=()=>{
    PutShan({email}).then(resp=>{
        if(resp.status==='0000'){
            navigate('/my/mypeople')
        }
    })
 
}
  
  
    
  return (
    <div className={style.loginBox1}>
      <div>
        <h3 className={style.h3}>完善信息</h3>
        <div className={style.image}>
            <WDImage src={state.user.userInfo.headPic} alt={''}></WDImage>
        </div>
        <div className={style.box1}>
          <Form
          className={style.box3}
        >
          <Form.Item
         
          labelWidth='50px'
          className={style.boxItem1}
            name="email"
            // label="邮箱号"
            rules={[
              { pattern: emeailReg, message: "邮箱格式不正确", required: true },
            ]}
          >
            <Input
              value={email}
              onChange={(value) => setEmail(value)}
              placeholder='请输入邮箱账户'
              
            ></Input>
          </Form.Item>
        </Form>
        <div style={{ margin: "200px 16px 0" }}>
              <Button className={style.btn}  nativeType="submit" type="default" block onClick={()=>wanShan()}>
               完成
              </Button>
            </div>
        </div>
        </div>
    </div>
  );
};
export default Index;