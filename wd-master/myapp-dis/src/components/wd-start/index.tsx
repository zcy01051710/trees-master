import React from "react";
import url1 from "../../pages/asses/images/启动页.png";
import url2 from "../../pages/asses/images/引导页1.png";
import url3 from "../../pages/asses/images/引导页2.png";
import url4 from "../../pages/asses/images/引导页3.png";
import url5 from "../../pages/asses/images/引导页4.png";
import url6 from "../../pages/asses/images/引导页5.png";
import { Swiper } from "react-vant";
import { useBoolean } from "ahooks";
const banners = [url1, url2, url3, url4, url5, url6];
export const WDStart = () => {
  const [show, { setFalse }] = useBoolean(false);
  return (
    <div
      style={{
        position: "fixed",
        left: 0,
        top: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 99,
        display: show ? "block" : "none",
      }}
    >
      <Swiper>
        {banners.map((v, i) => {
          return (
            <Swiper.Item key={i}>
              <img src={v} alt="" width="100%" height="100%" />
              {i === banners.length - 1 && (
                <div
                  onClick={() => setFalse()}
                  style={{
                    background: "transparent",
                    position: "absolute",
                    left: "50%",
                    transform: 'translateX(-50%)',
                    bottom: 115,
                    width: 100,
                    height:40
                  }}
                >
                  
                </div>
              )}
            </Swiper.Item>
          );
        })}
      </Swiper>
    </div>
  );
};
