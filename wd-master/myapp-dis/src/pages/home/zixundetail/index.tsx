import { useRequest } from "ahooks";
import React from "react";
import { useParams } from "react-router-dom";
import { getZixun } from "../../../api/HomeIndex";

interface DetailState {
  content: string;
  id: number;
  releaseTime: number;
  source: string;
  title: string;
  whetherCollection: number;
}

const Index: React.FC = () => {
  const { id } = useParams();
  const { data: detail = {} as DetailState } = useRequest(async () => {
    if (id) {
      const data = await getZixun(+id);
      // 处理富文本
      data.result.content = data.result.content.replace(
        /<img/g,
        '<img width="100%"'
      );
      return data.result as DetailState;
    }
  });
  return (
    <div>
      <div
        style={{ padding: 10 }}
        dangerouslySetInnerHTML={{ __html: detail.content }}
      ></div>
    </div>
  );
};

export default Index;
