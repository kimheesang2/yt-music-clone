import { create } from "zustand";

const useUIState = create((set)=>({
  homeCategory:"",
  headerImagesSrc:"https://source.unsplash.com/random/?seoul",
  setHomeCategory:(value) => set({ homeCategory: value }),
  setHeaderImageSrc:(src) => set({headerImagesSrc: src}),
}));

export default useUIState;