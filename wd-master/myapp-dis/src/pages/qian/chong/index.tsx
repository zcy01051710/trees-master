import React from 'react'
import style from './index.module.scss'
import tu1 from '../../../xxhdpi/common_icon_white_n.png'
import tu2 from '../../../xxhdpi/common_icon_weixin_n.png'
import tu3 from '../../../xxhdpi/common_icon_zhifubao_n.png'
import { Radio } from 'react-vant';
import { useNavigate } from 'react-router-dom'
import { useRequest } from 'ahooks'
import { chong } from '../../../api/qian'

const Index:React.FC=()=>{
  const {data}=useRequest(
    async()=>(await chong()).result
  )
  console.log(data);
  
  const navigate=useNavigate()
    return(
      <div>
          <div className={style.one}>
            <img src={tu1} alt="" className={style.jt} onClick={()=>navigate("/qian")} />
            <span>充值</span>
          </div>
          <div className={style.two}>
              <div className={style.tw1}></div>
              <div className={style.tw2}>
                <span className={style.oi}>充值金额</span>
                <span className={style.oj}>￥</span>
                <span className={style.om}>{3}</span>
                <span className={style.oa}>本次可获得<span className={style.os}>300</span>H币</span>
              </div>
          </div>
          <div className={style.thr}>
            <span>最低充值1元，1元可兑换100H币。</span>
          </div>
          <div className={style.for}>
            <span>选择充值方式</span>
          </div>
          <div className={style.fiv}>
            <div><img src={tu2} alt="" /><span>微信支付</span></div>
            <div><img src={tu3} alt="" /><span>支付宝支付</span></div>
          </div>
          <div className={style.six}>
          <Radio.Group defaultValue="1">
            <Radio name="1" className={style.q1}></Radio>
            <Radio name="2" className={style.q2}></Radio>
          </Radio.Group>
          </div>
          <button className={style.an} onClick={()=>navigate("/qian/cheng")}>充值</button>
      </div>
    )
}
export default Index