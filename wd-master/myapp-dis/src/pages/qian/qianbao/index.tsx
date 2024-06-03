import React from 'react'
import style from './index.module.scss'
import tu1 from '../../../xxhdpi/common_icon_white_n.png'
import { useNavigate } from 'react-router-dom'
import { useRequest } from 'ahooks'
import {  qianbao } from '../../../api/qian'

const Index:React.FC=()=>{
  const {data:yu}=useRequest(
    async()=>(await qianbao()).result
  )

  const navigate=useNavigate()
    return(
      <div>
        <div className={style.one}>
          <img src={tu1} alt="" className={style.tu1} onClick={()=>navigate('/my')}/>
          <p>我的钱包</p>
          <div className={style.on1}>
            <div className={style.oa}>{yu}</div>
            <div className={style.ob}>H币</div>
          </div>
          <div className={style.two}>
          满2000H币可提现
          </div>
          <button className={style.to} onClick={()=>{navigate('/qian/ti')}} >提现</button>
          <button  onClick={()=>{navigate('/qian/chong')}} className={style.too}>充值</button>
        </div>
        <div className={style.thr}></div>
        
        <div className={style.for}>
          <div className={style.fo1}>
            <div className={style.foa}>
              问诊咨询
            </div>
            <div className={style.fob}>
              2018.11.10
            </div>
          </div>
          <div className={style.fo2}>
            <span>-500H币</span>
          </div>
        </div>
        <div className={style.fe}>
          <div className={style.fe1}>
            <div className={style.fea}>
              签到
            </div>
            <div className={style.feb}>
              2018.11.09
            </div>
          </div>
          <div className={style.fe2}>
            <span>+10H币</span>
          </div>
        </div>
        <div className={style.for}>
          <div className={style.fo1}>
            <div className={style.foa}>
              问诊咨询
            </div>
            <div className={style.fob}>
              2018.11.10
            </div>
          </div>
          <div className={style.fo2}>
            <span>-20H币</span>
          </div>
        </div>
        <div className={style.fe}>
          <div className={style.fe1}>
            <div className={style.fea}>
              签到
            </div>
            <div className={style.feb}>
              2018.11.09
            </div>
          </div>
          <div className={style.fe2}>
            <span>+50H币</span>
          </div>
        </div>
        <div className={style.for}>
          <div className={style.fo1}>
            <div className={style.foa}>
              问诊咨询
            </div>
            <div className={style.fob}>
              2018.11.10
            </div>
          </div>
          <div className={style.fo2}>
            <span>-500H币</span>
          </div>
        </div>
        <div className={style.fe}>
          <div className={style.fe1}>
            <div className={style.fea}>
              签到
            </div>
            <div className={style.feb}>
              2018.11.09
            </div>
          </div>
          <div className={style.fe2}>
            <span>+10H币</span>
          </div>
        </div>
      </div>
    )
}
export default Index