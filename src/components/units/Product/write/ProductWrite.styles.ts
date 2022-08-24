import styled from "@emotion/styled";
import { Modal } from "antd";
import DaumPostcode from "react-daum-postcode";


export const aaa = styled.div` ` 


export const Wrapper = styled.div`
    width: 1372px;
    display: flex;
    flex-direction: column;
    /* padding: 40px 0; */
    margin: 150px;
    background-color: white;
    /* border: 1px solid #eee; */

`;

export const Line = styled.div`
    width: 1372px;
    height: 0px;
    border: 3px solid #555555;
    margin-bottom: 40px;
`
export const Title = styled.div`
    font-weight: 700;
    font-size: 40px;
    padding-bottom: 40px;
    
` 

export const InputWrapper = styled.div`
    width: 1372px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-bottom: 40px;
`


export const Lable = styled.div`
    right: 0;
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
 ` 

export const Input = styled.input`
    width: 1117px;
    height: 56px;
    background: #E9E9E9;
    border: none;
    padding-left: 16px;

`;

export const MapWrapper = styled.div`
    width: 1372px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 30px;

`

export const AddressWrapper = styled.div`
    display: flex;
    flex-direction: column;

`
export const ZipcodeWrapper = styled.div`
  display: flex;
  flex-direction: row;
  float: left;
`;
export const Zipcode = styled.input`
  width: 77px;
  height: 52px;
  padding-left: 16px;
  border: 1px solid #bdbdbd;
  color: #BDBDBD;
  margin-right: 20px;
`;

export const AddressBtn = styled.div`
    width: 124px;
    height: 51px;
    background: #000000;
    margin-bottom: 33px;
    line-height: 50px;
    text-align: center;

  cursor: pointer;
  color: white;
`;

export const AddressInput = styled.input`
    width: 962px;
    height: 56px;
    background: #E9E9E9;
    border: none;
    padding-left: 16px;
    margin-bottom: 33px;
`;


export const ImageWrapper = styled.div`
  width: 800px;
  padding: 40px 0;
`;

export const UploadButton = styled.div`
  width: 180px;
  height: 180px;
  background-color: #bdbdbd;
  margin-right: 24px;
  outline: none;
  border: none;
  cursor: pointer;
`;


export const BottomWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`

export const CancelBtn = styled.button`
    width: 195px;
    height: 77px;
    background: #FFE004;
    border: none;
    margin: 10px;
  cursor: pointer;
`;


export const RegisterBtn = styled.button`
    width: 195px;
    height: 77px;
    background: black;
    border: none;
    color: white;
    margin: 10px;

  cursor: pointer;
`;


export const Error = styled.div`
  padding-top: 10px;
  font-size: 14px;
  color: red;
`;

export const AddressModal = styled(Modal)`
`;

export const AddressSearchInput = styled(DaumPostcode)`
`;
