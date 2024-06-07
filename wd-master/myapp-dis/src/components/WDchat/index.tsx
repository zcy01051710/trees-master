import React from "react";
import style from "./style.module.scss";
import { Image } from "react-vant";
import { paramsHistoryList } from "../../pages/qian/zx";
 
interface PropaType{
  v:paramsHistoryList
}
export const WDChatItem:React.FC<PropaType> = ({v}) => {
  return (
    <div className={v.direction===1?style.right:style.left}>
      <div className={style.touxiang}>
        <Image width="50" height="50" src={v.direction===1?v.userHeadPic:v.doctorHeadPic} className={style.avtor} />
      </div>
      <div className={style.concent}>
        <div className={style.text}>
          {v.content}
        </div>
      </div>
    </div>
  );
};
//  <div className={style.right}>
//             <Image width="50" height="50" src={src} className={style.avtor} />
//             <div className={style.concent}>
//               <div className={style.text}>
//                 红红火火恍恍惚惚哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈
//               </div>
//             </div>
//           </div>
//           <div className={style.left}>
//             <div className={style.touxiang}>
//               <Image width="50" height="50" src={src} className={style.avtor} />
//             </div>
//             <div className={style.concent}>
//               <img src="https://img1.baidu.com/it/u=4155649894,2847882086&fm=253&fmt=auto&app=120&f=JPEG?w=1280&h=800" alt="" className={style.img} />
//             </div>
//           </div>
//           <div className={style.right}>
//             <Image width="50" height="50" src={src} className={style.avtor} />
//             <div className={style.concent}>
//               <img src="https://img1.baidu.com/it/u=4155649894,2847882086&fm=253&fmt=auto&app=120&f=JPEG?w=1280&h=800" alt="" className={style.img} />
//             </div>
//           </div>
//            <div className={style.right}>
//             <Image width="50" height="50" src={src} className={style.avtor} />
//             <div className={style.concent}>
//               <video src="/20240604_194504.mp4" className={style.video} controls autoPlay={true}></video>
//             </div>
//           </div>