import React,{lazy} from 'react';


const HomeMate=lazy(()=>import('../pages/wardmate/HomeMate'));
const DetailMeta=lazy(()=>import('../pages/wardmate/DetailMeta'));
const UserMeta=lazy(()=>import('../pages/wardmate/UserMeta'));
const MetaSearch=lazy(()=>import('../pages/wardmate/MetaSerach'));
const PatientCircle=lazy(()=>import('../pages/wardmate/PatientCircle'));
const Wenzen=lazy(()=>import('../pages/wardmate/wenzen'));
const WenDetail=lazy(()=>import('../pages/wardmate/wenDetail'));
export const WardMate=[
    {
        path:'/home/meta',
        element:<HomeMate></HomeMate>,
        meta:{
        title:'病友圈首页'
        }
    },
    {
        path:'/home/meta/detail/:id',
        element:<DetailMeta></DetailMeta>,
        meta:{
        title:'病友圈详情'
        }
    },
    {
        path:'/home/meta/user',
        element:<UserMeta></UserMeta>,
        meta:{
        title:'病友圈用户'
        }
    },
    {
        path:'/home/meta/search',
        element:<MetaSearch></MetaSearch>,
        meta:{
        title:'病友圈搜索'
        }
    },
    {
        path:'/home/patientcircle',
        element:<PatientCircle></PatientCircle>,
        meta:{
        title:'病友圈发布'
        }
    },
      {
        path:'/home/wenzen',
        element:<Wenzen></Wenzen>,
        meta:{
        title:'问诊'
        }
    },
       {
        path:'/home/wendetail/:id',
        element:<WenDetail></WenDetail>,
        meta:{
        title:'问诊详情'
        }
    }
]