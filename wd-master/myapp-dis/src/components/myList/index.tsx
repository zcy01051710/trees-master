import React from "react";
import style from "./style.module.scss";
import { useState, useEffect, useRef } from "react";

interface PropsType {
  itemHeight: number;
  itemCount: number;
  data: any[];
  children: (item: any) => JSX.Element
}
export const WdVList: React.FC<PropsType> = ({
  itemHeight,
  itemCount,
  data,
  children
}) => {
  // 节点
  const ulref = useRef<HTMLDivElement | null>(null);
  const divref = useRef<HTMLDivElement | null>(null);
  const scrollBarRef = useRef<HTMLDivElement | null>(null);

  const [showArray, setShowArray] = useState<any[]>([]); //显示的数据
  const [start, setStart] = useState(0); //开始位置
  const [end, setEnd] = useState(itemCount); // 结束位置

  //初始化执行
  useEffect(() => {
    let result = data.slice(start, end);
    setShowArray(result);
    if (scrollBarRef.current)
      scrollBarRef.current.style.height = itemHeight * data.length + "px";
  }, [data]); //showArray 发生变化再次执行
  //滚动事件
  const scroll = () => {
    let scrollTop = divref.current!.scrollTop; //获取每次滚动的高度
    //获取索引位置的计算
    let getStart = Math.floor(scrollTop / itemHeight);
    //计算结束索引
    let getEnd = getStart + itemCount;
    ulref.current!.style.top = getStart * itemHeight + "px"; // 滚动后偏移量
    let result = data.slice(getStart, getEnd); // 获取滚动后的新数据
    setShowArray(result); //重新设置数据
  };
  return (
    <div>
      <div
        ref={divref}
        className={style.box}
        onScroll={() => {
          scroll();
        }}
      >
        <div className={style.scrollBar} ref={scrollBarRef}></div>
        <div ref={ulref} className={style.content}>
          {showArray.map((item) => (
            <div style={{ height: itemHeight }} key={item.id}>
              { children(item)}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};