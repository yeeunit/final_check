import Link from "next/link";
import styled from "@emotion/styled";
import PointModalPage from "../../modal/point/index";
import { gql, useMutation } from "@apollo/client";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { isBucketActiveState, isLoginStatus } from "../../../../commons/store";
import { useRouter } from "next/router";
import {
  IMutation,
  IMutationCreatePointTransactionOfLoadingArgs,
} from "../../../../commons/types/generated/types";

const Wrapper = styled.div`
  width: 1920px;
  /* width: 100%; */
  height: 100px;
  text-align: right;
  line-height: 100px;
  border-bottom: 1px solid #555555;
  padding: 0 200px;
`;

const TextWrap = styled.div`
  display: flex;
  flex-direction: row;
  width: 330px;
  /* border: 1px solid red; */
  float: right;
  a {
    color: black;
  }
`;
const Text = styled.span`
  font-weight: 400;
  /* font-size: 14px; */
  :hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;
const Circle = styled.div`
  width: 20px;
  height: 20px;
  background: #ffe004;
  border-radius: 20px;
  text-align: center;
  line-height: 20px;
`;
const B = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const LOGOUT_USER = gql`
  mutation logoutUser {
    logoutUser
  }
`;

const CREATE_POINT_TRANSACTION_OF_LOADING = gql`
  mutation createPointTransactionOfLoading($impUid: ID!) {
    createPointTransactionOfLoading(impUid: $impUid) {
      _id
      impUid
      amount
      status
      statusDetail
    }
  }
`;

// export const FETCH_USER_LOGGED_IN = gql`
//     query fetchUserLoggedIn {
//         fetchUserLoggedIn {
//             _id
//             email
//             name
//             userPoint {
//                 _id
//                 amount
//             }
//         }
//     }
// `

export default function LayoutHeader(props) {
  const router = useRouter();

  const [bucketList, setBucketList] = useState([]);
  const [isLogin, setIsLogin] = useRecoilState(isLoginStatus);
  const [isPointOpen, setIsPointOpen] = useState(false);

  const [logoutUser] = useMutation(LOGOUT_USER);
  const [bucketIsActive, setBucketIsActive] =
    useRecoilState(isBucketActiveState);

  const [createPointTransactionOfLoading] = useMutation<
    Pick<IMutation, "createPointTransactionOfLoading">,
    IMutationCreatePointTransactionOfLoadingArgs
  >(CREATE_POINT_TRANSACTION_OF_LOADING);

  useEffect(() => {
    const result = JSON.parse(localStorage.getItem("bucketList") || "[]");
    setBucketList(result);
  }, [bucketIsActive]);

  const onClickLogOut = async () => {
    try {
      await logoutUser();
      localStorage.removeItem("userInfo");
      localStorage.removeItem("accessToken");
      setIsLogin(false);
      router.push("/");
      alert("로그아웃");
    } catch (error) {
      alert("로그아웃 실패");
    }
  };

  // const onClickPointSubmit = (data: any) => {
  //   const IMP = window.IMP; // 생략 가능
  //   IMP.init("imp49910675"); // Example: imp00000000
  //   IMP.request_pay(
  //     {
  //       // param
  //       pg: "nice",
  //       pay_method: "card",
  //       // merchant_uid: "ORD20180131-0000011",
  //       name: "포인트충전",
  //       amount: data.price,
  //       buyer_email: "00000@gmail.com",
  //       buyer_name: "000",
  //       buyer_tel: "010-000-000",
  //       buyer_addr: "서울특별시 강남구 신사동",
  //       buyer_postcode: "01181",
  //       m_redirect_url: "http://localhost:3000/28-01-payment",
  //     },
  //     async (rsp: any) => {
  //       if (rsp.success) {
  //         await createPointTransactionOfLoading({
  //           variables: {
  //             impUid: rsp.imp_uid,
  //           },
  //         });
  //         setIsPointOpen(false);
  //         alert("결제 성공");
  //       } else {
  //         // 결제 실패 시 로직,
  //         alert("결제 실패");
  //       }
  //     }
  //   );
  // };

  return (
    <>
      <Wrapper>
        {isLogin ? (
          <>
            <span>
              {props.userInfo?.name}님 포인트 {props.userInfo.userPoint.amount}{" "}
              P
            </span>
            {/* <span>님 포인트 P</span> */}

            <PointModalPage />

            <TextWrap>
              <Text onClick={onClickLogOut}>로그아웃</Text> &nbsp; &nbsp; &nbsp;
              <B>
                {" "}
                <Text>장바구니</Text> &nbsp;{" "}
                <Circle>{bucketList.length}</Circle>{" "}
              </B>
            </TextWrap>
          </>
        ) : (
          <>
            <TextWrap>
              <Link href="/products/login">
                <Text>
                  {" "}
                  <a>로그인</a>{" "}
                </Text>
              </Link>{" "}
              &nbsp; &nbsp; &nbsp;
              <Link href="/products/join">
                <Text>
                  {" "}
                  <a>회원가입</a>
                </Text>
              </Link>{" "}
              &nbsp; &nbsp; &nbsp;
              <B>
                {" "}
                <Text>장바구니</Text> &nbsp;{" "}
                <Circle> {bucketList.length} </Circle>{" "}
              </B>
            </TextWrap>
          </>
        )}

        {/* 
        <span>
          <span>{props.userInfo?.name} </span>
          <span>님 포인트</span>
          <span>{props.userInfo.userPoint.amount}</span>
          <span> P </span> */}
        {/* <span>{props.userInfo?.name}</span> */}
        {/* <span>{props.userInfo.userPoint.amount}</span>P */}
        {/* </span> */}

        {/* <PointModalPage /> */}

        {/* <TextWrap>

          <Link href="/products/join">
            <Text> <a>회원가입</a></Text>
          </Link> &nbsp; &nbsp; &nbsp;

          <Link href="/products/login">
            <Text> <a>로그인</a> </Text>
          </Link> &nbsp; &nbsp; &nbsp;

          <Text onClick={onClickLogOut}>로그아웃</Text>   &nbsp; &nbsp; &nbsp;
          
          <B> <Text>장바구니</Text> &nbsp; <Circle> {bucketList.length} </Circle> </B>

        </TextWrap> */}
      </Wrapper>
    </>
  );
}
