import React from "react";
import style from "./style.module.scss";
import { NavBar } from "react-vant";
import tu from "../../asses/image.png";
import { Button } from "react-vant";
import { useRequest } from "ahooks";
import { useNavigate } from "react-router-dom";
import { gettask } from "../../../api/MyIndex";
const Index: React.FC = () => {
  interface taskdata {
    id: number;
    reward: number;
    taskName: string;
    taskType: number;
    whetherFinish: number;
    whetherReceive: number;
  }
  const { data: task = [] } = useRequest(
    async () => (await gettask()).result as taskdata[]
  );
  console.log(task);
   const navigate=useNavigate();
  return (
    <div className={style.box}>
      <div className={style.header}>
        <NavBar title="我的任务" leftText="" onClickLeft={()=>navigate('/my')}/>
      </div>
      <div className={style.headerbox}>
        <div className={style.headertop}>
          <div className={style.headerleft}>签到条</div>
          <span className={style.span}>注：连续签到H币将会积累</span>
        </div>
        <img width="100%" src={tu} alt="" />
      </div>
      <div className={style.main}>
        <div className={style.task}>我的任务</div>

        <div className={style.shou}>
          {task &&
            task.map((item, ind) => (
              <div className={style.shouye} key={ind}>
                <div>
                  <p>{item.taskName}</p>
                  <p>+{item.reward}</p>
                </div>
                <Button type="info" size="small">
                  Default
                </Button>
              </div>
            ))}
        </div>

        <div className={style.one}></div>
      </div>
    </div>
  );
};
export default Index;
