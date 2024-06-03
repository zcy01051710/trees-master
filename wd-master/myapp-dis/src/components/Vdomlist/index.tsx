import React, { FC, useState, useEffect, useRef } from 'react';
import style from './style.module.scss'
import { useNavigate } from 'react-router-dom';
import { NavBar, Sticky } from 'react-vant';
import { WDListItem } from '../../components/wd-list-item';
// import { WDHeader } from '../../../components';
interface VirtualListProps {
  data: any[];
  itemSize: number;
  renderItem?: (item: any, index: number) => React.ReactNode ;
}

const VirtualList: FC<VirtualListProps> = ({ data, itemSize, renderItem }) => {
  // 声明一个状态变量startIndex，用于存储当前渲染的起始索引
  // 声明一个变量containerRef，用于存储容器元素
  // 声明一个函数handleScroll，用于处理滚动事件
   // 如果容器元素存在
  // 获取当前滚动位置
  // 更新起始索引

  
  const [startIndex, setStartIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const navigate=useNavigate()
  // 滚动事件
  const handleScroll = () => {
   if (containerRef.current) {
      const scrollTop = containerRef.current.scrollTop;
      // 计算与当前滚动位置对应的起始索引
      const newStartIndex = Math.floor(scrollTop / itemSize);
      setStartIndex(newStartIndex);
    }
  };

  // 声明一个函数useEffect，用于添加滚动事件监听
  useEffect(() => {
    if (containerRef.current) {
      // 添加滚动事件监听
      containerRef.current.addEventListener('scroll', handleScroll);
      // 返回一个函数，用于移除滚动事件监听
      return () => {
        if (containerRef.current) {
          // 移除滚动事件监听
          containerRef.current.removeEventListener('scroll', handleScroll);
        }
      };
    }
  }, []);

  return (
    <div
      style={{ height: '100%', overflow: 'auto' }}
      ref={containerRef}
    >
      <Sticky offsetTop={0}>
        <NavBar title="更多资讯" onClickLeft={() => navigate(-1)} />
      </Sticky>
      
      <div className={style.context} style={{ height: `${data.length * itemSize}px`, position: 'relative' }}>
        {Array.from({ length: Math.min(6, data.length - startIndex) }, (_, index) => (
          <div className={style.aa} key={startIndex + index} style={{ position: 'absolute',
           top: `${(startIndex + index) * itemSize}px`, height:`${itemSize}px` }}>
            <WDListItem v={data[startIndex + index]} onClick={() => navigate('/home/list/' + data[startIndex + index].id)}></WDListItem>
          </div>
        ))}
      </div>
      <div>没用更多了.......</div>
    </div>
  );
};

export default VirtualList;
