import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// 切片
const userSlice = createSlice({
  name: "userSlice",
  initialState: {

    // 首页搜索记录
    searchList: [] as string[],
    // 病友圈搜索历史记录
    patientCircleSearchList: [] as string[],
  },
  reducers: {
    addSearchList(state, action: PayloadAction<string>) {
      state.searchList = Array.from(
        new Set([action.payload, ...state.searchList])
      );
    },
    addpatientCircleSearchList(state, action: PayloadAction<string>) {
      state.patientCircleSearchList = Array.from(
        new Set([action.payload, ...state.patientCircleSearchList])
      );
    },
    removeSearchList(state, action: PayloadAction<string>) {
      state.searchList = state.searchList.filter((v) => v !== action.payload);
    },
    clearSearchList(state) {
      state.searchList = [];
    },
  
  },
  
});

// 抛出reduce
export default userSlice.reducer;

export const {
  addSearchList,
  removeSearchList,
} = userSlice.actions;