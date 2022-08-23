import styled from "@emotion/styled";

export const Header = styled.div`
  width: 1920px;
  height: 100px;
  background: #000000;
  margin-bottom: 100px;
  padding-left: 70px;
  padding-top: 25px;
`;

export const Wrapper = styled.div`
  width: 1200px;
  display: flex;
  flex-direction: column;
  margin: 50px 150px;
  border: 1px solid #ccc;
  padding: 100px;
`;


export const Title = styled.span`
font-weight: 700;
font-size: 50px;
margin-bottom: 30px;
margin-right: 30px;
`

export const SignUp = styled.span`
  font-weight: 400;
    font-size: 32px;

`

export const Line = styled.div`
width: 1003px;
height: 0px;
border: 1px solid #C9C9C9;
margin-top: 20px;
margin-bottom: 80px;
`

export const Lable = styled.div`
font-weight: 400;
font-size: 24px;

`

export const InputWrapper = styled.div`
    display: flex;
    flex-direction: row;   
    justify-content: space-between;
    margin: 20px 0;

`

export const Input = styled.input`
width: 787px;
height: 64px;
background: #F6F6F6;
border: 1px solid #CCCCCC;
border-radius: 5px;
padding-left: 20px;
`

export const BtnWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 40px 0;
`


export const JoinBtn = styled.button`
width: 330px;
height: 70px;
background: #FFE004;
cursor: pointer;
font-weight: 500;
font-size: 20px;
text-align: center;
line-height: 70px;
margin: 10px;
border: none;
`

export const CancelBtn = styled.div`
width: 330px;
height: 70px;
background: black;
color: #fff;
cursor: pointer;
font-weight: 500;
font-size: 20px;
text-align: center;
line-height: 70px;
margin: 10px;
a{
  color: white;
}
`

export const LinkWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`

export const Text = styled.span`
font-weight: 400;
font-size: 18px;
line-height: 100%;
color: #888888;
`
export const Login = styled.span`
font-weight: 500;
font-size: 18px;
text-decoration: underline;
cursor: pointer;

`