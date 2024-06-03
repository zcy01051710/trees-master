import { getInformation, getInformationListById } from "../../../api/HomeIndex";
import { useRequest } from "ahooks";
import { useNavigate, useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import VirtualList from "../../../components/Vdomlist";

export interface TitleState {
  name: string;
  id: number;
  sort: number;
}

export interface ContentState {
  plateId: number;
  releaseTime: number;
  source: number;
  id: number;
  title: string;
  thumbnail: string[];
}

interface VirtualListProps {
  data: any[];
  itemSize: number;
  renderItem?: (item: any, index: number) => React.ReactNode;
}

const Index: React.FC = () => {
  // 标题当前选中的id
  const [titleID, setTitleID] = useState(0);
    const savedTitleID = localStorage.getItem("titleID");
  const { titleid } = useParams();
  const titleIDs = parseInt(savedTitleID as string, 10);
  console.log(titleIDs);
  
  const navigate = useNavigate();
  // 获取标题
  const { data: titlesData = [] } = useRequest(async () => {
    const data = await getInformation();
    // 设置默认id   异步更新
    setTitleID(data.result[0].id);
    return data.result as TitleState[];
  });
  // 列表内容
  const { data: contentData = [], run } = useRequest(
    async () => {
      const data = await getInformationListById({
        plateId: +titleID!,
        page: titleID,
        count: 5000,
      });
      // 分析 thumbnail 是一个图片的字符串集合 通过; 分割
      // 为了方便， 转为熟组
      data.result.forEach((v: any) => {
        v.thumbnail = v.thumbnail.split(";");
      });
      return data.result as ContentState[];
    },
    { manual: true }
  );
  console.log(contentData);

  useEffect(() => {
    if (titleID) run();
  }, [titleID]);

  return (
    <div style={{ height: "100vh" }}>
      {/* 数据源 设为list2 */}
      <VirtualList data={contentData} itemSize={140} />
    </div>
  );
};

export default Index;
