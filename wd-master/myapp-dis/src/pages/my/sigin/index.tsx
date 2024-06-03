import React, { useState, useEffect } from'react';
import { Form, Input, Button, Toast } from "react-vant";
import { getEmailCodeApi, registerApi } from "../../../api/MyIndex";
import { RegisterState } from "../../../type";
import { useNavigate } from "react-router-dom";
import logo from "../../asses/s2.png";
import style from './style.module.scss'
const emeailReg =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const Index: React.FC = () => {
  const [email, setEmail] = useState("");
  const navigate=useNavigate()
  const [code, setCode] = useState("");
  const getCode = async () => {
    if (!email) return Toast.fail("邮箱不可以为空");

    if (!emeailReg.test(email)) return Toast.fail("邮箱格式不正确");
    if (!isGettingCode) {
      setIsGettingCode(true);
    } else if (remainingTime === 0) {
      setIsGettingCode(false);
    }
    // 发送邮箱
    const data = await getEmailCodeApi(email);

    if (data.status === "0000") {
      Toast.success("验证码发送成功");
    }
  };

  const onFinish = (value: RegisterState) => {
    if (value.pwd1 !== value.pwd2) return Toast.fail("两次密码不一致");
    registerApi(value);
    navigate('/my/login')
  };
   const [remainingTime, setRemainingTime] = useState(60);
  const [isGettingCode, setIsGettingCode] = useState(false);

  useEffect(() => {
    if (isGettingCode) {
      const timer = setInterval(() => {
        setRemainingTime((prevTime) => prevTime - 1);
      }, 1000);

      if (remainingTime === 0) {
        clearInterval(timer);
        setIsGettingCode(false);
        setRemainingTime(60); // 重置剩余时间
      }

      return () => clearInterval(timer);
    }
  }, [isGettingCode, remainingTime]);

  return (
    <div className={style.loginBox1}>
      <div>
        <img src={logo} alt="" className={style.logo} />
        <div className={style.box1}>
          <Form
          className={style.box3}
          onFinish={onFinish}
          footer={
            <div style={{ margin: "16px 16px 0" }}>
              <Button className={style.btn} round nativeType="submit" type="primary" block>
                注册
              </Button>
            </div>
          }
        >
          <Form.Item
          labelWidth='50px'
          disabled={isGettingCode}
          className={style.boxItem1}
            name="email"
            label="邮箱"
            rules={[
              { pattern: emeailReg, message: "邮箱格式不正确", required: true },
            ]}
          >
            <Input
              value={email}
              onChange={(value) => setEmail(value)}
              suffix={
                <Button type="primary" size="mini" disabled={isGettingCode}  onClick={() => getCode()}>
                  {isGettingCode? `还剩 ${remainingTime} 秒后重新获取` : '获取验证码'}
                </Button>
              }
            ></Input>
          </Form.Item>
          <Form.Item
          labelWidth='50px'
            name="code"
            label="验证码"
            rules={[
              { pattern: /\d{6}/, message: "验证码不正确", required: true },
            ]}
          >
            <Input value={code} onChange={(value) => setCode(value)}></Input>
          </Form.Item>
          <Form.Item
            labelWidth='50px'
            name="pwd1"
            label="密码"
            rules={[{ message: "密码不可以为空", required: true }]}
          >
            <Input></Input>
          </Form.Item>
          <Form.Item
          labelWidth='60px'
            name="pwd2"
            label="重复密码"
            rules={[{ message: "密码不可以为空", required: true }]}
          >
            <Input></Input>
          </Form.Item>
          <Form.Item labelWidth='50px' name="invitationCode" label="邀请码">
            <Input></Input>
          </Form.Item>
        </Form>
        </div>
        </div>
    </div>
  );
};
export default Index;