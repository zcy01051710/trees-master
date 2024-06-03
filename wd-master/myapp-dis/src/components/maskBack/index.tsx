import React from "react";
import style from "./style.module.scss";

interface PropsType {
  isOpen: boolean;
  content: React.ReactNode;
  zIndex?: number;
}

export const MaskBack: React.FC<PropsType> = ({
  isOpen,
  content,
  zIndex = 1,
}) => {
  if (isOpen) {
    return (
      <div style={{ zIndex }} className={style.MaskBack}>
        {content}
      </div>
    );
  }
  return null;
};
