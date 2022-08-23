
import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import { IMutation, IMutationCreateUseditemQuestionArgs } from "../../../../commons/types/generated/types";
import { FETCH_USEDITEM_QUESTIONS } from "../list/CommentList.queries";
import CommentWriteUI from "./CommentWrite.presenter";
import { CREATE_USEDITEM_QUESTION } from "./CommentWrite.queries";


export default function CommentWrite() {

  const router = useRouter();
  const [contents, setContents] = useState("");

  const [createUseditemQuestion] = useMutation<
    Pick<IMutation, "createUseditemQuestion">,
    IMutationCreateUseditemQuestionArgs
  >(CREATE_USEDITEM_QUESTION);

  
  const onChangeContents = (event) => {
    setContents(event.target.value);
  };

  const onClickWrite = async () => {
    if (typeof router.query._id !== "string") return;

    try {
      await createUseditemQuestion({
        variables: {
          createUseditemQuestionInput: {
            contents,
          },
          useditemId: router.query._id,
        },
        refetchQueries: [
          {
            query: FETCH_USEDITEM_QUESTIONS,
            variables: { useditemId: router.query._id },
          },
        ],
      });
    } 
      catch (error) {
      if (error instanceof Error) alert(error.message);
    }
    setContents("");
  };

  
  return (
    <CommentWriteUI
     
      onChangeContents={onChangeContents}
      onClickWrite={onClickWrite}
      contents={contents}

    />
  );
}
