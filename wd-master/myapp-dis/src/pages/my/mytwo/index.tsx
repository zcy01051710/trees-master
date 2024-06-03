import React from 'react'
import style from './style.module.scss';
import { useNavigate } from 'react-router-dom';
import logo1 from '../../asses/icon/common resource/hdpi/common_information_next_n.png';
import logo from '../../asses/icon/common resource/hdpi/common_icon_back_black_n.png';
import { useRequest } from 'ahooks';
import { getLook } from '../../../api/MyIndex';

const Index:React.FC=()=>{
    const navigate=useNavigate();

    const params={page:1,count:5}
    const {data}=useRequest(async()=>(await getLook({...params})).result)
    console.log(data);

  return (
    <div className={style.box}>
         <div className={style.top}>
        <img src={logo} alt="" onClick={()=>navigate('/my/mymessage')}/>
        <span>问诊消息</span>
       </div>
       <div className={style.lists}>
        <div className={style.list}>
            <div className={style.title}>您对医生小小美的咨询有了新的回复！</div>
            <div className={style.text}>2019年3月10日 17:21
            <span>立即查看 <img src={logo1} alt="" /></span>
            </div>
        </div>
       </div>
    </div>
  )
}
export default Index
