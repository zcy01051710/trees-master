import { useRequest, useSetState } from 'ahooks'
import React, { ReactNode } from 'react'
import { useNavigate,useParams } from 'react-router-dom'
import { minxi, pl } from '../../../api/qian'
import { NavBar } from 'react-vant';
import style from './style.module.scss'
import {lb} from '../../../api/qian'
export interface commentListState {
  commentTime: number;
  content: string;
  headPic: string;
  nickName: string;
}
interface doctorReceiveGiftListState {
  giftName: string;
  giftPic: string;
  receiveNum: number;
  worth: number;
}
interface p{
    commentTime: number,
    content: number,
    headPic: string,
    nickName: string
}
export interface DetailState {
  badNum: number;
  commentList: commentListState[];
  commentNum: number;
  doctorId: number;
  doctorName: string;
  doctorReceiveGiftList: doctorReceiveGiftListState[];
  followFlag: number;
  imagePic: string;
  inauguralHospital: string;
  jobTitle: string;
  personalProfile: string;
  goodField:string;
  praise: string;
  praiseNum: number;
  serverNum: number;
  servicePrice: number;
}
const Index:React.FC=()=>{
    const {id}=useParams()!
    const {data:qqqq={} as DetailState}=useRequest(
        async()=>(await minxi(Number(id))).result
    )
    console.log(qqqq)
    const [params,setparams]=useSetState({
        doctorId:+id!,
        page:1,
        count:5,
    })
    const {data:xxx=[] as p[]}=useRequest(
        async()=>(await pl(params)).result as p[]
    )
    console.log(xxx)
    const navigate=useNavigate()
    return(
        <div>
            <div className={style.tou}onClick={()=>navigate('/qian/list')}>
                <NavBar title="医生详情"/>
            </div>
            <div className={style.one}>
                <dl className={style.oon}>
                    <dt className={style.tu}>
                        <img src={qqqq.imagePic} alt="" className={style.imagePic} />
                    </dt>
                    <dd className={style.zi}>
                        <p className={style.z1}>
                            <h3>{qqqq.doctorName}</h3>
                            <span>{qqqq.jobTitle}</span>
                        </p>
                        <p className={style.z2}>
                            <span>{qqqq.inauguralHospital}</span>
                        </p>
                        <p>
                            <span>好评率{qqqq.praise}     服务患者数{qqqq.serverNum}</span>
                        </p>
                        <p className={style.z3}>
                            <span className={style.z4}>|</span>
                            <span>他收到的礼物</span>
                        </p>
                        <div className={style.ooe}>
                            
                            {qqqq.doctorReceiveGiftList && qqqq.doctorReceiveGiftList.map((v: {
                                [x: string]: ReactNode; giftPic: string | undefined; },i: any)=>{
                                return (
                                    <div>
                                        <img src={v.giftPic} alt="" className={style.ooq} />
                                        <p className={style.ps}>
                                            {v.receiveNum}
                                        </p>
                                        
                                    </div>
                                )
                            })}
                        </div>
                    </dd>
                </dl>
            </div>
            <div className={style.two}>
                <p className={style.tw1}><span className={style.gang}>|</span>个人简历</p>
                <p className={style.tw3}>
                    {qqqq.personalProfile}
                </p>
            </div>
            <div className={style.two}>
                <p className={style.tw1}><span className={style.gang}>|</span>擅长领域</p>
                <p className={style.tw3}>
                    {qqqq.goodField}
                </p>
            </div>
            <div className={style.two}>
                <p className={style.tw1}><span className={style.gang}>|</span>用户评论</p>
                {
                     xxx&&xxx.map((v,i)=>(
                        <div>
                             
                <p className={style.tw3}>
                    {v.content}
                </p>
                        </div>
               ))
                }
            </div>
            <div className={style.thr}>
                <p className={style.th1}onClick={()=>navigate('/qian/geng?id=' + id)}>点击查看更多评论</p>
            </div>
            <div className={style.for}>
                <div className={style.fo1}>
                    {qqqq.servicePrice}H币/次
                </div>
                <div className={style.fo2}>
                    <button>立即咨询</button>
                </div>
            </div>
        </div>
    )
}
export default Index