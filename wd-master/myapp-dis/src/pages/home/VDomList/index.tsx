import React from "react";
import "./App.css";
import { useState, useEffect, useRef } from "react";
export default function App() {
  let array: number[] = []; //总数据
  for (let i = 0; i <= 100; i++) {
    array.push(i);
  }
  let item = 50; // li标签的高度
  let ulref = useRef<HTMLUListElement | null>(null);
  let divref = useRef<HTMLDivElement | null>(null);
  let [showArray, setShowArray] = useState<number[]>([]); //显示的数据
  let [start, setStart] = useState(0); //开始位置
  let [end, setEnd] = useState(11); // 结束位置
  let num = 11; //显示的数量
  //初始化执行
  useEffect(() => {
    let data = array.slice(start, end);
    setShowArray(data);
    let scrollBar = document.querySelector(".scrollBar") as HTMLElement;
    if(scrollBar)
        scrollBar.style.height = item * array.length + "px";
  }, []); //showArray 发生变化再次执行
  //滚动事件
  const scroll = () => {
    let scrollTop = divref.current!.scrollTop;//获取每次滚动的高度
    //获取索引位置的计算
    let getStart = Math.floor(scrollTop / item);
    //计算结束索引
    let getEnd = getStart + num
    ulref.current!.style.top = getStart * item + 'px' // 滚动后偏移量
    let data = array.slice(getStart,getEnd) // 获取滚动后的新数据
    setShowArray(data) //重新设置数据
  };
  return (
    <div>
      <div
        ref={divref}
        className="box"
        onScroll={() => {
        scroll();
        }}
      >
      <div className="scrollBar"></div>
        <ul ref={ulref}>
          {showArray.map((item) => (<li key={item}>小丑{item}号</li>))}
        </ul>
      </div>
    </div>
  );
}