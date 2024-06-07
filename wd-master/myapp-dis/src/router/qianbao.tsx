import React,{lazy} from 'react';


const Qianbao=lazy(()=>import('../pages/qian/qianbao'));
const Shiping=lazy(()=>import('../pages/qian/shiping'))
const Chong=lazy(()=>import('../pages/qian/chong'))
const Cheng=lazy(()=>import('../pages/qian/cheng'))
const Ti=lazy(()=>import('../pages/qian/ti'))
const Bu=lazy(()=>import('../pages/qian/bu'))
const Jilu=lazy(()=>import('../pages/qian/jilu'))
const Zhifu=lazy(()=>import('../pages/qian/zhifu'))
const List=lazy(()=>import('../pages/qian/list'))
const Ys=lazy(()=>import('../pages/qian/ys'))
const Pin=lazy(()=>import('../pages/qian/pin'))
const Geng=lazy(()=>import('../pages/qian/geng'))
const Zx=lazy(()=>import('../pages/qian/zx'))
const Jie=lazy(()=>import('../pages/qian/jie'))
export const Qianbaorouter=[
    {
        path:'/qian',
        element:<Qianbao></Qianbao>,
        meta:{
        title:'我的'
        }
    },
    {
        path:'/qian/shiping',
        element:<Shiping/>,
        meta:{
            title:'视频'
        }
    },
    {
        path:'/qian/chong',
        element:<Chong/>,
        meta:{
            title:'充值'
        }
    }
    ,
    {
        path:'/qian/cheng',
        element:<Cheng/>,
        meta:{
            title:'充值成功'
        }
    },
    {
        path:'/qian/ti',
        element:<Ti/>,
        meta:{
            title:'提现'
        }
    },
    {
        path:'/qian/bu',
        element:<Bu/>,
        meta:{
            title:'提现'
        }
    },
    {
        path:'/qian/jilu',
        element:<Jilu/>,
        meta:{
            title:'提现'
        }
    },
    {
        path:'/qian/zhifu',
        element:<Zhifu/>,
        meta:{
            title:'提现'
        }
    },
    {
        path:'/qian/list',
        element:<List/>,
        meta:{
            title:'提现'
        }
    },
    {
        path:'/qian/ys/:id',
        element:<Ys/>,
        meta:{
            title:'提现'
        }
    },
    {
        path:'/qian/pin',
        element:<Pin/>,
        meta:{
            title:'提现'
        }
    },
    {
        path:'/qian/geng',
        element:<Geng/>,
        meta:{
            title:'提现'
        }
    },
    {
        path:'/qian/zx',
        element:<Zx/>,
        meta:{
            title:'提现'
        }
    },{
        path:'/qian/jie',
        element:<Jie/>,
        meta:{
            title:'聊天'
        }
    }
]