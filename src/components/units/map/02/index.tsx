import { useEffect } from "react"


declare const window: typeof globalThis & {
    kakao: any
}

import styled from "@emotion/styled";

export const Wrapper = styled.div`
  /* width: 384px;
  height: 252px; */

`;

export default function KakaoMap02(props) {

    useEffect(() => {

        const script = document.createElement("script") // <script></script>
        script.src =
        "//dapi.kakao.com/v2/maps/sdk.js?appkey=b4231ee4e877b1e937e9152e088001de&libraries=services&autoload=false"
        document.head.appendChild(script) 

        script.onload = () => {
            window.kakao.maps.load(() => {
                const container = document.getElementById("map");
                const options = {
                    center: new window.kakao.maps.LatLng(37.485666, 126.904260),
                    level: 5,
                };
                const map = new window.kakao.maps.Map(container, options);

                const geocoder = new window.kakao.maps.services.Geocoder();
                
                console.log(props.address)
                geocoder.addressSearch(props.address || "",
                    // props.data?.fetchUseditem.useditemAddress?.address, 
                    function (result: any, status: any) {
                    if (status === window.kakao.maps.services.Status.OK) {
                        const coords = new window.kakao.maps.LatLng(
                          result[0].y,
                          result[0].x
                    );
                    const imageSrc = "/image/map.png"; // 마커이미지의 주소입니다
                    const imageSize = new window.kakao.maps.Size(55, 55); // 마커이미지의 크기입니다
                    const imageOption = {
                        offset: new window.kakao.maps.Point(27, 69),
                    }; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.

                    // 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
                    const markerImage = new window.kakao.maps.MarkerImage(
                        imageSrc,
                        imageSize,
                        imageOption
                    );

                    // 마커를 생성합니다
                    const marker = new window.kakao.maps.Marker({
                        map: map,
                        position: coords,
                    });

                    // // 인포윈도우로 장소에 대한 설명을 표시합니다
                    // const infowindow = new window.kakao.maps.InfoWindow({
                    //     content:
                    //         '<div style="width:150px;text-align:center;padding:6px 0;">거래 장소</div>',
                    // });
                    // infowindow.open(map, marker);

                    map.setCenter(coords);
                }
            }
          );
        });
      };
    }, [props.address])

    return(
    <>
        <div 
        id="map" 
        style={{ width: "860px", height: "488px" }}
        >
        </div>
    </>
    )
}