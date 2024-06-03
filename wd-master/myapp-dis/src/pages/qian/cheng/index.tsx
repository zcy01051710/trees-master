import React from "react";
import style from './index.module.scss'
import tu1 from '../../../pages/asses/hdpi/evaluation_background.png'
import tu2 from '../../../xxhdpi/common_icon_collect_n.png'
import { useNavigate } from 'react-router-dom'
import tu3 from '../../../xxhdpi/wer.jpg'
import { useRequest } from "ahooks";

import { qian } from "../../../api/qian";
const Index:React.FC=()=>{
    const {data:Mingshi=[]}=useRequest(
        async()=>(await qian()).result as mingshi[]
    )
    console.log(Mingshi);
    
    const navigate=useNavigate()
    interface  mingshi{
        badNum: number,
        doctorId: number,
        doctorName: string,
        imagePic: string,
        inauguralHospital: string,
        jobTitle: string,
        praise: string,
        praiseNum: number,
        serverNum: number,
        servicePrice: number
    }
    return(
        <div>
            <div className={style.one}>
                <span>充值成功</span>
            </div>
            <div className={style.two}>
                <img src={tu1} alt="" className={style.ty}/>
                <span className={style.tuo}>充值成功,<span className={style.cha} onClick={()=>navigate('/qian')}>立即查看</span></span>
            </div>
            <img src={tu2} alt="" className={style.cs} />
            <div className={style.thr}>
                <span>名医推荐</span>
            </div>
            <div className={style.for}>
                {
                    Mingshi&&Mingshi.map((item,index)=>(
                        <div className={style.list} key={index} >
                             <><div className={style.fo1} >
                            <img src={item.imagePic} alt="" className={style.om} />
                        </div><div className={style.fo2}>
                                <div className={style.fo21}>
                                    <span className={style.fo25}>{item.doctorName}<span className={style.fo23}>{item.jobTitle}</span></span>

                                </div>
                                <div className={style.fo21}><span className={style.fo26}>{item.inauguralHospital}</span></div>
                                <div className={style.fo21}><span className={style.fo27}>{item.praise}<span className={style.fo28}>患者数量{item.serverNum}</span></span></div>
                                <div className={style.fo21}><button>立即咨询</button></div>
                            </div></>
                        </div>
                       
                    ))
                }
              
                
            </div>
        </div>
    )
}
export default Index