// 게시글 디테일보기

import { withAuth } from "../../../src/components/commons/hocs/withAuth";
import ProductDetail from "../../../src/components/units/Product/detail/ProductDetail.container";


function ProductDetailPage() {
  return (
      <ProductDetail />
  )
}

export default withAuth(ProductDetailPage)