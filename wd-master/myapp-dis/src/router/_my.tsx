import React,{lazy} from 'react';
import {Navigate} from 'react-router-dom';

const MyIndex=lazy(()=>import('../pages/my/myIndex'));
const MyList=lazy(()=>import('../pages/my/mylist'));
const MyCon=lazy(()=>import('../pages/my/mycon'))
const MyCon1=lazy(()=>import('../pages/my/mycon1'));
const MyCon2=lazy(()=>import('../pages/my/mycon2'));
const MyIdea=lazy(()=>import('../pages/my/myidea'));
const MyLike=lazy(()=>import('../pages/my/mylike'));
const MyMessage=lazy(()=>import('../pages/my/myMessage'));
const MyOne=lazy(()=>import('../pages/my/myone'));
const MyTwo=lazy(()=>import('../pages/my/mytwo'));
const MyThree=lazy(()=>import('../pages/my/mythree'));
const Login=lazy(()=>import('../pages/my/login'));
const MyAdio=lazy(()=>import('../pages/my/myadio'));
const MyDiea=lazy(()=>import('../pages/my/mydiea'));
const MySet=lazy(()=>import('../pages/my/myset'));
const MySigin=lazy(()=>import('../pages/my/sigin'));
const MyPeople=lazy(()=>import('../pages/my/mypeople'));
const MyPassword=lazy(()=>import('../pages/my/myPassword'));
const MyPassword2=lazy(()=>import('../pages/my/myPassword2'));
const MyFriend=lazy(()=>import('../pages/my/myfriend'));
const MyFriends=lazy(()=>import("../pages/my/myFriends"));
const User=lazy(()=>import('../pages/my/myuser'));
const Mypad=lazy(()=>import('../pages/my/mypad'));
const Mystart=lazy(()=>import('../pages/my/mystart'));
const Mynum=lazy(()=>import('../pages/my/mynum'));
const Myfriend2=lazy(()=>import('../pages/my/myfriend2'));
const Mytask=lazy(()=>import('../pages/my/mytask'));
const MYWX=lazy(()=>import('../pages/my/mywx'));
const MyCard=lazy(()=>import('../pages/my/myCard'));
const Myname=lazy(()=>import('../pages/my/myname'));
export const MyRouter=[
    {
        path:'/',
        element:<Navigate to="/home"></Navigate>
    },
    {
        path:'/my',
        element:<MyIndex></MyIndex>,
        meta:{
        title:'我的'
        }
    },
    {
        path:'/my/mylist',
        element:<MyList></MyList>,
        meta:{
        title:'我的档案'
        }
    },
     {
        path:'/my/mycon/add/edit',
        element:<MyCon></MyCon>,
        meta:{
        title:'我的档案'
        }
    },
    {
        path:'/my/mycon1',
        element:<MyCon1></MyCon1>,
        meta:{
        title:'我的档案'
        }
    },
     {
        path:'/my/mycon2',
        element:<MyCon2></MyCon2>,
        meta:{
        title:'我的档案'
        }
    },
     {
        path:'/my/myidea',
        element:<MyIdea></MyIdea>,
        meta:{
        title:'我的关注'
        }
    },
     {
        path:'/my/mylike',
        element:<MyLike></MyLike>,
        meta:{
        title:'我的收藏'
        }
    },
     {
        path:'/my/mymessage',
        element:<MyMessage></MyMessage>,
        meta:{
        title:'消息'
        }
    },
     {
        path:'/my/myone',
        element:<MyOne></MyOne>,
        meta:{
        title:'系统消息'
        }
    },
    {
        path:'/my/mytwo',
        element:<MyTwo></MyTwo>,
        meta:{
        title:'问诊消息'
        }
    },
    {
        path:'/my/mythree',
        element:<MyThree></MyThree>,
        meta:{
        title:'H币入账信息'
        }
    },
     {
        path:'/my/login',
        element:<Login></Login>,
        meta:{
        title:'登录'
        },
    },
    {
        path:'/my/myadio',
        element:<MyAdio></MyAdio>,
        meta:{
        title:'购买的视频'
        }
    },
     {
        path:'/my/mydiea',
        element:<MyDiea></MyDiea>,
        meta:{
        title:'被采纳的建议'
        }
    },
    {
        path:'/my/myset',
        element:<MySet></MySet>,
        meta:{
        title:'设置'
        }
    },
    {
        path:'/my/sigin',
        element:<MySigin></MySigin>,
        meta:{
        title:'注册'
        }
    },
      {
        path:'/my/user',
        element:<User></User>,
        meta:{
        title:'完善信息'
        }
    },
    {
        path:'/my/mypeople',
        element:<MyPeople></MyPeople>,
        meta:{
        title:'我的信息'
        }
    },
    {
        path:'/my/mypassword',
        element:<MyPassword></MyPassword>,
        meta:{
        title:'忘记密码'
        }
    },
     {
        path:'/my/mypassword2',
        element:<MyPassword2></MyPassword2>,
        meta:{
        title:'设置密码'
        }
    },
     {
        path:'/my/myfriend',
        element:<MyFriend></MyFriend>,
        meta:{
        title:'我的病友圈'
        }
    },
    {
        path:'/my/myfriends/:id',
        element:<MyFriends></MyFriends>,
        meta:{
        title:'评论列表'
        }
    },
    {
        path:'/my/mypad',
        element:<Mypad></Mypad>,
        meta:{
        title:'修改密码'
        }
    },
    {
        path:'/my/mystart',
        element:<Mystart></Mystart>,
        meta:{
        title:'修改密码'
        }
    },
    {
        path:'/my/mynum',
        element:<Mynum></Mynum>,
        meta:{
        title:'修改密码'
        }
    },
    {
        path:'/my/myfriend2',
        element:<Myfriend2></Myfriend2>,
        meta:{
        title:'修改密码'
        }
    },
    {
        path:'/my/mytask',
        element:<Mytask/>,
        meta:{
            title:'我的任务'
        }
    },
    {
        path:'/my/mywx',
        element:<MYWX></MYWX>,
        meta:{
        title:'实名认证'
        }
    },
    {
      path:'/my/mycard',
        element:<MyCard></MyCard>,
        meta:{
        title:'绑定银行卡'
        }
    }
    ,
    {
      path:'/my/myname',
        element:<Myname></Myname>,
        meta:{
        title:'绑定银行卡'
        }
    }
]