import React from "react";
import { ContentState } from "../../pages/home/homelist";
import style from "./style.module.scss";
// import { WDImage } from "../../components";
interface PropsType {
  v: ContentState;
  onClick?: () => void
}

export const WDListItem: React.FC<PropsType> = ({ v, onClick }) => {
  return (
    <div onClick={onClick}>
      {v.thumbnail.length === 0 && <div className={style.thzero}>0</div>}
      {v.thumbnail.length === 1 && (
        <div className={style.one}>
          <dl className={style.dl}>
            <dt>
              <img src={v.thumbnail[0]} alt="" width="120px" height="100px"></img>
            </dt>
            <dd>
              <h3>{v.title}</h3>
              <div className={style.btm}>
                <span>{v.source}</span>
                <span>{v.releaseTime}</span>
              </div>
            </dd>
          </dl>
        </div>
      )}
      {v.thumbnail.length === 3 && (
        <div className={style.three}>
          <h3>{v.title}</h3>
          <div className={style.images}>
            {v.thumbnail.map((v, i) => {
              return (
                <img
                  src={v}
                  key={i}
                  alt=""
                  width="33%"
                  height="100px"
                ></img>
              );
            })}
          </div>
          <div className={style.btm}>
            <span>{v.source}</span>
            <span>{v.releaseTime}</span>
          </div>
        </div>
      )}
    </div>
  );
};
