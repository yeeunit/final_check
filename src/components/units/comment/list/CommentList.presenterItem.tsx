import { getDate } from "../../../../commons/libraries/getDate"
import * as P from "./CommentList.styles"


export default function CommentListUIItem(props){
  

  return (
    <>

        <P.CommentBox>
          <P.OneTwoThee>
          <P.CommentImg src="/images/avatar.png" />
          <div>
          <P.CommentName> {props.el?.user}</P.CommentName>
          <span>{getDate(props.el?.createdAt)}</span>
          </div>
          </P.OneTwoThee>
          <div>
            <P.EditOut /> &nbsp; 
            <P.CloseOut/>
          </div>
        </P.CommentBox>



            <P.CommentTextBox>
            {props.el?.contents}
                댓글내용
            </P.CommentTextBox>



            <P.BtnWrap>
              <P.CancelBtn>취소하기</P.CancelBtn>

              <P.ModifyBtn>수정하기</P.ModifyBtn>
            </P.BtnWrap>
   </>
  )
}
