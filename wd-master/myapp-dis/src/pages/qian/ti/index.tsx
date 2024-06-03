import React from 'react'
import style from './index.module.scss'
import tu1 from '../../../xxhdpi/common_icon_white_n.png'
import tu2 from '../../../xxhdpi/my_icon_next_n.png'
import tu3 from '../../../pages/asses/hdpi/bank_card_front.png'
import { useNavigate } from 'react-router-dom'
import { useRequest } from 'ahooks'
import { tixian } from '../../../api/qian'

const Index:React.FC=()=>{
  const {data:data}=useRequest(
    async()=>(await tixian()).result
  )
  console.log(data);
  
  const navigate=useNavigate()
    return(
      <div>
        <div className={style.one}>
          <img src={tu1} alt="" className={style.tu1} onClick={()=>navigate('/qian')} />
          <span className={style.xiao}>H币提现</span>
          <span className={style.jl}  onClick={()=>navigate('/qian/jilu')}>提现记录</span>
        </div>
        <div className={style.two}>
          <div className={style.twoa}>
            <span className={style.twoa1}>到账银行卡</span>
            <span className={style.twoa2}>中国建设银行</span>
            <img src={tu2} alt="" className={style.tp} />
            <p>当天24点前到账</p>
          </div>
          <div className={style.twob}>
            <span className={style.twob1}>提现金额</span>
            <p className={style.twob2}>￥<span className={style.twob3}>100</span></p>
          
          </div>
          <div className={style.twoc}>
            <input type="checkbox" /><span className={style.twoc1}>全部提现。3050H币，可提现30元。</span>
            <button className={style.anniu} onClick={()=>navigate('/qian/bu')}>提现</button>
          </div>
        </div>
        <div className={style.thr}>
            <span>当前银行卡</span>
        </div>
        <img src={tu3} alt="" className={style.th1} />
      </div>
    )
}
export default Index