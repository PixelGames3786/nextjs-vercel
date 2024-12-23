import { useEffect } from "react";
import Cookies from "js-cookie";
import { v4 as uuidv4 } from "uuid";

export const UserCookieRegister = () => {
  // クッキーに "userId" が設定されていない場合は新規生成
  if (!Cookies.get("userId")) {
    const userId = uuidv4(); // ランダムなIDを生成
    Cookies.set("userId", userId, { expires: 365 }); // 有効期限は1年
  }
};

export const UserCookieGetter = () => {
  return Cookies.get("userId");
};