import { Action, ThunkAction, configureStore, combineReducers } from '@reduxjs/toolkit'
// 切片
import userReducer from './user/userSlice'
import doctorReducer from './doctorDetail/doctorDetailSlice';
// redux 日志中间件插件
import logger from 'redux-logger'
// redux 持久化插件
import { persistStore, persistReducer } from 'redux-persist'
// 引入存储类
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

// 持久化配置
const persistConfig = {
  key: 'wdyl',
  storage,
  // 持久化存储那几个库
  whitelist: ['user',"doctor"]
}
// 合并 reducer
const rootReducer = combineReducers({
  user: userReducer,
  doctor:doctorReducer
})
// 使用插件持久化数据
const persistedReducer = persistReducer(persistConfig, rootReducer)

// 创建仓库
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  }).concat(logger as any),
})

// 创建持久化仓库
export const persistor = persistStore(store)

// 类型
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;