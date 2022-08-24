// 게시글 수정하기

import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { IQuery, IQueryFetchUseditemArgs } from "../../../../src/commons/types/generated/types";
import { withAuth } from "../../../../src/components/commons/hocs/withAuth";
import ProductWrite from "../../../../src/components/units/Product/write/ProductWrite.container";

const FETCH_USED_ITEM = gql`
    query fetchUseditem($useditemId: ID!) {
        fetchUseditem(useditemId: $useditemId) {
            _id
            name
            remarks
            contents
            price
            tags
            images
            useditemAddress {
                zipcode
                address
                addressDetail
                lat
                lng
            }
        }
    }
`

function EditPage() {

  const router = useRouter();
  const { data } = useQuery<Pick<IQuery, "fetchUseditem">, IQueryFetchUseditemArgs>(
    FETCH_USED_ITEM,
    { variables: { 
        useditemId: router.query.detail as string}
    }
  );

  return <ProductWrite isEdit={true} data={data} />;
}


export default withAuth(EditPage)