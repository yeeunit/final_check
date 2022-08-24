import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { MouseEvent } from "react";
import { useRecoilState } from "recoil";
import { isBucketActiveState } from "../../../../commons/store";
import { IMutation, IMutationCreatePointTransactionOfBuyingAndSellingArgs, IMutationDeleteUseditemArgs, IMutationToggleUseditemPickArgs, IQuery, IQueryFetchUseditemArgs } from "../../../../commons/types/generated/types";
import { FETCH_USED_ITEMS } from "../write/ProductWrite.queries";
import ProductDetailUI from "./ProductDetail.presenter";
import { CREATE_POINT_TRANSACTION_OF_BUYING_AND_SELLING, DELETE_USED_ITEM, FETCH_USEDITEM, TOGGLE_USED_ITEM_PICK } from "./ProductDetail.queries";



export default function ProductDetail(){
  const [isActive, setIsActive] = useRecoilState(isBucketActiveState)


  const router = useRouter()

  const { data } = useQuery<Pick<IQuery, "fetchUseditem">, IQueryFetchUseditemArgs>(FETCH_USEDITEM, {
    variables: {useditemId: String(router.query._id)}
  })
  // 라우터쩜쿼리쩜 폴더명!!!!!!!!!!!
    console.log(data)


    const [deleteUsedItem] = useMutation<Pick<IMutation, "deleteUseditem">, IMutationDeleteUseditemArgs>(DELETE_USED_ITEM)

    const [toggleUsedItemPick] = useMutation<Pick<IMutation, "toggleUseditemPick">, IMutationToggleUseditemPickArgs>(TOGGLE_USED_ITEM_PICK)

    const [createPointTransactionOfBuyingAndSelling] = useMutation<Pick<IMutation, "createPointTransactionOfBuyingAndSelling">, IMutationCreatePointTransactionOfBuyingAndSellingArgs>(CREATE_POINT_TRANSACTION_OF_BUYING_AND_SELLING)



    const onClickBucket = (el: any) => (event: MouseEvent<HTMLButtonElement>) => {
      const bucketList = JSON.parse(localStorage.getItem("bucketList") || "[]")

      const temp = bucketList.filter((data: any) => data.fetchUseditem._id === el.fetchUseditem._id)
      if(temp.length === 1) {
          return
      }
      setIsActive((prev) => !prev)
      bucketList.push(el)
      localStorage.setItem("bucketList", JSON.stringify(bucketList))
  }


    const onClickUpdate = () => {
      router.push(`/products/${router.query._id}/edit`)
  }

    const onClickDelete = async () => {
      try {
          await deleteUsedItem({
              variables: {
                  useditemId: router.query.detail as string
              },
              refetchQueries: [
                  {
                      query: FETCH_USED_ITEMS
                  }
              ]
          })
          router.push('/')
          alert("삭제 성공")
      } catch(error) {
        alert("삭제 실패")
      }
  
    }

    const onClickPick = async () => {
      try {
          await toggleUsedItemPick({
              variables: {
                  useditemId: router.query.detail as string
              },
              refetchQueries: [
                  {
                      query: FETCH_USED_ITEMS,
                      variables: {
                          useditemId: router.query.detail as string
                      }
                  }
              ]
          })
      } catch(error) {
          alert("찜실패")
      }
  }

    return(

        <ProductDetailUI
            data = {data}
            // dataUsedItemQuestions = { dataUsedItemQuestions }
          useditemId = { router.query.detail as string }
          // pickCount = { pickCount }
          // userInfo = { userInfo }
          onClickBucket = { onClickBucket }
          onClickPick = { onClickPick }
          onClickUpdate = { onClickUpdate }
          onClickDelete = { onClickDelete }
          // onClickBuy = { onClickBuy }
          // onClickCommentCreate = { onClickCommentCreate }
          // handleSubmit = { handleSubmit }
          // register = { register } 
        />
      )
}
