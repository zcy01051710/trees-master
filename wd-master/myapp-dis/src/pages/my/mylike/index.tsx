import React from "react";
import style from "./style.module.scss";
import { useNavigate } from "react-router-dom";
import { Tabs } from "react-vant";
import logo1 from "../../asses/hdpi/guide_pages_three.png";
//import 'react-vant/es/styles';
import logo from "../../asses/icon/common resource/hdpi/common_icon_back_black_n.png";
import { useRequest } from "ahooks";
import { getAdio, getFrieend, getLike } from "../../../api/MyIndex";
import timestampToTime from '../../wardmate/Time/index';
import { VideoPlayer } from "../../../components";


interface likeData{
    createTime: number,
    id: number,
    infoId: number,
    thumbnail: string,
    title: string
}

interface friendData{
  
    collectionNum: number,
    commentNum: number,
    createTime: number,
    disease:string,
    id: number,
    sickCircleId: number,
    title:string,

}

interface AdioData{
    buyNum: number,
    createTime: number,
    duration: number,
    id: number,
    originalUrl:string,
    price: number,
    shearUrl:string,
    title:string,
    videoId: number,
    whetherBuy:number
}

const Index: React.FC = () => {
  const navigate = useNavigate(); 

  //咨询
   const params={page:1,count:5}
   const {data:likeData=[]}=useRequest(async ()=>(await getLike({...params})).result as likeData[])
   console.log(likeData)
   //病友圈
   const {data:friendData=[]}=useRequest(async ()=>(await getFrieend({...params})).result as friendData[])
   console.log(friendData)

  //视频
   const {data:AdioData=[]}=useRequest(async ()=>(await getAdio({...params})).result as AdioData[])
   console.log(AdioData);

  return (
    <div className={style.box}>
      <div className={style.top}>
        <img src={logo} alt="" onClick={() => navigate("/my")} />
        <span>我的收藏</span>
      </div>
      <div className={style.headMain}>
        <Tabs active={0} titleActiveColor="#3087ea" color="#3087ea">
          <Tabs.TabPane title="健康资讯">
            <div className={style.lists}>
              {likeData.length>0 && likeData.map((item,ind)=>(
                <div className={style.list} key={ind}>
                <dl>
                  <dt>
                    <img src={item.thumbnail} alt="" />
                  </dt>
                  <dd>
                    <dd>
                     {item.title}
                    </dd>
                    <dd className={style.one}>
                      <span>{timestampToTime(item.createTime)}</span>
                    </dd>
                  </dd>
                </dl>
              </div>
              ))}
            </div>
          </Tabs.TabPane>
          <Tabs.TabPane title="健康视频">
            {AdioData.length>0 && AdioData.map((item,ind)=>(
             <div className={style.looks} key={ind}>
              <div className={style.look}>
                <h3>{item.title}</h3>
              </div>
              <div className={style.qq}>
                 <VideoPlayer url={item.shearUrl}></VideoPlayer>
              </div>
              <div className={style.title}>
                {item.buyNum}人已购买
                <span className={style.text}>{timestampToTime(item.createTime)}分钟</span>
                <span>删除</span>
              </div>
            </div>
            ))}
           
          </Tabs.TabPane>
          <Tabs.TabPane title="病友圈">
            {friendData.length>0 && friendData.map((item,ind)=>(
              <div className={style.con}>
              <div className={style.conent}>
                <h4>{item.title}</h4>
                <div className={style.word}>
                 {item.disease}
                </div>
                <div className={style.desc}>
                  <dl>
                    <dt>收藏</dt>
                    <dd>{item.collectionNum}</dd>
                  </dl>
                  <dl className={style.one}>
                    <dt>建议</dt>
                    <dd>{item.commentNum}</dd>
                  </dl>
                  <dl className={style.two}> 
                    <dt>{timestampToTime(item.createTime)}</dt>
                  </dl>
                </div>
              </div>
            </div>
            ))}
          </Tabs.TabPane>
        </Tabs>
      </div>
    </div>
  );
};
export default Index;
