import Link from "next/link";
import styled from "@emotion/styled";
import PointModalPage from '../../modal/point/index'
import { gql, useMutation } from "@apollo/client";

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
  a{
    color: black;
  }

`
const Text = styled.span`
  font-weight: 400;
  /* font-size: 14px; */
  :hover{
    cursor: pointer;
    text-decoration: underline;
  }
`
const B = styled.div`
  display: flex;
  flex-direction: row;
  /* width: 120px;
  height: 50px; */
  /* background-color: rebeccapurple; */
  
`
const Circle = styled.div`
  width: 20px;
  height: 20px;
  color: white;
  font-size: 9px;
  background-color:#FFE004;
  border-radius: 50px;
`

// :visited{
//   color: black;
// } 왜안먹히는고니
// 장바구니 옆 동그라미 만들기 무지 어렵다~~~



const LOG_OUT = gql`
    mutation logoutUser{
        logoutUser
    }
`


export default function LayoutHeader(props) {

    const [logoutUser] = useMutation(LOG_OUT)
    const onClickLogOut = async() => {
      await logoutUser()
      alert("로그아웃")
    }

  return (
    <>
    <Wrapper>

    <PointModalPage />

    <TextWrap>

     {/* <Link href="/products/new">
        <Text><a onClick={props.showModal}>충전</a></Text>
      </Link>
    &nbsp; &nbsp; &nbsp; */}

      <Link href="/products/join">
      <Text><a>회원가입</a></Text>
      </Link>
      &nbsp; &nbsp; &nbsp;

      <Link href="/products/login">
      <Text><a>로그인</a></Text>
      </Link>
      &nbsp; &nbsp; &nbsp;

      <Text onClick={onClickLogOut}>로그아웃</Text>
      &nbsp; &nbsp; &nbsp;

      <B>
      <Text>장바구니</Text> &nbsp;&nbsp;
      <span>0</span>
      {/* <Circle>0</Circle> */}

      </B>

      </TextWrap>
      
    </Wrapper>
    </>
  );

  }