// localhost:3000을 통해 접속하였을 때, 상품리스트가 나열된 메인페이지가 표시

import ProductList from "../src/components/units/Product/list/ProductList.container";

export default function ProductListPage() {

return(
    <>  
    <ProductList />
    </>
    )
}