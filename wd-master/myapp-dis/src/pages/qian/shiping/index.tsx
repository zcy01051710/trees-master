import BulletScreen, {StyledBullet} from 'rc-bullets-ts'
import {useEffect, useRef, useState} from 'react'


import { Toast } from "react-vant";

import style from './qwe.module.scss'
import { Swiper } from 'react-vant';
import { useRequest } from "ahooks";
import { getBuy } from "../../../api/qian";

const headUrl =
  'https://zerosoul.github.io/rc-bullets/assets/img/heads/girl.jpg';

interface CustomBulletScreen {
  push: (content: string | JSX.Element | { msg: string; head?: string; color?: string; size?: string; backgroundColor?: string }) => void;
}

interface buyData{
  createTime: number,
  duration: number,
  id: number,
  originalUrl: string,
  title: string,
  videoId: number
}
const Index: React.FC = () => {
  const screenElRef = useRef<HTMLDivElement>(null);
  const screenRef = useRef<CustomBulletScreen>();
  const [bullet, setBullet] = useState('');

  useEffect(() => {
    // 初始化弹幕屏幕
    const bulletScreen = new BulletScreen(screenElRef.current, { duration: 20 });
    screenRef.current = bulletScreen as unknown as CustomBulletScreen;
  }, []);

  // 控制面板
  const [visible, setVisible] = useState(false);
  const onCancel = () => setVisible(false);
  const [value, setValue] = useState(10);
  const onChangeAfter = () => Toast.info("当前为非WiFi环境,请注意流量消耗");
  const params={page:1,count:5}
  const {data:buyData=[]}=useRequest(async ()=>(await getBuy({...params})).result as buyData[])
  console.log(buyData);
  return(
  <div>
    <div ref={screenElRef}  style={{ width: '100%', height: '80vh' }}  className={style.list}>
        {
          buyData.length &&
          <Swiper vertical className={style.swiper} indicator={false} >
          {buyData &&
            buyData.map((item, index) => (
              // <div key={index}>
              //   {/* <video src={item.originalUrl} controls></video> */}
              //   < img src={item.originalUrl} alt="" />
              // </div>
              <Swiper.Item key={index}  >
                <div>
                <video src={item.originalUrl} controls></video>
                <div className={style.button}>  <input value={bullet}
            onChange={({ target: { value } }: { target: HTMLInputElement }) => {
              // 弹幕内容输入事件处理
              setBullet(value);
            }}
          />
        <button
          onClick={() => {
            // 发送弹幕
            if (bullet && screenRef.current) {
              // 纯文本调用形式
              (screenRef.current as any).push(bullet);

              // StyledBullet 调用形式
              (screenRef.current as any).push(
                <StyledBullet
                  head={headUrl}
                  msg={bullet}
                  backgroundColor={'#fff'}
                  size="large"
                />
              );

              // 对象调用形式
              (screenRef.current as any).push({
                msg: bullet,
                head: headUrl,
                color: '#eee',
                size: 'large',
                backgroundColor: 'rgba(2, 2, 2,.3)',
              });
            }
          }}
        >
          发送
        </button></div>
                {/* < img src={item.originalUrl} alt="" /> */}
              </div>
              </Swiper.Item>
            ))}
        </Swiper>
        }
        
    </div>
  </div>
  )
};
export default Index;