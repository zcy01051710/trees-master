import React from 'react'
import style from './index.module.scss'
import { useNavigate } from 'react-router-dom'
import { Toast, NavBar } from 'react-vant';
import { Steps } from 'react-vant';

const Index:React.FC=()=>{
    const navigate=useNavigate()
      return(
        <div>
            <div onClick={()=>navigate('/qian/ti')}>
                 <NavBar title="H币提现"  />
            </div>
          <div className={style.one}>
          <Steps direction="vertical" active={2} activeColor="#8A8EFD">
              <Steps.Item>
                <h3>发起申请</h3>
              </Steps.Item>
              <Steps.Item>
                <h3>银行处理中</h3>
                <p>预计03-12 12:23千到账</p>
              </Steps.Item>
              <Steps.Item>
                <h3>到账成功</h3>
              </Steps.Item>
            </Steps>
          </div>
          <div className={style.two}>
            <span className={style.tw1}>提现金额</span><span className={style.tw2}>￥20.00</span>
          </div>
          <div className={style.two}>
            <span className={style.tw1}>到账银行卡</span><span className={style.tw2}>建设银行  尾号  9276</span>
          </div>
          <button className={style.anniu} onClick={()=>navigate('/qian')}>完成</button>
        </div>
      )
  }
  export default Index