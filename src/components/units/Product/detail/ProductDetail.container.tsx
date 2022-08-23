import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { IQuery, IQueryFetchUseditemArgs } from "../../../../commons/types/generated/types";
import { withAuth } from "../../../commons/hocs/withAuth";
import ProductDetailUI from "./ProductDetail.presenter";
import { FETCH_USEDITEM } from "./ProductDetail.queries";



export default function ProductDetail(){


  const router = useRouter()

  const { data } = useQuery<Pick<IQuery, "fetchUseditem">, IQueryFetchUseditemArgs>(FETCH_USEDITEM, {
    variables: {useditemId: String(router.query._id)}
  })
  // 라우터쩜쿼리쩜 폴더명!!!!!!!!!!!
    console.log(data)
    
    return(

        <ProductDetailUI
        data = {data}
        />
      )
}

//export default withAuth( ProductDetail )

// }