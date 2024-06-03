import React from "react";
import { WDHeader } from "../../../components";
import { useRequest, useSetState } from "ahooks";
import { getDiseaseTitle } from "../../../api/qian";
import { Tabs } from "react-vant";
import { useSearchParams } from "react-router-dom";
import style from './style.module.scss';
import { getDocterList } from "../../../api/qian";
import { Arrow, ArrowLeft } from "@react-vant/icons";
import { addClassName } from "../../../utils";
 interface DiseaseTitleState {
  departmentName: string;
  id: number;
  pic: string;
  rank: number;
}
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
    const resp = await getDiseaseTitle();
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
          <dd className={style.xx}>
            <div className={style.left}>
              <div className={style.le}>
                <h2>{currentDocter.doctorName}</h2>
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
            <div className={style.right}>
              <img src="" alt="" />
            </div>
          </dd>
          <dd>
            <span> {currentDocter.servicePrice}H币/次</span>
            <span>立即咨询</span>
          </dd>
        </dl>
      </div>
      {/* 分页 */}
      <div className={style.page}>
        <ArrowLeft
          onClick={() => setParams({ page: params.page - 1 })}
          fontSize={40}
          onPointerEnterCapture={1}
          onPointerLeaveCapture={1}
        />
        <div className={style.swiper}>
          {docterList.map((v) => {
            return (
              <dl
                key={v.doctorId}
                className={style.dl}
                onClick={() => setCurrentDocter(v)}
              >
                <dt>
                  <img src={v.imagePic} alt="" className={style.img} />
                </dt>
                <dd
                  className={
                    v.doctorId === currentDocter.doctorId
                      ? addClassName(style.dd, style.active)
                      : style.dd
                  }
                >
                  {v.doctorName}
                </dd>
              </dl>
            );
          })}
        </div>
        <Arrow
          onClick={() => setParams({ page: params.page + 1 })}
          fontSize={40}
          onPointerEnterCapture={1}
          onPointerLeaveCapture={1}
        />
      </div>
      {/* 分页位置 */}
      <div style={{ textAlign: "center", marginBottom: 20 }}>
        第{params.page}页
      </div>
    </div>
  );
};

export default Index;
