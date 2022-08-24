// 새글작성하기

import { useState } from "react";
import { withAuth } from "../../../src/components/commons/hocs/withAuth";
import ProductWrite from "../../../src/components/units/Product/write/ProductWrite.container";


function ProcutcWritePage(){

    const [isEdit, setEdit] = useState(false)
    return <ProductWrite isEdit={isEdit} />
    
}

export default withAuth(ProcutcWritePage)