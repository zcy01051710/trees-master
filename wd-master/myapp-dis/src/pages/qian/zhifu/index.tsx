import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// 进度条
import { Slider, Toast } from "react-vant";
// 弹出层
import { Popup } from "react-vant";

// 右侧列表图标
import common_button_collection_small_n from "../../../xxhdpi/common_button_collection_small_n.png";
import common_icon_open_live_commenting_n from "../../../xxhdpi/common_icon_open_live_commenting_n.png";
import common_icon_toll_n from "../../../xxhdpi/common_icon_toll_n.png";
import style from './style.module.scss'

const Index: React.FC = () => {
  const navigate = useNavigate();
  const [showCloseIcon, setShowCloseIcon] = useState(false);
  const [showCustomCloseIcon, setShowCustomCloseIcon] = useState(false);
  const [showCustomIconPosition, setShowCustomIconPosition] = useState(false);
  const [value, setValue] = useState(10);
  const onChangeAfter = () => Toast.info("当前为非WiFi环境,请注意流量消耗");
  return (
    <div className={style.video_box}>
      <div className={style.top}>
      </div>
      <div className={style.right}>
        <div className={style.image} onClick={() => setShowCustomCloseIcon(true)}>
          <img src={common_icon_toll_n} alt="" />
          <Popup
            visible={showCustomCloseIcon}
            closeable
            style={{ height: "43%" }}
            position="bottom"
            round
            closeIcon={
              <svg
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="3909"
                width="24"
                height="24"
              >
                <path
                  d="M104.704 338.752a64 64 0 0 1 90.496 0l316.8 316.8 316.8-316.8a64 64 0 0 1 90.496 90.496L557.248 791.296a64 64 0 0 1-90.496 0L104.704 429.248a64 64 0 0 1 0-90.496"
                  p-id="3910"
                ></path>
              </svg>
            }
            onClose={() => setShowCustomCloseIcon(false)}
          >
            <div className={style.popup}>
              <img
                src="https://img2.baidu.com/it/u=1736032338,2190650360&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=800"
                alt=""
              />
              <h4>300H币</h4>
              <p>
                我的H币,H币不足? <span>立即充值</span>{" "}
              </p>
              <button onClick={() => navigate("/qian/shiping")}>
                立即购买
              </button>
            </div>
          </Popup>
        </div>
        <div className={style.image2}>
          <img src={common_button_collection_small_n} alt="" />
        </div>
        <div className={style.image3}>
          <img src={common_icon_open_live_commenting_n} alt="" />
        </div>
        <div className={style.image4}>
          <span>
            3万人
            <br />
            已购买
          </span>
        </div>
      </div>
      <div className={style.content}>
        <div className={style.title}>
          <h4>健身</h4>
          <button>
            试看 <span>5s</span> 购买观看完整视频
          </button>
        </div>
        <p>
          健身是一种体育项目，健身可以增强力量、柔韧性、增强耐力
          <br />
          提高协调，控制身体各部分的能力，从而使身体强健
        </p>
        <div className={style.progress}>
          <Slider
            barHeight={2}
            activeColor="#ccc"
            value={value}
            onChange={setValue}
            onChangeAfter={onChangeAfter}
          />
        </div>
      </div>
      <div className={style.icon}>
        <div className={style.svg}>
          <svg
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="3909"
            width="20"
            height="20"
            fontWeight="border"
            color="#fff"
          >
            <path
              d="M488.832 344.32l-339.84 356.672a32 32 0 0 0 0 44.16l0.384 0.384a29.44 29.44 0 0 0 42.688 0l320-335.872 319.872 335.872a29.44 29.44 0 0 0 42.688 0l0.384-0.384a32 32 0 0 0 0-44.16L535.168 344.32a32 32 0 0 0-46.336 0"
              p-id="3910"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Index;
