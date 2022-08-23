import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { 
  IQuery, 
  IQueryFetchUseditemQuestionsArgs 
} from "../../../../commons/types/generated/types";
import CommentListUI from "./CommentList.presenterItem";
import { FETCH_USEDITEM_QUESTIONS } from "./CommentList.queries";


export default function CommentList() {
  const router = useRouter();

  const { data, fetchMore } = useQuery<
    Pick<IQuery, "fetchUseditemQuestions">,
    IQueryFetchUseditemQuestionsArgs
  >(FETCH_USEDITEM_QUESTIONS, {
    variables: { useditemId: String(router.query._id) },
  });

  const onLoadMore = () => {
    if (!data) return;

    fetchMore({
      variables: { page: Math.ceil(data?.fetchUseditemQuestions.length / 10) + 1 },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult?.fetchUseditemQuestions)
          return { fetchUseditemQuestions: [...prev.fetchUseditemQuestions] };
        return {
          fetchUseditemQuestions: [
            ...prev.fetchUseditemQuestions,
            ...fetchMoreResult.fetchUseditemQuestions,
          ],
        };
      },
    });
  };

  return <CommentListUI data={data} onLoadMore={onLoadMore} />;
}
