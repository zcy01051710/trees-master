import { useBoolean } from "ahooks";
import React, { useEffect, useRef, useState } from "react";
import {
  CommentListParamsState,
  getCircleComment,
  postpbComment,
  AgreeoOpposeCommentsState,
  // 赞同反对病友圈评论接口
  AgreeoOpposeCommentsApi
} from "../../api//PatientApi";

import style from "./style.module.scss";
import doctorImg from "../../assets2/images/icon/common resource/xxhdpi/common_icon_inquiry_n.png";
import agreeIcon_n from "../../assets2/images/icon/common resource/xxhdpi/common_icon_agree_n.png";
import agreeIcon_s from "../../assets2/images/icon/common resource/xxhdpi/common_icon_agree_s.png";
import disagreeIcon_n from "../../assets2/images/icon/common resource/xxhdpi/common_icon_disagree_n.png";
import disagreeIcon_s from "../../assets2/images/icon/common resource/xxhdpi/common_icon_disagree_s.png";
import closeIcon from "../../assets2/images/icon/common resource/xxhdpi/common_button_close_n.png";
import noCommentImg from "../../assets2/images/image/xxhdpi/none_comment.png";
import { MaskBack } from "../maskBack";
import { ConfirmMask } from "../confirmMask";
import { List } from "react-vant";
import { useNavigate } from "react-router-dom";
import { putHttp, putHttpParams } from "../../api";
import LazyImage from "../lazyImage";
import timestampToTime from "../time";
// import timestampToTime from "../TimeData";

interface PropsType {
  sickCircleId: number;
  closeMask: () => void;
}

interface CommentListRawState {
  commentId: number; //评论id
  commentUserId: number; //评论者id
  nickName: string; //评论者昵称
  headPic: string; //评论者头像
  content: string; //评论内容
  supportNum: number; //	赞同数
  opposeNum: number; //反对数
  opinion: number; //观点 1=赞同，2=反对
  whetherDoctor: number; //是否为医生
  commentTime: string; //评论时间
}

export const SickCircleCommentList: React.FC<PropsType> = ({
  sickCircleId,
  closeMask,
}) => {
  const navigate = useNavigate();
  // 显示/隐藏 下滑-我知道了蒙层
  const [showFallConfirm, { setFalse: setFCFalse }] = useBoolean(true);
  // 是否加载完毕
  const [finish, { setTrue, setFalse }] = useBoolean(false);
  const CommentListParams = useRef({
    page: 1,
    count: 10,
  });

  // 评论
  const [commentValue, setCommentValue] = useState<string>("");

  // 评论列表
  const [commentList, setCommentList] = useState<CommentListRawState[]>([]);
  // 点赞/踩
  const opPoint = (commentId: any, opinion: number, index: number) => {
    AgreeoOpposeCommentsApi({ commentId, opinion }).then((resp) => {
      console.log(resp);
      if (resp.status === "0000") {
        setCommentList(
          commentList.map((v, i) => {
            return {
              ...v,
              opinion: i === index ? opinion : v.opinion,
              supportNum:
                i === index && opinion === 1 ? v.supportNum + 1 : v.supportNum,
              opposeNum:
                i === index && opinion === 2 ? v.opposeNum + 1 : v.opposeNum,
            };
          })
        );
      }
    });
  };

  useEffect(() => {
    onloadCommentList();
  }, []);

  // 获取病友圈评论列表
  const onloadCommentList = async () => {
    const params: CommentListParamsState = {
      sickCircleId,
      ...CommentListParams.current,
    };

    const resp = await getCircleComment(params);
    // 是否存在更多数据
    if (resp.result.length) {
      if (CommentListParams.current.page === 1) {
        setCommentList(resp.result);
      } else {
        setCommentList([...commentList, ...resp.result]);
      }

      // 请求页码+1
      CommentListParams.current.page++;
      setFalse();
    } else {
      setTrue();
    }
  };

  // 评论病友圈
  const publishComment = (sickCircleId: number) => {
    postpbComment({ sickCircleId, content: commentValue }).then((resp) => {
      if (resp.status === "0000") {
        CommentListParams.current.page = 1;
        onloadCommentList();
        setCommentValue("");
      }
    });
  };

  //添加评论
  const put = (v: CommentListRawState) => {
    putHttpParams("/health/user/sickCircle/verify/v1/adoptionProposal", {
      commentId: v.commentId,
      sickCircleId: sickCircleId
    }).then(resp => {
      console.log(resp)
    })
  };
  return (
    <>
      {commentList.length ? (
        <div className={style["comment-lists"]}>
          <MaskBack
            isOpen={showFallConfirm}
            zIndex={2}
            content={<ConfirmMask onClose={() => setFCFalse()} />}
          ></MaskBack>
          <List
            className={style.itembox}
            onLoad={onloadCommentList}
            finished={finish}
            loadingText={"加载中"}
            finishedText={"没有更多了...................."}
          >
            {commentList.map((v, i) => {
              return (
                <div key={v.commentId} className={style["comment-item"]}>
                  <LazyImage
                    className={style.avator}
                    src={v.headPic}
                    alt=""
                    onClick={() => {
                      navigate(`/byq/userifo/${v.commentUserId}`, {
                        state: {
                          nickName: v.nickName,
                          headPic: v.headPic,
                        },
                      });
                    }}
                  />
                  <div className={style["comment-content"]}>
                    <div className={style["user-info"]}>
                      <p>{v.nickName}</p>
                      <img
                          onClick={() => put(v)}
                          src={doctorImg}
                          className={style.docIcon}
                          alt=""
                        />
                    </div>
                    <div className={style["comment-text"]}>{v.content}</div>
                    <div className={style["comment-bot"]}>
                      <div className={style.times}>
                        {timestampToTime(v.commentTime)}
                      </div>
                      <div className={style.likes}>
                        {/* 点击实现点踩 */}
                        <div
                        onClick={() => {
                          opPoint(v.commentId, 1, i);
                        }}
                        >
                          <img
                            src={v.opinion === 1 ? agreeIcon_s : agreeIcon_n}
                            alt=""
                          />
                          <span>{v.supportNum}</span>
                        </div>
                         {/* 点击实现踩 */}
                        <div
                        onClick={() => {
                          opPoint(v.commentId, 2, i);
                        }}
                        >
                          <img
                            src={
                              v.opinion === 2 ? disagreeIcon_s : disagreeIcon_n
                            }
                            alt=""
                          />
                          <span>{v.opposeNum}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </List>
        </div>
      ) : (
        <img className={style.noCommentImg} src={noCommentImg} alt="" />
      )}

      <div className={style["comment-ipt"]}>
        <img
          src={closeIcon}
          onClick={() => {
            closeMask();
          }}
          alt=""
        />
        <input
          type="text"
          value={commentValue}
          onKeyDown={(e: any) => {
            if (e.keyCode === 13) {
              publishComment(sickCircleId);
            }
          }}
          onInput={(e: any) => {
            setCommentValue(e.target.value);
          }}
          placeholder={
            commentList.length
              ? "在此留下高见吧！！"
              : "暂无评论，快来抢沙发！！"
          }
        />
      </div>
    </>
  );
};
