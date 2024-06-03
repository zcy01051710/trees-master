import React, { ReactNode } from 'react'
import style from './style.module.scss';
 import { useNavigate } from 'react-router-dom';
//import logo1 from '../../asses/icon/common resource/hdpi/common_information_next_n.png';
import logo from '../../asses/icon/common resource/hdpi/common_icon_back_black_n.png';
import { useRequest } from 'ahooks';
import { getDesc } from '../../../api/MyIndex';
import { WDImage } from '../../../components';

interface DescDate{
  
    adoptTime: number,
    content: string,
    disease: string,
    releaseUserHeadPic:string,
    releaseUserId: number,
    releaseUserNickName: string,
    title:string,

}
const Index:React.FC=()=>{
    const navigate=useNavigate();
    const params={page:1,count:5}
    const {data:DescDate=[]}=useRequest(async()=>(await getDesc({...params})).result as DescDate[])
    console.log(DescDate);
  return (
    <div className={style.box}>
    <div className={style.top}>
        <img src={logo} alt="" onClick={()=>navigate('/my')}/>
        <span>被采纳的建议</span>
       </div>
       {DescDate.length>0 && DescDate.map((item,ind)=>(
       <div className={style.con} key={ind}>
        <div className={style.list}>
          <div className={style.left}>
            <WDImage src={item.releaseUserHeadPic} alt={''}></WDImage>
          <div className={style.name}>{item.releaseUserNickName}</div>
          </div>
          <div className={style.conent}>
           <div className={style.title}>{item.title}</div>
           <div className={style.desc}>{item.disease}</div>
           <div className={style.time}>{item.adoptTime}</div>
          </div>
        </div>
        <div className={style.my}>
          <div className={style.text}>
          我的建议
          </div>
          <div className={style.desk}>
            {item.content}
          </div>
        </div>
       </div>
       ))}
       
    </div>
  )
}
export default Index;
