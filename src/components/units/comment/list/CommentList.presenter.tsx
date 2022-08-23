import InfiniteScroll from "react-infinite-scroller";
import CommentListUIItem from "./CommentList.presenterItem";


export default function CommentListUI(props){

    return(
    <>
        <InfiniteScroll 
            pageStart={0} 
            loadMore={props.onLoadMore} 
            hasMore={true}>

            {props.data?.fetchUseditemQuestions.map((el) => (
                <CommentListUIItem key={el._id} el={el} />
        ))}
        </InfiniteScroll>

    </>
    )
}