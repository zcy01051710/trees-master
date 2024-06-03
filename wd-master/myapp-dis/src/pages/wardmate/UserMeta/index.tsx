import React from 'react'
import { Image } from 'react-vant';
import style  from './index.module.scss';
import image from '../../asses/images/user_bg.png'
import { useNavigate } from 'react-router-dom'
import { MetaList } from '../Interface/Interface';
import { useRequest } from 'ahooks';
import timestampToTime from '../../home/Time/index'
import { getListMeta } from '../../../api/Wardmeta';
const src = 'https://img.yzcdn.cn/vant/cat.jpeg'
const Index:React.FC=()=>{
    
    
    const  navigate=useNavigate()
      const form={
        id:'5',
        page:3,
        count:10,
    }
    const {data:HomeList=[]}=useRequest(async()=>(await getListMeta({...form})).result as MetaList[])
    console.log(HomeList);
    
    return(
      <div>
        <Image  width='100vw' height='250px' src={image} />
        <div className={style.box}>
            <Image round width='50px' height='50px' src={src} />
            <div className={style.yue}>小悦悦</div>
        </div>
        <p className={style.quan}>他发布的病友圈</p>
        {
                HomeList && HomeList.map((item,ind)=>(
                    
                    <div className={style.list} key={ind} onClick={()=>navigate(`/home/meta/detail/${item.sickCircleId}`)}>
                        <h3 className={style.h3}>{item.title}</h3>
                        <span className={style.span}>{timestampToTime(item.releaseTime)}</span>
                        <p className={style.word}>{item.detail}</p>
                        <div className={style.word1}><span className={style.span}>{'收藏'+item.collectionNum}</span> <span className={style.span}>{'建议'+item.amount}</span></div>
                    </div>
                ))
            }
      </div>
    )
}
export default Index