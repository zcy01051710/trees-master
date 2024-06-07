
import React from "react";
import { NavBar } from 'react-vant';
import style from './style.module.scss'

const Index:React.FC=()=>{
    
    return(
        <div>
            <div className={style.ping}>
                <NavBar
                    title="历史评价"
                />
            </div>
            <div className={style.wenzi}>
                <span className={style.gang}>|</span>
                <span className={style.zi}>文字评价</span>
                <p className={style.wen}></p>
            </div>
            <div className={style.xing}>
                <span className={style.shu}>|</span>
                <span className={style.zi}>星级评价</span>
                <p className={style.jia}></p>
            </div>
            <div className={style.li}>
                <span className={style.hua}>|</span>
                <span className={style.wu}>送了礼物</span>
                <img src="" alt="" />
            </div>
        </div>
    )
}
export default Index