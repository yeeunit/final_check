import * as P from "./ProductWrite.styles"
// import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";
import Uploads01 from "../../upload/01/Uploads01.container";
import { v4 as uuidv4 } from "uuid";
import Link from "next/link";
import KakaoMap01 from "../../map/01";


export default function ProductWriteUI(props){

    const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });


    return(
        <>

        <P.Wrapper>
    <form onSubmit = { props.handleSubmit(props.onClickSubmit) } >

        {props.isOpen && (
        <P.AddressModal visible={true}>
          <P.AddressSearchInput onComplete={props.onCompleteAddressSearch} />
        </P.AddressModal>
      )}

           <P.Title> {props.isEdit? "상품 수정" : " 상품 등록"}</P.Title>
            <P.Line />

            <P.InputWrapper>
            <P.Lable>상품명</P.Lable>
                <P.Input 
                    type="text" 
                    placeholder="상품명을 적어주세요."
                    { ...props.register("name") }
              />

            </P.InputWrapper>

            <P.InputWrapper>
            <P.Lable>상품요약</P.Lable>
            <P.Input 
                type="text" 
                placeholder="상품요약을 적어주세요." 
                { ...props.register("remarks") }
            />
            </P.InputWrapper>

            <P.InputWrapper>    
            <P.Lable>상품내용</P.Lable>

            <ReactQuill
                style={{width: "1117px", height: "431px", paddingBottom: "40px"}}
                onChange={props.onChangeContents}               
                />

        </P.InputWrapper>

            <P.InputWrapper>
            <P.Lable>판매가격</P.Lable>
            <P.Input  
            type="text" 
            placeholder="가격을 적어주세요." 
            { ...props.register("price") }     
            />
            </P.InputWrapper>


            <P.InputWrapper>
            <P.Lable>태그입력</P.Lable>
            <P.Input  
            
            type="text" 
            placeholder="#태그 #태그 #태그" 
            { ...props.register("tags") }  
            />

            </P.InputWrapper>


            <P.Lable>거래위치</P.Lable>

            <P.MapWrapper>
                <KakaoMap01 data = { props.data } address = { props.address }/>

                <P.AddressWrapper>
                <P.ZipcodeWrapper>
                    <P.Zipcode 
                    placeholder="00000"
                    readOnly
                    value={
                    props.zipcode ||
                    props.data?.fetchUseditems.useditemAddress?.zipcode ||"" }
                    // { ...props.register("address") }  

                    />
                    <P.AddressBtn
                    onClick={props.onClickAddressSearch}>
                        우편번호 검색</P.AddressBtn> 
                </P.ZipcodeWrapper>
                
                <div><P.AddressInput 
                readOnly
                value={
                props.address ||
                props.data?.fetchUseditems.useditemAddress?.address || ""}/>
                </div>
                <div><P.AddressInput 
                onChange={props.onChangeAddressDetail}
                defaultValue={
                  props.data?.fetchUseditems.useditemAddress?.addressDetail || ""
                }/></div>
                </P.AddressWrapper>

            </P.MapWrapper>


            <P.Lable>사진첨부</P.Lable>

            <P.ImageWrapper>
                {props.fileUrls.map((el, index) => (
                <Uploads01
                  key={uuidv4()}
                  index={index}
                  fileUrl={el}
                  onChangeFileUrls={props.onChangeFileUrls}
                />
              ))}

                {/* <P.UploadButton> +<br />upload </P.UploadButton> */}
                
            </P.ImageWrapper>

            <P.Line />

            <P.BottomWrapper>
                <Link href="/products/">
                    <a><P.CancelBtn>취소</P.CancelBtn></a>
                </Link>

                <P.RegisterBtn
                // onClick = {props.handleSubmit(props.onClickCreate)}
                // onClick = {props.isEdit? props.onClickUpdate : props.onClickSubmit}
                // isActive = {props.isEdit? true : props.isActive}
                >
                  { props.isEdit ? "수정하기" : "등록하기" }
                 </P.RegisterBtn>

            </P.BottomWrapper>
        </form>
        </P.Wrapper>

        </>
    )
}