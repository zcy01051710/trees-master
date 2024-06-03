import ReactPlayer from'react-player';
import React from "react";
import style from "./style.module.scss";
import message from "../../assets/images/icon/common resource/hdpi/common_nav_message_black_n.png";
import userUrl from "../../assets/images/user.jpg";
import { useAppSelector } from "../../app/hooks";
import { useNavigate } from "react-router-dom";

interface PropsType {
  url: string;
}

export const VideoPlayer: React.FC<PropsType> = ({url}) => {

  return (
   <div>
    <ReactPlayer
      url={url}
      controls
      width='100%'
      height='200px'
    />
   </div>
  );
};