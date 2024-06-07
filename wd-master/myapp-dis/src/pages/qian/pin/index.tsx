import React from "react";
import { Toast, NavBar } from 'react-vant';
import style from './style.module.scss'
import tu1 from '../../asses/hdpi/evaluation_success.png'
import tu2 from '../../asses/hdpi/gift_flower.png'
import tu3 from '../../asses/hdpi/gift_certificate.png'
import tu4 from '../../asses/hdpi/gift_cup.png'

const Index:React.FC=()=>{
    
    return(
        <div>
            <div className={style.one}>
                <NavBar title="评价成功"/>
            </div>
            <div className={style.two}>
                <dl className={style.tw4}>
                    <dt><img src={tu1} alt="" className={style.tw1} /></dt>
                    <dd><span className={style.tw2}>评价成功，感谢您！</span></dd>
                </dl>
            </div>
            <div className={style.thr}>
                <span className={style.th1}>如果您的问题得到解决？送个礼物鼓励一下吧~</span>
            </div>
            <div className={style.for}>
                <div className={style.fo1}>
                    <div className={style.fo4}>
                        <img src={tu2} alt="" className={style.t1} />
                    </div>
                    <div className={style.fo5}>
                        <span className={style.fo6}>花束</span>
                        <p className={style.fo7}>20H币</p>
                        <button className={style.fo8}>立即赠送</button>
                    </div>
                </div>
                <div className={style.fo2}>
                    <div className={style.fo4}>
                        <img src={tu3} alt="" className={style.t1} />
                        
                    </div>
                    <div className={style.fo5}>
                        <span className={style.fo6}>证书</span>
                        <p className={style.fo7}>50H币</p>
                        <button className={style.fo8}>立即赠送</button>
                    </div>
                </div>
                <div className={style.fo3}>
                    <div className={style.fo4}>
                        <img src={tu4} alt="" className={style.t1} />
                    </div>
                    <div className={style.fo5}>
                        <span className={style.fo6}>奖杯</span>
                        <p className={style.fo7}>100H币</p>
                        <button className={style.fo8}>立即赠送</button>
                    </div>
                </div>
                
            </div>
            <button className={style.fo9}>返回</button>
        </div>
    )
}
export default Index