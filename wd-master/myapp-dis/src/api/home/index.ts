import { getHttp } from "../../service/request";

// 轮播接口
export const getBannerApi = () => {
  return getHttp({ url: '/health/share/v1/bannersShow' })
}

// 问诊咨询接口 | 常见病症接口
export const getKnowledgeBase = () => {
  return getHttp({ url: "/health/share/knowledgeBase/v1/findDepartment" });
}

// 健康咨询标题接口
export const getInformation = () => {
  return getHttp({ url: "/health/share/information/v1/findInformationPlateList" });
}


// 类型
export interface InfoListParamsRawState {
  plateId: number;
  count: number;
  page: number;
}

// 健康咨询列表接口
export const getInformationListById = (params: InfoListParamsRawState) => {
  return getHttp({ url: '/health/share/information/v1/findInformationList', params:{...params} });
}

// 健康咨询详情接口
export const getInformationListDetail = (infoId: string) => {
  return getHttp({ url: '/health/share/information/v1/findInformation', params: { infoId } });
}

// 咨询收藏取消
export const cancelInfoCollection = (infoId: number) => {
  // return deleteHttp({ url: '/health/user/verify/v1/cancelInfoCollection',params:{infoId:infoId}});
}

// 咨询收藏
export const addInfoCollection = (infoId: number) => {
  // return postHttpJSON({ url: '/health/user/verify/v1/addInfoCollection?infoId=' + infoId });
}

// 常见病症接口根据课室查询
export const getKnowledgeBaseListByID = (departmentId: number) => {
  return getHttp({ url: "/health/share/knowledgeBase/v1/findDiseaseCategory", params: { departmentId } });
}

// 常见病症接口根据课室查询
export const getKnowledgeBaseDetailByID = (id: number) => {
  return getHttp({ url: "/health/share/knowledgeBase/v1/findDiseaseKnowledge", params: { id } });
}

// 常见药品标题
export const getKnowledgeBaseCategoryList = () => {
  return getHttp({ url: "/health/share/knowledgeBase/v1/findDrugsCategoryList" });
}

export interface CategoryListParams {
  drugsCategoryId: number;
  page?: number;
  count?: number;
}

// 常见药品内容
export const getKnowledgeBaseCategoryListItemsByID = (
  params: CategoryListParams
) => {
  return getHttp({ url: "/health/share/knowledgeBase/v1/findDrugsKnowledgeList", params: {...params} });
}

// 常见药品详情
export const getKnowledgeBaseCategoryDetailById = (
  id: number
) => {
  return getHttp({ url: "/health/share/knowledgeBase/v1/findDrugsKnowledge", params: { id } });
}

// 首页搜索
export const getSearchByKeyWord = (
  keyWord: string
) => {
  return getHttp({ url: "/health/share/v1/homePageSearch", params: { keyWord } });
}

// 热门搜索
export const getHotSearch = () => {
  return getHttp({ url: "/health/share/v1/popularSearch" });
}