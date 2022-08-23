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
  width: 742px;
  height: 802px;
  display: flex;
  flex-direction: column;
  margin: 50px 150px;
  border: 1px solid #ccc;
  padding: 70px;
`;

export const Title = styled.span`
  font-weight: 700;
  font-size: 50px;
  margin-right: 20px;

`

export const EnTitle = styled.span`
  font-weight: 400;
  font-size: 32px;

`

export const Line = styled.div`
width: 597px;
height: 0px;
border: 1px solid #C9C9C9;
margin-top: 20px;
margin-bottom: 80px;
`

export const Input = styled.input`
width: 600px;
height: 77.48px;
background: #F6F6F6;
border: 1px solid #CCCCCC;
border-radius: 5px;
padding-left: 20px;
margin-bottom: 20px;

`

export const InputError = styled.div`
font-weight: 400;
font-size: 16px;
color: #EF3030;
margin-bottom: 40px;
padding-left: 10px;

`
export const LoginBtn = styled.div`
  cursor: pointer;
  width: 600px;
  height: 88px;

  font-weight: 500;
  font-size: 20px;
  background: #FFE004;
  border-radius: 10px;
  text-align: center;
  line-height: 88px;
  margin: 40px 0;
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
  cursor: pointer;
`
export const Login = styled.span`
  font-weight: 500;
  font-size: 18px;
  text-decoration: underline;
  cursor: pointer;
`