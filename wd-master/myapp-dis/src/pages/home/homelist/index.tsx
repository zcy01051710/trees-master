import React, { useEffect, useState } from "react";
import style from "./index.module.scss";
import tu3 from "../../asses/images/common_disease.png";
import tu4 from "../../asses/images/common_drugs.png";
import { useNavigate } from "react-router-dom";
import { Swiper, Image } from "react-vant";
import {
  getHomeListById,
  getHomeTitle,
  getbanners,
  getmenus,
} from "../../../api/HomeIndex";
import { useRequest } from "ahooks";
import Tabbar from "../../../components/tabbar";
import { WDHeader } from "../../../components";
import { WDListItem } from "../../../components/wd-list-item";
interface bannerdata {
  imageUrl: string;
  jumpUrl: string;
  rank: number;
  title: string;
}
interface menusdata {
  departmentName: string;
  id: string;
  pic: string;
  rank: number;
}
export interface ContentState {
  id: number;
  plateId: number;
  releaseTime: number;
  source: string;
  thumbnail: string[];
  title: string;
}
const Index: React.FC = () => {
  const navigate = useNavigate();
  const { data: HomeIndex = [] } = useRequest(async () => (await getbanners()).result as bannerdata[]);

  const { data: Homemenus = [] } = useRequest(
    async () => (await getmenus()).result as menusdata[]
  );

  const [titleID, setTitleID] = useState(0);
  // 获取标题
  const { data: titlesData = [] } = useRequest(async () => {
    const data = await getHomeTitle();
    // console.log("titlesData", data);
    // 设置默认id   异步更新
    setTitleID(data.result[0].id);
    return data.result as TitleState[];
  });
  interface TitleState {
    id: number;
    sort: number;
    name: string;
  }

  // 列表内容
  const { data: contentData = [], run } = useRequest(
    async () => {
      const data = await getHomeListById({
        plateId: titleID,
        page: 1,
        count: 5,
      });

      data.result.forEach((v: any) => {
        v.thumbnail = v.thumbnail.split(";");
      });
      return data.result as ContentState[];
    },
    { manual: true }
);

  useEffect(() => {
    if (titleID) run();
  }, [titleID]);

  return (
    <div>
      <div>
        <WDHeader showSearch={true} />
      </div>
      <div className={style.demo_swiper}>
        <Swiper>
          {HomeIndex.map((image, i) => (
            <Swiper.Item key={i}>
              <Image className={style.banners} lazyload src={image.imageUrl} />
            </Swiper.Item>
          ))}
        </Swiper>
      </div>
      <div className={style.zhishi}>
        <p className={style.p}></p >
        <span>知识宝库</span>
      </div>
      <div className={style.menus}>
        <div className={style.left}>
          <p>常见病例</p >
          <img
            onClick={() => navigate("/home/hometab?code=1")}
            src={tu3}
            alt=""
          />
        </div>
        <div className={style.right}>
          <p>常用药品</p >
          <img
            src={tu4}
            alt=""
            onClick={() => navigate("/home/hometab?code=2")}
          />
        </div>
      </div>
      <div className={style.wenzhen}>
        <p className={style.p}></p >
        <span className={style.span}> 问诊咨询</span>
      </div>
      <div className={style.menu}>
        {Homemenus.length>0 &&
          Homemenus.map((item, ind) => (
            <dl key={ind} onClick={() => navigate(`/home/meta?id=`+item.id)}>
              <dt>
                < img src={item.pic} alt="" />
              </dt>
              <dd> {item.departmentName} </dd>
            </dl>
          ))}
      </div>

      <div className={style.his}>
        <p className={style.p}></p >
        <span className={style.span}>健康评测</span>
      </div>
      <div className={style.hisswiper}>
        <Swiper>
          {HomeIndex.map((image, i) => (
            <Swiper.Item key={i}>
              <Image className={style.banners} lazyload src={image.imageUrl} />
            </Swiper.Item>
          ))}
        </Swiper>
      </div>
      <div className={style.hiszixun}>
        <p className={style.p}></p>
        <span className={style.span}>健康资讯</span>
        <p></p >
       

      </div>
      <div>
        <div className={style.title}>
          {titlesData.map((v) => {
            return (
              <span
                key={v.id}
                className={v.id === titleID ? style.active : ""}
                onClick={() => setTitleID(v.id)}
              >
                {v.name}
              </span>
            );
          })}
        </div>
        <div className={style.content}>
          {contentData.map((v) => {
            return (
              <WDListItem
                key={v.id}
                v={v}
                onClick={() => navigate("/home/zixundetail/" + v.id)}
              ></WDListItem>
            );
          })}
        </div>
      </div>
          <div onClick={()=>navigate('/home/morezixun/'+titleID)}>更多资讯</div>
      <Tabbar></Tabbar>
    </div>
  );
};
export default Index;
