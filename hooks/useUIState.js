import { create } from "zustand";

const useUIState = create((set)=>({
  homeCategory:"",
  headerImagesSrc:"https://source.unsplash.com/random/?seoul",
  setHomeCategory:(value) => set({ homeCategory: value }),
  setHeaderImageSrc:(src) => set({headerImageSrc: src}),
}));

export default useUIState;