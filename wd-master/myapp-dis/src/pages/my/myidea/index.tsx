import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import logo from '../../asses/icon/common resource/hdpi/common_icon_back_black_n.png';
import style from './style.module.scss';
import img from '../../asses/hdpi/doctor.png';
import { SwipeCell, Flex, Button, Image, Typography } from 'react-vant';
import { useRequest } from 'ahooks';
import { getDoctor } from '../../../api/MyIndex';

interface doctorData{
    badNum: number,
    departmentId: number,
    departmentName: string,
    doctorId: number,
    id: number,
    imagePic: string,
    inauguralHospital: string,
    jobTitle: string,
    name: string,
    number: number,
    praise: string,
    praiseNum: number
}

const Index:React.FC=()=>{

  const navigate=useNavigate()
 const params={page:1,count:5}
 const {data:Dactor=[]}=useRequest(async ()=>(await getDoctor({...params})).result as doctorData[])
 console.log(Dactor);

 //关注

  const [isFollowed, setIsFollowed] = useState(false);

  const handleFollowClick = () => {
    setIsFollowed(true);
  };

  const handleUnfollowClick = () => {
    setIsFollowed(false);
  };
  
  return (
    <div className={style.box}>
    <div className={style.top}>
       <div className={style.top}>
        <img src={logo} alt="" onClick={()=>navigate('/my')}/>
        <span>我的关注</span>
       </div>  
    </div>

  {Dactor.length>0 && Dactor.map((item,ind)=>(
    <SwipeCell
      rightAction={
        isFollowed? (
        <Button style={{ height: '100%',width:'40px'}} square type="danger" onClick={handleUnfollowClick}>
          取消关注
        </Button>
      ) : (
         <Button style={{ height: '100%',width:'40px'}} square type="danger" onClick={handleFollowClick}>
          关注
        </Button>
      )}
      key={ind}
    >
         <div className={style.headMain}>
             <div className={style.headMainn}>
           <div className={style.left}>
              <img src={item.imagePic} alt="" />
            </div><div className={style.right}>
                <div className={style.headRight}>
                  <div>{item.name}</div>
                  <span>{item.jobTitle}</span>
                </div>
                <div className={style.headRightt}>{item.inauguralHospital}</div>
                <div className={style.headLeft}>
                  <div>好评率 {item.praiseNum}</div>
                  <span>服务患者数 {item.number}</span>
                </div>
              </div>
              </div>
      </div>
     
    </SwipeCell>
   
 ))}
    </div>
  )
}
export default Index
