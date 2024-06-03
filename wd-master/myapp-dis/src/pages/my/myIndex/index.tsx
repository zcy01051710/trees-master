import React from "react";
// import { Toast, NavBar } from "react-vant";
// import { Bell } from "@react-vant/icons";
import logo from "../../asses/icon/common resource/hdpi/common_icon_back_black_n.png";
import logo2 from "../../asses/icon/common resource/hdpi/common_nav_message_black_n.png";
import logo1 from "../../asses/hdpi/boy.png";
import logo3 from "../../asses/hdpi/the_current_inquiry.png";
import logo4 from "../../asses/hdpi/historical_inquiry.png";
import logo5 from "../../asses/icon/common resource/hdpi/my_icon_file_n.png";
import logo6 from "../../asses/icon/common resource/hdpi/my_icon_wallet_n.png";
import logo7 from "../../asses/icon/common resource/hdpi/common_button_collection_large_n.png";
import logo8 from "../../asses/icon/common resource/hdpi/my_icon_advice_n.png";
import logo9 from "../../asses/icon/common resource/hdpi/my_icon_video_n.png";
import logo10 from "../../asses/icon/common resource/hdpi/my_icon_circle_n.png";
import logo11 from "../../asses/icon/common resource/hdpi/common_icon_attention_large_n.png";
import logo12 from "../../asses/icon/common resource/hdpi/my_icon_task_n.png";
import logo13 from "../../asses/icon/common resource/hdpi/my_icon_set_n.png";
import { useNavigate } from "react-router-dom";
import style from "./style.module.scss";
import { Arrow } from "@react-vant/icons";
import {store} from '../../../app/store';
const Index: React.FC = () => {
  const navigate = useNavigate();
  const app=store.getState();
  console.log(app)

  return (
    <div className={style.box}>
      <div className={style.tab}>
        <img
          src={logo}
          alt=""
          className={style.img1}
          onClick={() => navigate("/home")}
        />
        <img
          src={logo2}
          alt=""
          className={style.img2}
          onClick={() => navigate("/my/mymessage")}
        />
      </div>
      <div className={style.header}>
        <dl>
          <dt>
            <img src={app.user.userInfo.headPic} alt="" />
          </dt>
          <dd>{app.user.userInfo.nickName}</dd>
        </dl>
        <div className={style.one}>签到</div>
      </div>
      <div className={style.mask}>
        <h4>我的问诊</h4>
        <dl>
          <dt>
            <img src={logo3} alt="" />
          </dt>
          <dd>当前问诊</dd>
          <dd className={style.two}>
            <Arrow
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            />
          </dd>
        </dl>
        <dl>
          <dt>
            <img src={logo4} alt="" />
          </dt>
          <dd>历史问诊</dd>
          <dd className={style.two}>
            <Arrow
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            />
          </dd>
        </dl>
      </div>
      <div className={style.box22}>
        <div className={style.buttom}>
          <div className={style.three}>
            <dl onClick={() => navigate("/my/mycon1")}>
              <dt>
                <img src={logo5} alt="" />
              </dt>
              <dd>我的档案</dd>
            </dl>
            <dl onClick={() => navigate("/qian")}>
              <dt>
                <img src={logo6} alt="" />
              </dt>
              <dd>我的钱包</dd>
            </dl>
            <dl onClick={() => navigate("/my/mylike")}>
              <dt>
                <img src={logo7} alt="" />
              </dt>
              <dd>我的收藏</dd>
            </dl>
          </div>
          <div className={style.three}>
            <div className={style.threes}></div>
            <dl onClick={() => navigate("/my/mydiea")}>
              <dt>
                <img src={logo8} alt="" />
              </dt>
              <dd>被采纳的建议</dd>
            </dl>
            <dl onClick={() => navigate("/my/myadio")}>
              <dt>
                <img src={logo9} alt="" />
              </dt>
              <dd>我的视频</dd>
            </dl>
            <dl onClick={() => navigate("/my/myfriend")}>
              <dt>
                <img src={logo10} alt="" />
              </dt>
              <dd>我的病友圈</dd>
            </dl>
          </div>
          <div className={style.three}>
            <dl onClick={() => navigate("/my/myidea")}>
              <dt>
                <img src={logo11} alt="" />
              </dt>
              <dd>我的关注</dd>
            </dl>
            <dl onClick={() => navigate("/my/mytask")}>
              <dt>
                <img src={logo12} alt="" />
              </dt>
              <dd>我的任务</dd>
            </dl>
            <dl onClick={() => navigate("/my/myset")}>
              <dt>
                <img src={logo13} alt="" />
              </dt>
              <dd>设置管理</dd>
            </dl>
          </div>
        </div>
      </div>

      <div className={style.text}>@八维移动通信堂院毕业作品</div>
    </div>
  );
};
export default Index;
