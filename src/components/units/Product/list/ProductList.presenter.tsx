// ProductList 프리젠터

import InfiniteScroll from "react-infinite-scroller"
import * as P from "./ProductList.styles"

const getDate = (value) => {

    const date = new Date(value)

    const yyyy = date.getFullYear()
    const mm = String(date.getMonth() + 1).padStart(2, "0")
    const dd = String(date.getDate()).padStart(2, "0")
    const hours = String(date.getHours())
    const minutes = String(date.getMinutes())

    return `${mm}월 ${dd}일 ${hours}:${minutes} 작성`
    // 몇시간전 어케함
}

export default function ProductListUI(props){

        
    // 무한스크롤을 왜 박스래퍼 밖에줘야함??
    return(
    <>
        <P.Wrapper>

        {/* <div style={{ overflow: "auto"}} > */}
        <div>
        <InfiniteScroll
            pageStart={0} 
            loadMore={props.onFetchMore} 
            hasMore={true} 

            // useWindow={false}
            > 

        <P.BoxWrapper >
 
        {props.data?.fetchUseditems.map((el) => (
        
            // <div key={el._id}>
            <P.Box 
            key={el._id}
            id={el._id}
            onClick={props.onClickMoveToDetail}
            >
                <P.Image 
                src = { el.images?.length !==0 && el.images?.[0] !== ""
                    ? `https://storage.googleapis.com/${el.images?.[0]}`
                    : ""
                } 
                
                />
                        <P.TextBox >
                        <P.Text>{el.name}</P.Text>
                        <P.AlginBox  >
                        <P.Text >{el.price}</P.Text>
                        <P.Time >{getDate(el.createdAt)}</P.Time>
                        </P.AlginBox >
                        </P.TextBox>
            </P.Box>
            // </div>

        )) || <div></div> } 

        </P.BoxWrapper>

        </InfiniteScroll>
        </div>

        </P.Wrapper>
    </>
    )
}