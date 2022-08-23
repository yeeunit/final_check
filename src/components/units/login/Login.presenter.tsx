import Link from "next/link"
import * as P from "./Login.styles"


export default function LoginUI(props){


    return(
        <>
        <P.Header>
            <Link href="/">
            <a><img src="/images/whitelogo1.png" alt="logo"/></a>
            </Link>
        </P.Header>
        
        <P.Wrapper>
        <div>
            <P.Title>로그인</P.Title> 
            <P.EnTitle>Login</P.EnTitle>
            </div>
            <P.Line />


            <P.Input 
                id="id" 
                type="text" 
                placeholder="아이디"
                onChange={props.onChangeEmail} 
            />
                <P.InputError>
                  {props.emailError}  
                  {/* 이메일 아이디를 @까지 정확하게 입력해주세요 */}
                </P.InputError>

            <P.Input 
                id="password" 
                type="password" 
                placeholder="비밀번호" 
                onChange={props.onChangePassword}
            />
                <P.InputError>
                {props.passwordError}
                {/* 영문+숫자 조합 8-16자리의 비밀번호를 입력해주세요. */}
                </P.InputError>

            <P.LoginBtn onClick={props.onClickLogin}>
                로그인</P.LoginBtn>

            <P.LinkWrapper>
            <Link href="/products/join">
                <a><P.Text>아직 계정이 없으신가요?</P.Text> &nbsp;&nbsp;&nbsp;&nbsp;
                <P.Login>회원가입</P.Login></a>
            </Link>
            </P.LinkWrapper>
            
        </P.Wrapper>
        </>
    )

}
