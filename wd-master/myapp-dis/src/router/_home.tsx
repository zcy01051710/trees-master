import React, { lazy } from "react";

const Home = lazy(() => import("../pages/home/homelist"));
const Searchlist = lazy(() => import("../pages/home/searchlist"));
const Hometab = lazy(() => import("../pages/home/hometab"));
const Zixundetail=lazy(()=>import('../pages/home/zixundetail'))
const Bingzhengdetail=lazy(()=>import('../pages/home/bingzhengdetail'))
const Yaopinxiangqing=lazy(()=>import('../pages/home/yaopinxiangqing'))
const MoreZixun=lazy(()=>import('../pages/home/morezixun'))
const VDomList=lazy(()=>import('../pages/home/VDomList'))
const Doctorlist=lazy(()=>import('../pages/home/ask/doctorlist'))
const DoctorDetail=lazy(()=>import('../pages/home/ask/doctordetail'))
export const HomeRouter = [
  {
    path: "/home",
    element: <Home></Home>,
    meta: {
      title: "首页",
    },
  },
  {
    path: "/home/searchlist",
    element: <Searchlist />,
    meta: {
      title: "搜索",
    },
  },
  {
    path: "/home/hometab",
    element: <Hometab />,
    meta: {
      title: "tab切换",
    },
  },
  {
    path:'/home/zixundetail/:id',
    element:<Zixundetail/>,
    meta:{
        title:'资讯详情'
    }
  },
  {
    path:'/home/bingzhengdetail/:id',
    element:<Bingzhengdetail/>,
    meta:{
      title:'病症详情'
    }
  },
  {
    path:'/home/yaopinxiangqing/:id',
    element:<Yaopinxiangqing/>,
    meta:{
      title:'药品详情'
    }
  },
  {
    path:'/home/morezixun/:id',
    element:<MoreZixun />,
    meta:{
      title:'资讯详情'
    }
  },
  {
    path:'/v/dom/list',
    element:<VDomList/>,
    meta:{
      title:'虚拟列表'
    }
  },
  {
    path:'/ask/doctorlist',
    element:<Doctorlist/>,
    meta:{
      title:'医生列表'
    }
  },
  {
    path:'/ask/doctordetail/:id',
    element:<DoctorDetail/>,
    meta:{
        title:"医生列表详情"
    }
  }
];
