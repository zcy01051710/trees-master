import React from 'react'
import style from './style.module.scss';
import { useNavigate } from 'react-router-dom';
import logo1 from '../../asses/icon/common resource/hdpi/common_information_next_n.png';
import logo from '../../asses/icon/common resource/hdpi/common_icon_back_black_n.png';
import timestampToTime from '../../wardmate/Time/index';
import { VideoPlayer } from "../../../components";
import { useRequest } from 'ahooks';
import { getAdio } from '../../../api/MyIndex';

interface AdioData{
    buyNum: number,
    createTime: number,
    duration: number,
    id: number,
    originalUrl:string,
    price: number,
    shearUrl:string,
    title:string,
    videoId: number,
    whetherBuy:number
}

const Index:React.FC=()=>{
    const navigate=useNavigate();

    const params={page:1,count:5}
     //视频
   const {data:AdioData=[]}=useRequest(async ()=>(await getAdio({...params})).result as AdioData[])
   console.log(AdioData);

  return (
    <div className={style.box}>
        <div className={style.top}>
        <img src={logo} alt="" onClick={()=>navigate('/my')}/>
        <span>购买的视频</span>
       </div>
        {AdioData.length>0 && AdioData.map((item,ind)=>(
             <div className={style.looks} key={ind}>
              <div className={style.look}>
                <h3>{item.title}</h3>
              </div>
              <div className={style.qq}>
                 <VideoPlayer url={item.shearUrl}></VideoPlayer>
              </div>
              <div className={style.title}>
                <span className={style.text}>{timestampToTime(item.createTime)}分钟</span>
                <span>删除</span>
              </div>
            </div>
            ))}
    </div>
  )
}
export default Index