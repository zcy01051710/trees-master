import React from "react";
import style from "./style.module.scss";

interface valueRawState {
  type: string;
  val: string;
}

interface PropsType {
  labelText: string;
  children: JSX.Element;
}

export const KnowbaseItem: React.FC<PropsType> = ({ labelText, children }) => {
  return (
    <div className={style.proFile_input_wrapper}>
      {labelText && (
        <label htmlFor="style.proFile_input" className={style.proFile_label}>
          {labelText}
        </label>
      )}
      <div>{ children }</div>
    </div>
  );
};
