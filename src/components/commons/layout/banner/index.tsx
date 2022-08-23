import Link from "next/link"
import styled from "@emotion/styled";

const Wrapper = styled.div`
  width: 1920px;
  /* width: 100%; */
  height: 157px;
  border-bottom: 1px solid #555555;
  line-height: 160px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 250px;

`;

const Title = styled.span`
  font-weight: 500;
  font-size: 24px;
  text-decoration: none;
  color: black;
  height: 150px;
  line-height: 100px;

`
const SellWrap = styled.div`
  float: right;
  :hover{
      cursor: pointer;
    }

`
// const Sell = styled.div`
//   float: right;
//   :hover{
//       cursor: pointer;
//     }
// `
const H1 = styled.h1`
  float: right;
  :hover{
      cursor: pointer;
    }

`

export default function LayoutBanner() {

    return(
    <>
      <Wrapper>
        
        <Link href="/products">
        <H1> <a><img src="/images/logo1.png"/> </a></H1>
        </Link>
        

        <SellWrap>
          <Link href="/products/new">
          <a>
          <div>
          <img src="/images/sell1.png"/> &nbsp;&nbsp;
          <Title>판매하기</Title>
          </div>
          </a>
          </Link>
        </SellWrap>

      </Wrapper>

    </>
    )
}

