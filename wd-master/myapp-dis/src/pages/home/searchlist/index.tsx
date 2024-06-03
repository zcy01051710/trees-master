import React, { useState } from "react";
import style from "./style.module.scss";
import { KnowbaseItem } from "../../../components/knowbaseItem";
import { getHotSearch, getSearchByKeyWord } from "../../../api/home";
import { useBoolean, useRequest } from "ahooks";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { addSearchList, removeSearchList } from "../../../store/user/userSlice";
import leftUrl from "../../asses/common_icon_white_n.png";
import { useNavigate } from "react-router-dom";
import { addDoctorList } from "../../../store/doctorDetail/doctorDetailSlice";
interface HotSearchState {
  id: number;
  name: string;
}

interface DiseaseSearchVoListState {
  diseaseId: number;
  diseaseName: string;
}

interface DoctorSearchVoListState {
  doctorId: number;
  doctorName: string;
}

interface DrugsSearchVoListState {
  drugsId: number;
  drugsName: string;
}

interface SearchResultState {
  diseaseSearchVoList: DiseaseSearchVoListState[];
  doctorSearchVoList: DoctorSearchVoListState[];
  drugsSearchVoList: DrugsSearchVoListState[];
}

const Index: React.FC = () => {
  const [keyWord, setKeyWord] = useState("");
  const dispatch = useAppDispatch();
  const [isSearch, { setFalse, setTrue }] = useBoolean(false);
  // 搜索函数
  const {
    run: runSearchData,
    data: searchResullt = {
      diseaseSearchVoList: [],
      doctorSearchVoList: [],
      drugsSearchVoList: [],
    },
  } = useRequest(
    async () => {
      const resp = await getSearchByKeyWord(keyWord);
      return resp.result as SearchResultState;
    },
    {
      manual: true,
    }
  );
  // 确认搜索
  const handleSearch = () => {
    if (keyWord.trim() !== "") {
      runSearchData();
      dispatch(addSearchList(keyWord));
      setTrue();
    }
  };
  // const dispatch = useAppDispatch();

  // 热门搜索
  const { data: hotData = [] } = useRequest(async () => {
    const resp = await getHotSearch();
    return resp.result as HotSearchState[];
  });
  // 历史搜索记录
  const searchList = useAppSelector((state) => state.user.searchList);
  const navigate = useNavigate();
  const Con1 = (
    <>
      <KnowbaseItem labelText="热门搜索">
        <ul className={style["hot-search"]}>
          {hotData.map((v) => {
            return <span key={v.id}>{v.name}</span>;
          })}
        </ul>
      </KnowbaseItem>
      {/* <KnowbaseItem labelText="历史搜索">
        <ul className={style["search-list"]}>
          {searchList.map((v, i) => {
            return (
              <li key={i} className={style["search-list-item"]}>
                <span>{v}</span>
                <span onClick={() => dispatch(removeSearchList(v))}>X</span>
              </li>
            );
          })}
        </ul>
      </KnowbaseItem> */}
      
    </>
  );
  const Con2 = (
    <div className="search-result">
      <KnowbaseItem labelText="医生">
        <ul className={style["search-list"]}>
          {searchResullt.doctorSearchVoList.map((v) => {
            return (
              <li
                key={v.doctorId}
                className={style["search-list-item"]}
                onClick={() => {
                  dispatch(addDoctorList(v.doctorId))
                }}
              >
                {v.doctorName}
              </li>
            );
          })}
        </ul>
      </KnowbaseItem>
      <KnowbaseItem labelText="药品">
        <ul className={style["search-list"]}>
          {searchResullt.drugsSearchVoList.map((v) => {
            return (
              <li
                key={v.drugsId}
                className={style["search-list-item"]}
                onClick={() => navigate(`/home/knowledgebase/${v.drugsId}/2`)}
              >
                {v.drugsName}
              </li>
            );
          })}
        </ul>
      </KnowbaseItem>
      <KnowbaseItem labelText="病证">
        <ul className={style["search-list"]}>
          {searchResullt.diseaseSearchVoList.map((v) => {
            return (
              <li
                key={v.diseaseId}
                className={style["search-list-item"]}
                onClick={() => navigate(`/home/knowledgebase/${v.diseaseId}/1`)}
              >
                {v.diseaseName}
              </li>
            );
          })}
        </ul>
      </KnowbaseItem>
    </div>
  );
  return (
    <div className={style.search}>
      <div className={style.header}>
        <img src={leftUrl} alt="" onClick={() => navigate(-1)} />
        <input
          type="text"
          placeholder="病证、药品名称、医生姓名"
          value={keyWord}
          onChange={(e) => setKeyWord(e.target.value)}
          onKeyDown={(e) => e.keyCode === 13 && handleSearch()}
          onFocus={() => setFalse()}
        />
        <span onClickCapture={() => handleSearch()}>搜索</span>
      </div>
      <div className={style["con"]}>{isSearch ? Con2 : Con1}</div>
    </div>
  );
};

export default Index;
