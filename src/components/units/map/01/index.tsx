import { useEffect } from "react"


declare const window: typeof globalThis & {
    kakao: any
}

import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 384px;
  height: 252px;

`;

export default function KakaoMap01(props) {

    useEffect(() => {

        const script = document.createElement("script") 
        script.src =
        "//dapi.kakao.com/v2/maps/sdk.js?appkey=b4231ee4e877b1e937e9152e088001de&autoload=false&libraries=services"
        document.head.appendChild(script) 

        script.onload = () => {

            window.kakao.maps.load(function (){
            const container = document.getElementById('map'); 
            const options = { 
            center: new window.kakao.maps.LatLng(37.485666, 126.904260), // 지도의 중심좌표
            level: 5 // 지도의 확대 레벨
        };
        
            const map = new window.kakao.maps.Map(container, options); 
            console.log(map)

            // 주소-좌표 변환 객체를 생성합니다
            const geocoder = new window.kakao.maps.services.Geocoder();

            // 주소로 좌표를 검색합니다
            geocoder.addressSearch(props.address || props.data?.fetchUseditem.useditemAddress?.address, function(result, status) {

            // 정상적으로 검색이 완료됐으면 
            if (status === window.kakao.maps.services.Status.OK) {
                const coords = new window.kakao.maps.LatLng(
                    result[0].y, result[0].x
                    );

                // 결과값으로 받은 위치를 마커로 표시합니다
                const marker = new window.kakao.maps.Marker({
                    map: map,
                    position: coords

                });

        // 인포윈도우로 장소에 대한 설명을 표시합니다
        // const infowindow = new window.kakao.maps.InfoWindow({
        //     content: '<div style="width:150px;text-align:center;padding:6px 0;">우리회사</div>'
        // });
        // infowindow.open(map, marker);

        // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
        map.setCenter(coords);
    } 
    

              });
        })
        }
    }, [])

    return(
    <>
        <div 
        id="map" 
        style={{ width: "380px", height: "250px", border:"1px solid #aaa" }}
        >
        </div>
    </>
    )
}