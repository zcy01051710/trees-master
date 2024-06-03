import React from "react";
import style from "./style.module.scss";
import { NavLink } from "react-router-dom";
import { Tabbar } from 'react-vant'
import { FriendsO, HomeO, Search, SettingO } from '@react-vant/icons'
const Index: React.FC = () => {
  return (
    <div>
       <div className={style.box}>
      <Tabbar>
        <Tabbar.Item icon={<HomeO onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} />}> <NavLink to="/home">首页</NavLink>{" "}</Tabbar.Item>
        <Tabbar.Item icon={<Search onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} />}><NavLink to="/home/meta?id=7">病友圈</NavLink>{" "}</Tabbar.Item>
        <Tabbar.Item icon={<FriendsO onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} />}><NavLink to="/my">我的</NavLink>{" "}</Tabbar.Item>
      </Tabbar>
    </div>
    </div>
  );
};
export default Index;
