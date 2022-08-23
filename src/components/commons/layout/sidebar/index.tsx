import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { WatchActiveState } from "../../../../commons/store";


const Wrapper = styled.div`
    position: fixed;
    width: 155px;
    height: 373px;
    left: 1685px;
    top: 219px;
    background: #FFFFFF;
    border: 1px solid #000000;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 20px;
`;

const Text = styled.div`

    font-weight: 500;
    font-size: 16px;
    margin-bottom: 15px;
`

const Image = styled.div`
    width: 85px;
    height: 85px;
    left: 1721px;
    top: 285px;
    background: #C4C4C4;
    margin-bottom: 10px;
    cursor: pointer;
`


export default function LayoutSidebar() {


    const [isActive, setIsActive] = useRecoilState(WatchActiveState)
    const [watchList, setWatchList] = useState([])

    useEffect(() => {
        const result = JSON.parse(sessionStorage.getItem("watchList") || "[]")
        setWatchList(result)
    }, [isActive])


    return(
        <>     
        <Wrapper> 
            <Text>최근 본 상품</Text>

            { watchList.map((el) => (
                el.images?( <Image key = { el._id }>
                    <img src = { `https://storage.googleapis.com/${el.images[0]}` } alt = "이미지" />
                </Image>):( <Image></Image>)
                   
                )) }

           
            <Image></Image> 
            <Image></Image>

        </Wrapper>
        </>    
    )
}

