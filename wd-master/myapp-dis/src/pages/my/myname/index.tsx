import React from 'react'
import { useNavigate } from 'react-router-dom';
import style from "./style.module.scss"
import { NavBar, Toast } from 'react-vant';
import { Cell, Input, hooks } from 'react-vant'
import { useRequest } from 'ahooks';
import { Putname } from '../../../api/MyIndex';


const Index:React.FC=()=>{
  const navigate=useNavigate();
  const [state, updateState] = hooks.useSetState({
    text: '',
    tel: '',
    digit: '',
    num: '',
    password: '',
  })
  const xiugai=(nickName:string)=>{
    Putname(nickName).then(resp=>{
      if(resp.status){
        Toast.success(resp.message)
      }
    })
  }
    return(
      <div className={style.for}>
        <div className={style.one} onClick={()=>navigate('/my/mypeople')}><NavBar title="设置名称"  /></div>
        <div className={style.two}>
            <Input
                value={state.text}
                onChange={text => updateState({ text })}
                placeholder='修改名称'
                clearable
                className={style.thr}
            />
            <button onClick={()=>xiugai(state.text)}>修改</button>
        </div>
      </div>
    )
}
export default Index