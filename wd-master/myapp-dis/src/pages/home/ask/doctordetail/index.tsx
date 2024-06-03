import React from 'react'
import  tu from '../../../asses/images/启动页.png'
import style from './style.module.scss'
import { useRequest } from 'ahooks'
import { getDcotorDetail } from '../../../../api/HomeIndex'
import { useParams } from 'react-router-dom'
const Index:React.FC=()=>{
    const { id } = useParams()!
    const {data}=useRequest(async()=>(await getDcotorDetail(Number(id))).result)
    console.log(data);
    
    return(
        <div className={style.box}>
            <div>
                <dl>
                    <dt> <img src={tu} alt="" /> </dt>
                    <dd>
                        <p>哈哈哈哈哈</p>
                        <p>哈哈哈哈哈</p>
                        <p>哈哈哈哈哈</p>
                        <p>哈哈哈哈哈</p>
                        <div>哈哈哈哈哈</div>
                    </dd>
                </dl>
            </div>
        </div>
    )
}
export default Index