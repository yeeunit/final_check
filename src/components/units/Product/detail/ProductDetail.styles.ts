import { CloseOutlined, EditOutlined } from "@ant-design/icons";

import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 1372px;
  height: 1772px;
  display: flex;
  flex-direction: column;
  margin: 50px 150px;
  /* border: 1px solid red; */
`;

export const TopWrapper = styled.div`
  width: 1372px;
  height: 480px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const ImageBox  = styled.div`
  width: 480px;
  height: 480px;
  background: #A0A0A0;
`
export const Image = styled.img`
width: 480px;
  height: 480px;
`;

export const ItemBox= styled.div`
  height: 480px;
  width: 821px;   

  /* border: 1px solid red; */
`

export const NameWrapper = styled.div`
  padding-bottom: 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
export const Name = styled.span`
  font-weight: 700;
  font-size: 24px;
`
export const Price = styled.span`
  font-weight: 500;
  font-size: 40px;
`
export const Line1 = styled.div`
  width: 821px;
  height: 0px;
  margin-top: 20px;
  background-color: #555555;
  border: 2px solid #555555;
`
export const Remarks = styled.div`
  width: 801px;
  height: 130px;
  font-weight: 400;
  font-size: 20px;
  padding: 30px 10px;
`
export const TagsWrapper = styled.div`
  width: 821px;
  height: 60px;
  display: flex;
  flex-direction: row;
`
export const Tags = styled.div`
  width: 100px;
  height: 30px;
  background: #FFE004;  
  border-radius: 10px;
  text-align: center;
  line-height: 30px;
  margin-right: 10px;
`
export const Line2 = styled.hr`
  width: 820px;
  height: 0px;
  border: 1px solid #C0C0C0;
  margin-bottom: 30px;
`

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  
`

export const LikeBtn = styled.button`
  width: 152px;
  height: 100px;
  background: #C9C9C9;;
  color: white;
  border: none;
  font-weight: 700;
  font-size: 30px;
  cursor: pointer;
  /* a:visited { color: white; } */
  :hover { color : #FFE004;}
  a:visited { color: white; }

`;


export const BasketBtn = styled.button`
  width: 312px;
  height: 100px;
  background: #A0A0A0;
  color: white;
  border: none;
  cursor: pointer;
  font-weight: 700;
  font-size: 30px;
  a { color: white; }
  a:hover { color : #FFE004;}

`;

export const BuyBtn = styled.button`
  width: 312px;
  height: 100px;
  background: black;
  color: white;
  border: none;
  font-weight: 700;
  font-size: 30px;
  cursor: pointer;
  a:visited { color: white; }
  a:hover { color : #FFE004;}

`;


export const BottomWrapper = styled.div`
    width: 1372px;
    height: 580px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-top: 20px;
`

export const LeftBox = styled.div`
  width: 950px;
  height: 1150px;
  border-right: 1px solid #555555;
`
export const Title = styled.div`
  font-weight: 700;
  font-size: 32px;
  padding-top: 60px;
` 

export const Line3 = styled.div`
  width: 925px;
  height: 0px;
  background-color: #555555;
  border: 2px solid #555555;
  margin: 20px 0;
`

export const Contents = styled.div`
  width: 916px;
  height: 130px;
  padding: 10px;
  font-weight: 400;
  font-size: 20px;
`

export const MapTitle = styled.div`
font-weight: 500;
font-size: 24px;
  padding: 10px 0;
`
export const Map = styled.div`
  width: 860px;
  height: 448px;
  background-color: #eee;
`

export const RightBox = styled.div`
  width: 390px;
  height: 1170px;

`
export const Line4 = styled.div`
  width: 385px;
  height: 0px;
  background-color: #555555;
  border: 2px solid #555555;
  margin: 20px 0;
`
export const IMG = styled.img`
  width: 75px;
  height: 75px;
  margin-right: 20px;
`
export const UsernameBox = styled.div`
  width: 385px;
  height: 100px;
  padding: 0 0 20px 20px ;
  border-bottom: 1px solid #555555;
  display: flex;
  flex-direction: row;
`
export const Username = styled.div`
  font-weight: 400;
  font-size: 32px;
  padding-top: 15px;
`

export const Line5 = styled.div`
  width: 385px;
  height: 0px;
  margin: 20px 0;
  background-color: #555555;
  border: 2px solid #555555;
`



// 댓글

export const CommentWriteBox = styled.div`
  width: 379px;
  height: 147px;
  background: #E9E9E9;
  margin-top: 30px;
`
export const CommentBtn = styled.button`
  width: 116px;
  height: 42px;
  background: #FFE004;
  font-weight: 700;
  font-size: 20px;
  text-align: center;
  line-height: 40px;
  border: none;
  float: right;
  margin: 10px 10px 20px 0;
`

export const CommentBox = styled.div`
  margin-top: 50px;
  padding: 10px;
  width: 379px;
  height: 100px;
  /* background: #eee; */
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const OneTwoThee = styled.div`
  /* border: 1px solid red; */
  display: flex;
  flex-direction: row;

`

export const CommentUserBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const CommentImg = styled.img`
  width: 50px;
  height: 50px;
  margin: 10px 15px 0 0;
`

export const CommentTextBox = styled.div`
  font-weight: 400;
  font-size: 24px;
  background-color: #eee;
  padding: 10px;
  margin-bottom: 10px;
`

export const BtnWrap = styled.div`

  float: right;
`
export const EditOut = styled(EditOutlined)`
  line-height: 50px;
  font-size: 20px;

`
export const CloseOut = styled(CloseOutlined)`
  font-size: 20px;
  line-height: 50px;
`

export const CommentName = styled.div`
  font-weight: 400;
  font-size: 24px;
`

export const CancelBtn = styled.button`
  width: 116px;
  height: 42px;
  background: white;
  font-weight: 700;
  font-size: 20px;
  text-align: center;
  line-height: 40px;
  margin: 5px;
  cursor: pointer;
  a {
    color: black;
  };
`

export const ModifyBtn = styled.button`
  width: 116px;
  height: 42px;
  background: #FFE004;
  font-weight: 700;
  font-size: 20px;
  text-align: center;
  line-height: 40px;
  border: none;
  margin: 5px;
  cursor: pointer;
`





