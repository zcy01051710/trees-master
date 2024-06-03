import React from "react";
import { WDHeader } from "../../../../components/wd-header";
import { useRequest, useSetState } from "ahooks";
import { getmenus } from "../../../../api/HomeIndex";
// import { DiseaseTitleState } from "../../disease/index";
import { Tabs } from "react-vant";
import { useSearchParams } from "react-router-dom";
import style from "./style.module.scss";
import { getDocterList } from "../../../../api/HomeIndex";
import { Arrow, ArrowLeft } from "@react-vant/icons";
import { addClassName } from "../../../../utils";
import { useNavigate } from "react-router-dom";
interface ParamsState {
  deptId: number;
  condition: number;
  sortBy?: number;
  page: number;
  count: number;
}

interface DocterState {
  badNum: number; // 差评数
  doctorId: number; // 医生id
  doctorName: string; // 医生姓名
  imagePic: string; //形象照
  inauguralHospital: string; // 就职医院
  jobTitle: string; // 职称
  praise: string; // 好评率
  praiseNum: number; // 好评数
  serverNum: number; // 服务患者数
  servicePrice: number; // 咨询价格（H币）
}
interface DiseaseTitleState {
  departmentName: string;
  id: number;
  pic: string;
  rank: number;
}
// 字典
const conditionList = [
  {
    label: "综合",
    value: 1,
  },
  {
    label: "好评",
    value: 2,
  },
  {
    label: "咨询数",
    value: 3,
  },
  {
    label: "价钱",
    value: 4,
  },
];

const Index: React.FC = () => {
  const navigate = useNavigate();
  // 获取查询参数id
  const [searchParams] = useSearchParams();
  const id = +searchParams.get("id")!;
  // 初始化id  发送后端的参数
  const [params, setParams] = useSetState({
    deptId: id,
    condition: 1,
    page: 1,
    count: 3,
  } as ParamsState);
  // 标题数据
  const { data: tabTitle = [] } = useRequest(async () => {
    const resp = await getmenus();
    console.log("titleData", resp.result);
    //
    if (params.deptId) {
      // 请求数据
    } else {
      setParams({
        deptId: resp.result[0].id,
      });
      // 请求数据
    }
    return resp.result as DiseaseTitleState[];
  });
  // 列表数据
  const { data: docterList = [] } = useRequest(
    async () => {
      const resp = await getDocterList(params);
      console.log("doctorList", resp.result);
      setCurrentDocter(resp.result[0]);
      return resp.result as DocterState[];
    },
    { refreshDeps: [params] }
  );
  // 中间 当前高亮数据
  const [currentDocter, setCurrentDocter] = useSetState({} as DocterState);
  return (
    <div className={style.docter}>
      {/* {JSON.stringify(params)} */}
      {/* 头部 */}
      <div>
        <WDHeader showSearch={false}></WDHeader>
      </div>
      {/* 切换科室 */}
      <div>
        {tabTitle.length && (
          <Tabs
            active={params.deptId}
            onClickTab={({ name }) =>
              setParams({
                deptId: name,
                page: 1,
              })
            }
          >
            {tabTitle.map((item) => (
              <Tabs.TabPane
                key={item.id}
                title={item.departmentName}
                name={item.id}
              ></Tabs.TabPane>
            ))}
          </Tabs>
        )}
      </div>
      {/* 筛选 */}
      <div className={style.conditionList}>
        {conditionList.map((v, i) => {
          return (
            <div
              key={i}
              className={v.value === params.condition ? style.active : ""}
              onClick={() => setParams({ condition: v.value, page: 1 })}
            >
              {v.label}
            </div>
          );
        })}
      </div>
      {/* 大图， 医生 */}
      <div className={style.content}>
        <dl>
          <dt>
            <img src={currentDocter.imagePic} alt="" />
          </dt>
          <dd>
            <div className="left">
              <div>
                <h4>{currentDocter.doctorName}</h4>
                <span>{currentDocter.jobTitle}</span>
              </div>
              <p>
                <span>{currentDocter.inauguralHospital}</span>
              </p>
              <p>
                <span>好评率 {currentDocter.praise}</span>
                <span>服务患者数 {currentDocter.serverNum}</span>
              </p>
            </div>
            <div className="right">
              <img src="" alt="" />
            </div>
          </dd>
          <dd>
            <span> {currentDocter.servicePrice}H币/次</span>
            <span>立即咨询</span>
          </dd>
        </dl>
      </div>
      <div className={style.docterList}>
        {docterList.map((v, i) => (
          <dl>
            <dt>
              <img className={style.image} onClick={()=>navigate(`/ask/doctordetail/${v.doctorId}`)} src={v.imagePic} alt="" />
            </dt>
            <dd>{v.doctorName}</dd>
          </dl>
        ))}
      </div>
    </div>
  );
};

export default Index;
