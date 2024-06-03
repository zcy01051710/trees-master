import React, { useState } from 'react'
import { NavBar } from 'react-vant';
import style from './style.module.scss'
import { useNavigate } from 'react-router-dom';
import tu1 from "../../../xxhdpi/setting_icon_deep_color_sun_n.png"
import tu2 from "../../../xxhdpi/setting_icon_light_color_sun_n.png"
import { Slider, Toast } from 'react-vant';


const Index:React.FC=()=>{
    const [value, setValue] = useState(10);
    const onChangeAfter = (v: any) => Toast.info(`当前值：${v}`);
    const navigate=useNavigate()
    return (
    <div className={style.op}>
        <div className={style.one} onClick={()=>navigate('/my/myset')} >
            <NavBar
                title="屏幕亮度"
            />
        </div>
        <div className={style.two}>
            <img src={tu1} alt="" className={style.tw1} />
                <Slider value={value} onChange={setValue} onChangeAfter={onChangeAfter} className={style.tw3}  />
            <img src={tu2} alt="" className={style.tw2} />
        </div>
        
    </div>
  )
}
export default Index