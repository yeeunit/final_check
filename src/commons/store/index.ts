// 모든 컴포넌트에서 뽑아쓸 수 있아

import { atom } from "recoil";

export const isEditState = atom({
  key: "isEditState",
  default: false,
});

export const accessTokenState = atom({
  key: "accessTokenState",
  default: "",
});

export const userInfoState = atom({
  key: "userInfoState",
  default: {
    email: "",
    name: "",
  },
});



export const isBucketActiveState = atom({
  key: "isBucketActiveStateKey",
  default: false
})

export const visitedPageState = atom({
  key: "visitedPageState",
  default: "/",
});

export const WatchActiveState = atom({
  key: "WatchActiveStateKey",
  default: false
})

export const isLoginStatus = atom({
  key: "isLoginStatusKey",
  default: false
})