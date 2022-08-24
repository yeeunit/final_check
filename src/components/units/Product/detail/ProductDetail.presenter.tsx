import { CloseOutlined, HeartOutlined } from "@ant-design/icons"
import Link from "next/link"
import * as P from "./ProductDetail.styles"
import styled from "@emotion/styled"
import KakaoMap02 from "../../map/02"
import { getDate } from "../../../../commons/libraries/getDate"
import CommentWrite from "../../comment/write/CommentWrite.container"
import CommentListUI from "../../comment/list/CommentList.presenter"
import { useState } from "react"


const MyIcon = styled(HeartOutlined)`
`

export default function ProductDetailUI(props){

    
    return(
    <>
    <P.Wrapper>
        <P.TopWrapper>
                <P.ImageBox>              
    
                <P.Image
                  src={`https://storage.googleapis.com/${props.data?.fetchUseditem.images[0]}`}
                />
                </P.ImageBox>

            <P.ItemBox>
                <P.NameWrapper>
                <P.Name> 상품 : {" "}{props.data?.fetchUseditem?.name}
                    </P.Name>
                   <span><P.EditOut onClick = { props.onClickUpdate } /> 
                   &nbsp; <P.CloseOut onClick = { props.onClickDelete } /></span> 

                </P.NameWrapper>

                <div>
                <P.Price>가격 : {props.data?.fetchUseditem?.price}</P.Price><span>원</span>
                </div>

                <P.Line1 />
                
                <P.Remarks> remarks <br/>
                {props.data?.fetchUseditem?.remarks}
                    
                </P.Remarks>

                <P.TagsWrapper>

                    {props.data?.fetchUseditem.tags
                        .map((el: string) => (
                        <P.Tags key={el} >
                            {el}
                        </P.Tags>
                    ))}


                </P.TagsWrapper>

                <P.Line2 />

                <P.ButtonWrapper>
                    <P.LikeBtn>
                    <MyIcon /> {" "} 
                         찜<span>1</span>
                        </P.LikeBtn>

                    <P.BasketBtn>
                    {/* <Link href={"/boards"} > */}
                            <a onClick={props.onClickBucket(props.data)}>장바구니</a>
                            {/* <span>{ props.bucketList.length }</span> */}
                            {/* </Link> */}
                    </P.BasketBtn>

                    <P.BuyBtn> 
                        <Link href={"/boards"}>
                            <a>바로구매</a></Link>
                    </P.BuyBtn>

                </P.ButtonWrapper>

            </P.ItemBox>
    
        </P.TopWrapper>
    

        <P.BottomWrapper>
            <P.LeftBox>
                <P.Title>상품정보</P.Title>
                <P.Line3/>
                    <P.Contents>
                    {typeof window !== "undefined" ? (
                <div
                  dangerouslySetInnerHTML={{
                    __html: props.data?.fetchUseditem.contents,
                  }}
                ></div>
              ) : (
                <div style={{ color: "blue" }} />
              )}
                    </P.Contents>

                <P.MapTitle>거래지역</P.MapTitle>
                <P.Map>
                    <KakaoMap02 
                     data = { props.data?.fetchUseditem } 
                     address = { props.data?.fetchUseditem.useditemAddress?.address as string } 
                    //  width = "100%"
                    //  height = "448px"
                     />
                </P.Map>


            </P.LeftBox>

            <P.RightBox>
                <P.Title>상점정보</P.Title>
                <P.Line4 />
                <P.UsernameBox>
                <P.IMG
                src="/images/avatar.png"/>
                <P.Username> {props.data?.fetchUseditem?.seller.name}</P.Username>
                </P.UsernameBox>
                
    
                <P.Title>댓글</P.Title>
                <P.Line5 />


                <CommentWrite />
                {/* <P.CommentWriteBox></P.CommentWriteBox>
                <P.CommentBtn>작성하기</P.CommentBtn> */}


                <P.CommentBox>
                    <P.OneTwoThee>
                    <P.CommentImg src="/images/avatar.png" />
                    <div>
                    <P.CommentName>username</P.CommentName>
                    <span>{getDate(props.data?.fetchUseditem?.createdAt)}</span>
                    </div>
                    </P.OneTwoThee>

                    <div><P.EditOut /> &nbsp; <P.CloseOut/></div>
                </P.CommentBox>


                <P.CommentTextBox>
                    댓글내용내용내용댓글내용내용내용댓글내용내용내용
                </P.CommentTextBox>

                <CommentListUI />


                <P.BtnWrap>
                
                <Link href="/">
                <P.CancelBtn><a>취소하기</a></P.CancelBtn>
                </Link>

                <P.ModifyBtn>수정하기</P.ModifyBtn>
                </P.BtnWrap>


            </P.RightBox>
        </P.BottomWrapper>
     </P.Wrapper>
    </>
    )
}
