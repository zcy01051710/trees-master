import React from "react";
import a1 from "../../../pages/asses/icon/common resource/hdpi/common_icon_back_black_n.png";
import a2 from "../../../pages/asses/icon/common resource/hdpi/wallet_icon_clock_n.png";
import a3 from "../../../pages/asses/hdpi/wallet_icon.png";
import style from "./index.module.scss";
import {tixian} from '../../../api/qian'
import { useNavigate } from "react-router-dom";
import { useRequest } from "ahooks";
import { getTixianjilu } from "../../../api/qian";
interface Txjilu{
 id:string,
 money:number,
 remark:string,
 status:string,
 bankCardNumber:string,
 bankName:string,
 createTime:number
}
const Index: React.FC = () => {

 const Navigate=useNavigate()
 const {data:jilu=[]}=useRequest(async()=>(await getTixianjilu()).result as Txjilu[])
 console.log(jilu);
 
 return (
  <div className={style.box}>
   <div className={style.top}>
    < img src={a1} alt="" onClick={()=>Navigate(-1)} />
    <p>提现记录</p >
   </div>
   <div className={style.center}>
    <div className={style.left}>
     <div className={style.sl}>
      <p>10-28</p >
      <span>2018</span>
     </div>
     <div className={style.sl1}>
      <p>08-07</p >
      <span className={style.op1}>2018</span>
     </div>
     <div className={style.sl2}>
      <p>05-20</p >
      <span className={style.op}>2018</span>
     </div>
     <div className={style.sl3}>
      <p>05-20</p >
      <span className={style.op2}>2018</span>
     </div>
     <div className={style.sl4}>
      <p>05-20</p >
      <span className={style.op3}>2018</span>
     </div>
    </div>
    <div className={style.cen}>
      < img src={a2} alt="" />
      < img src={a3} alt="" className={style.img1}/>
      < img src={a3} alt="" className={style.img2}/>
      < img src={a3} alt="" className={style.img3}/>
      < img src={a3} alt="" className={style.img4}/>
    </div>
      <div className={style.right}>
          {jilu&&jilu.map((item,index)=>(
          <div className={style.bubble} key={index}>
          <p className={style.yuan}>{item.money}元</p >
          <p className={style.ys}>{item.remark}</p >
          <div className={style.dz}>到账银行卡</div>
          <div className={style.js}>{item.bankName}{item.bankCardNumber}</div>
        </div>
      ))
    }
    </div>
   </div>
  </div>
 );
};

export default Index;