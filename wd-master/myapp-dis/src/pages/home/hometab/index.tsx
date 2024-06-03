import React, { useState } from "react";
// import { LazyImage, MyHeader } from "../../../components";
import style from "./style.module.scss";
import { useRequest, useUpdateEffect } from "ahooks";
import {
  getKnowledgeBase,
  getKnowledgeBaseCategoryList,
  getKnowledgeBaseCategoryListItemsByID,
  getKnowledgeBaseListByID,
} from "../../../api/home";
import { Tabs } from "react-vant";
import { NavLink, useSearchParams } from "react-router-dom";
import {WDImage} from '../../../components/wd-image'
import {WDHeader}  from '../../../components'
// 常见病症左侧标题
interface KnowledgeItem {
  id: number;
  departmentName: string;
  rank: number;
  pic: string;
}
// 常见病症右侧内容类型
interface KnowlegeListItem {
  departmentId: number;
  id: number;
  name: string;
}

// 常见药品左侧标题类型
interface KnowledgeCategoryItem {
  name: string;
  id: number;
  rank: number;
}


// 常见药品右侧内容类型
interface KnowledgeCategoryListItem {
  drugsCategoryId: number;
  id: number;
  name: string;
  picture: string;
}

const Index: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const code = +searchParams.get("code")! || 1;
  const left = +searchParams.get("left")! || -1;
  // id
  const [leftID, setLeftID] = useState(left);

  const [height] = useState(600);
  // 左侧标题数据
  const { data: leftData1 = [] } = useRequest(async () => {
    const resp = await getKnowledgeBase();
    if (leftID === -1) setLeftID(resp.result[0].id);
    return resp.result as KnowledgeItem[];
  });

  // 右侧内容数据
  const { data: rightData1 = [], run } = useRequest(async () => {
    const resp = await getKnowledgeBaseListByID(leftID);
    return resp.result as KnowlegeListItem[];
  });

  useUpdateEffect(() => {
    run();
  }, [leftID]);
  // 左侧标题数据
  const { data: leftData2 = [] } = useRequest(async () => {
    const resp = await getKnowledgeBaseCategoryList();
    setRightID(resp.result[0].id);
    return resp.result as KnowledgeCategoryItem[];
  });
  // id
  const [rightID, setRightID] = useState(1);
  // 右侧内容数据
  const { data: rightData2 = [], run: run1 } = useRequest(async () => {
    const resp = await getKnowledgeBaseCategoryListItemsByID({
      drugsCategoryId: rightID,
      page: 1,
      count: 5,
    });
    return resp.result as KnowledgeCategoryListItem[];
  });

  useUpdateEffect(() => {
    run1();
  }, [rightID]);

  return (
    <div className={style["know"]}>
      <WDHeader showSearch={false}/>
      <Tabs
        className={style["tabs"]}
        active={code}
        onChange={(e) =>
          setSearchParams(
            { code: e.toString(), left: leftID.toString() },
            { replace: true }
          )
        }
      >
        <Tabs.TabPane title="常见病症" name={1}>
          <div className={style["content"]}>
            <div className={style["left"]}>
              {leftData1.map((v, i) => {
                return (
                  <div
                    onClick={() => setLeftID(v.id)}
                    className={
                      leftID === v.id
                        ? `${style["left-span"]} ${style["active"]}`
                        : style["left-span"]
                    }
                    key={i}
                  >
                    <span>{v.departmentName}</span>
                  </div>
                );
              })}
            </div>
            <div className={style["right"]}>
              <ul className={style["ul1"]} style={{ height: height }}>
                {rightData1.map((v, i) => {
                  return (
                    <li
                      key={i}
                      className={
                        v.name.length > 8 ? style["li1"] : style["li2"]
                      }
                    >
                      <NavLink to={`/home/bingzhengdetail/${v.departmentId}`}>
                        <span>{v.name}</span>
                      </NavLink>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </Tabs.TabPane>
        <Tabs.TabPane title="常见药品" name={2}>
          <div className={style["content"]}>
            <div className={style["left"]}>
              {leftData2.map((v, i) => {
                return (
                  <div
                    onClick={() => setRightID(v.id)}
                    className={
                      rightID === v.id
                        ? `${style["left-span"]} ${style["active"]}`
                        : style["left-span"]
                    }
                    key={i}
                  >
                    <span>{v.name}</span>
                  </div>
                );
              })}
            </div>
            <div className={style["right"]}>
              <ul className={style["ul2"]} style={{ height: height }}>
                {rightData2.map((v, i) => {
                  return (
                    <li key={i}>
                      <NavLink to={`/home/yaopinxiangqing/${v.id}`}>
                        <WDImage src={v.picture} alt=""></WDImage>
                        {/* <img  style={{ width: 50, height: 50 }}/> */}
                        <span>{v.name}</span>
                      </NavLink>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </Tabs.TabPane>
      </Tabs>
    </div>
  );
};

export default Index;
