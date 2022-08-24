// ProductList 리스트 컨테이너

import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { MouseEvent } from "react";
import { useRecoilState } from "recoil";
import { WatchActiveState } from "../../../../commons/store";
import { IQuery, IQueryFetchUseditemsArgs } from "../../../../commons/types/generated/types";
import ProductListUI from "./ProductList.presenter";
import { FETCH_USEDITEMS } from "./ProductList.queries";




export default function ProductList(){

  const router = useRouter();
  const [isActive, setIsActive] = useRecoilState(WatchActiveState)


  const { data, fetchMore } = useQuery<
  Pick<IQuery, "fetchUseditems">, 
  IQueryFetchUseditemsArgs
  >(FETCH_USEDITEMS);

  

  const onFetchMore = () => {
    if(!data) return; 

    fetchMore({

        // 마지막 페이지 
        variables: { page: Math.ceil(data?.fetchUseditems.length / 10) +1 },

        updateQuery: (prev, { fetchMoreResult }) => {
            if(!fetchMoreResult.fetchUseditems)
                return {fetchUseditems: [...prev.fetchUseditems]}
        
            return {
              fetchUseditems: [...prev.fetchUseditems, ...fetchMoreResult?.fetchUseditems]
              // 기존꺼랑 추가로 받은 10개 스프레드 합치기 
            }
        }
    })
  }


  const onClickMoveToDetail = (el: any) => (event: MouseEvent<HTMLDivElement>) => {

    router.push(`/products/${el._id}`)
    
    const watchList = JSON.parse(sessionStorage.getItem("watchList") || "[]")

    const temp = watchList.filter((data: any) => data._id === el._id)
        if(temp.length === 1) {
            return
        }
        setIsActive((prev) => !prev)
        watchList.push(el)
        sessionStorage.setItem("watchList", JSON.stringify(watchList));

  };

  

    return(

        <ProductListUI
        data = {data}
        onClickMoveToDetail = {onClickMoveToDetail}
        onFetchMore = {onFetchMore}
        />
      )
}