// ProductList 스타일

import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 1372px;
  height: 1772px;
  display: flex;
  flex-direction: column;
  margin: 50px 150px;
  /* border: 1px solid red; */
`;
export const BoxWrapper = styled.div`
  width: 1372px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  cursor: pointer;
`

export const Box = styled.div`
  width: 250px;
  height: 320px;
  background: #fff;
  border: 1px solid #555555;
  display: flex;
  flex-direction: column;
  margin-right: 24px;
  margin-bottom: 24px;
`

export const Image = styled.img`
width: 246px;
height: 219px;
background: #EEEEEE;
`

export const TextBox = styled.div`
padding: 15px;
width: 248px;
`
export const Text = styled.span`
font-weight: 500;
font-size: 16px;
`
export const AlginBox =styled.div`
margin-top: 30px;
display: flex;
flex-direction: row;
justify-content: space-between;

`
export const Time = styled.span`
font-weight: 500;
font-size: 12px;
color: #A9A9A9;
`

