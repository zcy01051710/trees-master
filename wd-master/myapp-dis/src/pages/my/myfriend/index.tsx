import React from 'react'
import style from './style.module.scss';
import { useNavigate } from 'react-router-dom';
import login2  from '../../asses/icon/common resource/hdpi/common_information_next_n.png';
import logo from '../../asses/icon/common resource/hdpi/common_icon_back_black_n.png';
import { useRequest } from 'ahooks';
import { getFriend } from '../../../api/MyIndex';
import timestampToTime from '../../wardmate/Time';

interface FriendData{
    amount: number,
    collectionNum: number,
    commentNum: number,
    detail: string,
    releaseTime: number,
    sickCircleId: number,
    title: string
}
const Index:React.FC=()=>{
    const navigate=useNavigate();
     const params={page:1,count:5,}
    const {data:FriendData=[]}=useRequest(async ()=>((await getFriend({...params}))).result as FriendData[])
    console.log(FriendData);
  return (
    <div className={style.box}>
      <div className={style.top}>
        <img src={logo} alt="" onClick={()=>navigate('/my')}/>
        <span>我的病友圈</span>
       </div>
        {FriendData.length>0 && FriendData.map((item,ind)=>(
        <div className={style.con} key={ind}>
        <div className={style.left}>
         <div className={style.num}>{timestampToTime(item.releaseTime)}</div>
         {/* <div className={style.mouth}>{timestampToTime(item.releaseTime)}</div> */}
        </div>
        <div className={style.right}>
          <div className={style.list}>
            <div className={style.title}>
            {item.title}
            </div>
            <div className={style.titles}>
             {item.detail}
              <div className={style.span} onClick={()=>navigate(`/my/myfriends/${item.sickCircleId}`)}>
                查看评论
                <img src={login2} alt="" className={style.img}/>
              </div>
            </div>
          </div>
        </div>
      </div>
        ))}
      
    </div>
  )
}
export default Index