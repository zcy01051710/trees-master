import React, { useState, useEffect } from "react";
import { Image } from "react-vant";
import { useNavigate } from "react-router-dom";
import style from "./index.module.scss";
import icon from "../../asses/icon/common resource/hdpi/common_icon_back_black_n.png";
import detele from "../../asses/icon/common resource/hdpi/message_icon_close_n.png";
import { getListSearch } from "../../../api/Wardmeta";
import { MetaList } from "../Interface/Interface";
import timestampToTime from "../../home/Time";
const Index: React.FC = () => {
  interface SearchHistoryItem {
    term: string;
  }
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [searchHistory, setSearchHistory] = useState<SearchHistoryItem[]>(
    JSON.parse(localStorage.getItem("searchHistory") || "[]")
  );
  const [Search, setSearch] = useState<MetaList[]>([]);
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };
  const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    getListSearch(searchTerm).then((resp) => {
      setSearch(resp.result);
    });
    e.preventDefault();
    if (searchTerm) {
      const existingTerms = new Set(searchHistory.map((item) => item.term));
      if (!existingTerms.has(searchTerm)) {
        const newHistory = [{ term: searchTerm }, ...searchHistory];
        setSearchHistory(newHistory);
        localStorage.setItem("searchHistory", JSON.stringify(newHistory));
      }
    }
  };

  const handleDeleteItem = (index: number) => {
    const updatedHistory = searchHistory.filter((_, i) => i !== index);
    setSearchHistory(updatedHistory);
    localStorage.setItem("searchHistory", JSON.stringify(updatedHistory));
  };
   const handleDeleteAll = () => {
    setSearchHistory([]);
    localStorage.removeItem('searchHistory');
  };
  const handleHistoryClick = (item: SearchHistoryItem) => {
    setSearchTerm(item.term);
  };
  useEffect(() => {
    // 可以在这里进行历史记录的持久化等操作
  }, [searchHistory]);
  return (
    <div>
      <form onSubmit={handleSearchSubmit} className={style.form}>
        <Image
          round
          width="20px"
          height="20px"
          src={icon}
          onClick={() => navigate("/home/meta?id=7")}
        />
        <input
          type="text"
          className={style.input}
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <button type="submit">搜索</button>
      </form>
      <div>
        <div className={style.historydetele}>
          <p className={style.history}>搜索历史</p>
          <button className={style.handledetele} onClick={handleDeleteAll}>全部清除</button>
        </div>
        {searchHistory.map((item, index) => (
          <div className={style.historyList} key={index}>
            <span onClick={() => handleHistoryClick(item)}>{item.term}</span>
            <button onClick={() => handleDeleteItem(index)}>
              <Image
                round
                width="20px"
                height="20px"
                src={detele}
              />
            </button>
          </div>
        ))}
      </div>
      <div>
        {Search &&
          Search.map((item, ind) => (
            <div
              className={style.list}
              key={ind}
              onClick={() => navigate(`/home/meta/detail/${item.sickCircleId}`)}
            >
              <h3 className={style.h3}>{item.title}</h3>
              <span className={style.span}>
                {timestampToTime(item.releaseTime)}
              </span>
              <p className={style.word}>{item.detail}</p>
              <div className={style.word1}>
                <span className={style.span}>
                  {"收藏" + item.collectionNum}
                </span>{" "}
                <span className={style.span}>{"建议" + item.amount}</span>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};
export default Index;

