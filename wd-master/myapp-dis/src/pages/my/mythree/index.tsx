import React, { useReducer } from 'react'
import style from './style.module.scss';
import { useNavigate } from 'react-router-dom';
import logo1 from '../../asses/icon/common resource/hdpi/common_information_next_n.png';
import logo from '../../asses/icon/common resource/hdpi/common_icon_back_black_n.png';
import { useRequest } from 'ahooks';
import { getMoney } from '../../../api/MyIndex';
import timestampToTime from '../../wardmate/Time/index';
interface MoneyList{
    content: string,
    createTime: number,
    id: number
}
const Index:React.FC=()=>{
    const navigate=useNavigate();
     const params={page:2,count:5}
    const {data:MoneyList=[]}=useRequest(async()=>(await getMoney({...params})).result as MoneyList[])
    console.log(MoneyList)
  return (
    <div className={style.box}>
     <div className={style.top}>
        <img src={logo} alt="" onClick={()=>navigate('/my/mymessage')}/>
        <span>H币入账信息</span>
       </div>
         <div className={style.lists}>
          {MoneyList.length>0 && MoneyList.map((item,ind)=>(
        <div className={style.list} key={ind}>
            <div className={style.title}>{item.content}</div>
            <div className={style.text}>{timestampToTime(item.createTime)}
            <span>立即查看 <img src={logo1} alt="" /></span>
            </div>
        </div>
          ))}
        </div>
    </div>
  )
}
export default Index
