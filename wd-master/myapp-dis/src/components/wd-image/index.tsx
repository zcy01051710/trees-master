import React, { useEffect, useState } from "react";
import NotFountUrl from "../../pages/asses/images/微信图片_20240524221003.png";
import loadUrl from "../../pages/asses/images/default_works.gif";
import style from './index.module.scss'
interface PropsType {
  src: string;
  alt: string;
  width?:string;
  height?:string;
}

export const WDImage: React.FC<PropsType> = ({ src, alt ,width,height}) => {
  const [url, setUrl] = useState(loadUrl);
  useEffect(() => {
    // 创建图片元素
    const img = new Image();
    // 加载图片资源
    img.src = src;
    // 成功
    img.addEventListener("load", () => {
      setUrl(src);
    });
    // 失败
    img.addEventListener("error", () => {
      setUrl(NotFountUrl);
    });
  }, []);

  return <img className={style.Image} src={url} alt={alt} height={height} width={width}/>;
};