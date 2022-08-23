import * as P from "./CommentWrite.styles"


export default function CommentWriteUI(props){

    return(
        <>

            <P.CommentWriteBox 
                type="text"  
                onChange={props.onChangeContents}
                placeholder="댓글 작성하기"
            />
            

            <P.CommentBtn
                onClick={props.onClickWrite}>
                작성하기</P.CommentBtn>

        </>
    )
}