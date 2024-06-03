import React from "react";
import { useParams } from "react-router-dom";
import { useRequest } from "ahooks";
import {
  getKnowledgeBaseCategoryDetailById,
  getKnowledgeBaseDetailByID,
} from "../../../api/home";
import style from './index.module.scss'
import { KnowbaseItem} from '../../../components/knowbaseItem'
import {WDHeader}  from '../../../components'
interface BaseCategoryDetailState {
  approvalNumber: string;
  component: string;
  createTime: number;
  drugsCategoryId: number;
  effect: string;
  id: number;
  mindMatter: string;
  name: string
  packing: string;
  picture: string;
  shape: string;
  sideEffects: string;
  storage: string;
  taboo: string;
  usage: string;
}

const Index: React.FC = () => {
  const { id, type } = useParams();

  const { data: data2 = {} as BaseCategoryDetailState } = useRequest(async () => {
    const resp = await getKnowledgeBaseCategoryDetailById(+id!)
    return resp.result as BaseCategoryDetailState
  });

  

  return <div className={style['knowbase']}>
    {/* <MyHeader></MyHeader> */}
    <WDHeader showSearch={false}/>
    <div className={style['header']}>本模块知识仅供你参考，如有需要，请在医生指导下使用</div>
    <div className={style['content']}>
      <h3 className={style['title']}>{data2.name}</h3>
      <KnowbaseItem labelText="[药品成分]"><div>{data2.component}</div></KnowbaseItem>
      <KnowbaseItem labelText="[用药禁忌]"><div>{data2.taboo}</div></KnowbaseItem>
      <KnowbaseItem labelText="[功能主治]"><div>{data2.effect}</div></KnowbaseItem>
      <KnowbaseItem labelText="[用法用量]"><div>{data2.usage  }</div></KnowbaseItem>
      <KnowbaseItem labelText="[药品性状]"><div>{data2.shape}</div></KnowbaseItem>
      <KnowbaseItem labelText="[包装规格]"><div>{data2.packing}</div></KnowbaseItem>
      <KnowbaseItem labelText="[贮藏条件]"><div>{data2.storage}</div></KnowbaseItem>
      <KnowbaseItem labelText="[注意事项]"><div>{data2.sideEffects}</div></KnowbaseItem>
      <KnowbaseItem labelText="[批准文号]"><div>{data2.approvalNumber}</div></KnowbaseItem>
    </div>
  </div>;
};

export default Index;
