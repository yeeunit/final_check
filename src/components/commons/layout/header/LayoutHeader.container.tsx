import { useApolloClient, useMutation } from "@apollo/client";

import { useRouter } from "next/router";
import { MouseEvent, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useRecoilState } from "recoil";
import { isBucketActiveState, isLoginStatus } from "../../../../commons/store";
import { IMutation } from "../../../../commons/types/generated/types";

// 이프롭스는 어디서줌??
export default function LayoutHeader(props) {
  const router = useRouter();
  const client = useApolloClient();

  const [isLogin, setIsLogin] = useRecoilState(isLoginStatus);
  const [isPointOpen, setIsPointOpen] = useState(false);
  const [isBtnActive, setIsBtnActive] = useState(false);
  const [bucketIsActive, setBucketIsActive] =
    useRecoilState(isBucketActiveState);
  const [bucketList, setBucketList] = useState([]);
  const [userInfo, setUserInfo] = useState();

  const [logoutUser] = useMutation<Pick<IMutation, "logoutUser">>(LOGOUT_USER);
  const [createPointTransactionOfLoading] = useMutation<
    Pick<IMutation, "createPointTransactionOfLoading">,
    MutationCreatePointTransactionOfLoadingArgs
  >(CREATE_POINT_TRANSACTION_OF_LOADING);

  const { register, handleSubmit } = useForm({
    mode: "onChange",
  });

  useEffect(() => {
    if (localStorage.getItem("accessToken")) {
      setIsLogin(true);
      setUserInfo(JSON.parse(localStorage.getItem("userInfo") as string));
    } else if (!localStorage.getItem("accessToken")) {
      setIsLogin(false);
    }
  }, [isLogin]);

  useEffect(() => {
    const result = JSON.parse(localStorage.getItem("bucketList") || "[]");
    setBucketList(result);
  }, [bucketIsActive]);

  const onClickMove = (url: string) => (event: MouseEvent<HTMLElement>) => {
    router.push(`${url}`);
  };

  const onClickLogOut = async () => {
    try {
      await logoutUser();
      localStorage.removeItem("userInfo");
      localStorage.removeItem("accessToken");
      setIsLogin(false);
      router.push("/");
      alert("로그아웃 성공");
    } catch (error) {
      alert("로그아웃 실패");
    }
  };

  return (
    <>
      <LayoutHeader
        isPointOpen={isPointOpen}
        isBtnActive={isBtnActive}
        bucketList={bucketList}
        isLogin={isLogin}
        userInfo={userInfo}
        isBlack={props.isBlack}
        onClickMove={onClickMove}
        onClickLogOut={onClickLogOut}
        handleSubmit={handleSubmit}
        register={register}
      />
    </>
  );
}
