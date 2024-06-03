import React from 'react'
import { useNavigate } from 'react-router-dom'
import style from './style.module.scss'
import { NavBar } from 'react-vant';
import tu1 from '../../asses/hdpi/start_page.png'
import { useRequest } from 'ahooks';
import { xx } from '../../../api/qian';
import { log } from 'console';
import tu2 from '../../asses/hdpi/gift_flower.png'
import tu3 from '../../asses/hdpi/gift_certificate.png'
import tu4 from '../../asses/hdpi/gift_cup.png'

interface xq{
    doctorId:string;
    doctorName:string;
    imagePic:string;
    jobTitle:string;
    inauguralHospital:string;
    praise:string;
    serverNum:string;
    servicePrice:string;
    followFlag:string;
    personalProfile:string;
    goodField:string;
    commentNum:string;
    praiseNum:string;
    badNum:string;
    doctorReceiveGiftList:string;
    commentList:string;
    }

const Index:React.FC=()=>{
    const {data = {} as xq }=useRequest(async()=>(await xx()).result as xq )
    console.log(data);
    const navigate=useNavigate()
    return(
        <div>
            <div className={style.one} onClick={()=>navigate('/qian/list')}>
                <NavBar
                    title="医生详情"
                />
            </div>
            <div className={style.two}>
                <dl>
                    <dt><img src={data.imagePic} alt="" className={style.tw1} /></dt>
                    <dd className={style.yi}>
                        <p>
                            <h4>{data.doctorName}</h4>
                            <span>{data.jobTitle}</span>
                        </p>
                        <p>
                            <span>{data.inauguralHospital}</span>
                        </p>
                        <p>
                            <span>好评率 {data.praiseNum} 服务患者数{data.serverNum}</span>
                            <span></span>
                        </p>
                        <p>
                            <span>|</span>
                            <span>他收到的礼物</span>
                        </p>
                        <div className={style.er1}>
                            <img src={tu2} alt="" className={style.ye} />
                            <span>{data.followFlag}</span>
                        </div>
                        <div className={style.er1}>
                            <img src={tu3} alt="" className={style.san} />
                            <span>{data.followFlag}</span>
                        </div>
                        <div className={style.er1}>
                            <img src={tu4} alt="" className={style.si} />
                            <span>{data.followFlag}</span>
                        </div>
                    </dd>
                </dl>
                <div className='thr'>
                    <span className={style.gang}>|</span>
                    <span>个人简历</span>
                    <p className={style.jian}>{data.personalProfile}</p>
                </div>
            </div>
        </div>
    )
}
export default Index