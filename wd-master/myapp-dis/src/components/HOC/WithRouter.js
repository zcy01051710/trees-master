import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";

function WithRouter(Cpn) {
  function NewCpn() {
    const { pathname } = useLocation();
    const navigate = useNavigate();
    const isLogin = useAppSelector((state) => state.user.isLogin);
    useEffect(() => {
      // const token = localStorage.getItem("token")

      if (!isLogin && !["/login", "/register"].includes(pathname)) {
        navigate("my/login");
      }
    }, []); // 添加空的依赖数组

    return <Cpn />;
  }
  return NewCpn;
}

export default WithRouter;
