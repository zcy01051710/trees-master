import React from 'react'
import style from './style.module.scss';
import logo from '../../asses/icon/common resource/hdpi/common_icon_back_black_n.png';
import { useNavigate, useParams } from 'react-router-dom';
import { useRequest } from 'ahooks';
import { getFriends } from '../../../api/MyIndex';
import timestampToTime from '../../wardmate/Time';
import logo3  from '../../asses/icon/common resource/hdpi/comment_list_icon_adoption_n.png';
import logo1 from '../../asses/icon/common resource/hdpi/common_icon_agree_n.png';
import logo2 from '../../asses/icon/common resource/hdpi/common_icon_disagree_n.png';
import { WDImage } from '../../../components';
interface detailList{
    commentId: number,
    commentTime: number,
    commentUserId: number,
    content: string,
    headPic: string,
    nickName: string,
    opinion: number,
    opposeNum: number,
    supportNum: number,
    whetherDoctor: number
    
}
const Index:React.FC=()=>{
    const navigate=useNavigate();
    const {id}=useParams();
    const params={count:5,page:1, sickCircleId:id}
    const {data:detailList=[]}=useRequest(async ()=>(
    await getFriends({...params})).result.otherSickCircleCommentList as detailList[])
    console.log(detailList);
  return (
    <div className={style.box}>
         <div className={style.top}>
        <img src={logo} alt="" onClick={()=>navigate('/my/myfriend')}/>
        <span>列表评论</span>
       </div>
      {detailList.length>0 && detailList.map((item,ind)=>(
       <div className={style.con}>
        <dl className={style.dl}>
            <dt><WDImage src={item.headPic} alt="" /></dt>
            <dd>{item.nickName}</dd>
        </dl>
        <div className={style.title}>
           {item.content}
        </div>
        <div className={style.time}>
            {timestampToTime(item.commentTime)}
            <div className={style.big}>
           <div className={style.img}>
            <img src={logo1} alt="" />{item.supportNum}
           </div>
            <div className={style.img}>
            <img src={logo2} alt="" />{item.opposeNum}
           </div>
            <div className={style.img}>
            <img src={logo3} alt="" />采纳
           </div>
           </div>
        </div>
       </div>
      ))}
      
    </div>
  )
}
export default Index
