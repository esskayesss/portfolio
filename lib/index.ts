'use client';
export const getItemFromLocalStorage = (key: string, d: string): string => {
  let item = localStorage.getItem(key);
  if(item === null){
    item = d;
    localStorage.setItem(key, item);
  }
  return item;
}