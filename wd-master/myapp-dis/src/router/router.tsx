import {MyRouter} from './_my';
import {useRoutes} from 'react-router-dom';
import {WardMate} from './_wardmate'
import { HomeRouter } from './_home';
import {Qianbaorouter} from './qianbao';
import { Suspense } from 'react';
const _routes=MyRouter.concat(WardMate).concat(HomeRouter).concat(Qianbaorouter);
const RouterView = () => useRoutes (_routes);
const Router = () =><Suspense fallback={<div>组件加载中....</div>}><RouterView></RouterView></Suspense> ;

export default Router
