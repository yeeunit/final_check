// 새글작성하기

import { useState } from "react";
import ProductWrite from "../../../src/components/units/Product/write/ProductWrite.container";


export default function ProcutcWritePage(){

    const [isEdit, setEdit] = useState(false)
    return <ProductWrite isEdit={isEdit} />
}