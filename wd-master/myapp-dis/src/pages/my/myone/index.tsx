import React from "react";
import style from "./style.module.scss";
import { useNavigate } from "react-router-dom";
import logo from "../../asses/icon/common resource/hdpi/common_icon_back_black_n.png";
import { useRequest } from "ahooks";
import { getUserList } from "../../../api/MyIndex";
import timestampToTime from '../../wardmate/Time/index';

interface userList {
  content: string;
  createTime: number;
  id: number;
}

const Index: React.FC = () => {
  const navigate = useNavigate();
  const params = { page: 1, count: 5 };
  const { data: userList = [] } = useRequest(
    async () => (await getUserList({ ...params })).result as userList[]
  );
  console.log(userList);

  return (
    <div className={style.box}>
      <div className={style.top}>
        <img src={logo} alt="" onClick={() => navigate("/my/mymessage")} />
        <span>系统消息</span>
      </div>
      <div className={style.lists}>
        {userList.length > 0 &&
          userList.map((item, ind) => (
            <div className={style.list} key={ind}>
              <div className={style.title}>{item.content}</div>
              <div className={style.text}>{timestampToTime(item.createTime)}</div>
            </div>
          ))}
      </div>
    </div>
  );
};
export default Index;
