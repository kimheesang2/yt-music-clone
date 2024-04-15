import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const sleep = (ms: number) => new Promise((res) => setTimeout(res, ms));
// await sleep(1000)

export function getRandomInt(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1 )) + min;
}

export function getRandomElementFromArray(arr: any[]){
  const len = arr?.length;
  return arr[getRandomInt(0, len - 1)];
}

export function chunkArray(arr: any[], chunkSize: number) {
  let resultArray = []; // `let`으로 변경
  for (let i = 0; i < arr.length; i += chunkSize) {
    const chunk = arr.slice(i, i + chunkSize);
    resultArray.push(chunk);
  }
  return resultArray; // 재할당 없이 반환
}

export function genreateRandomHex(){
  return "#" + ((Math.random() * 0xffffff) << 0).toString(16).padStart(6,"0");
}