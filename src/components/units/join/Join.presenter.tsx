import Link from "next/link"
import * as P from "./Join.styles"


export default function JoinUI(props){



    return(
        <>
        <P.Header>
            <Link href="/">
            <a><img src="/images/whitelogo1.png" alt="logo"/></a>
            </Link>
        </P.Header>

         <P.Wrapper>
            <div>
            <P.Title>회원가입</P.Title> 
            <P.SignUp>Sign Up</P.SignUp>
            </div>
            <P.Line />

            <P.InputWrapper>
            <P.Lable>아이디</P.Lable>
            <P.Input 
            type="text" 
            placeholder="이메일 아이디를 @까지 정확하게 입력하세요" 
            { ...props.register("email") } 
            />
            </P.InputWrapper>
            <P.Error>{ props.formState.errors.email?.message }</P.Error>

            <P.InputWrapper>
            <P.Lable>비밀번호</P.Lable>
            <P.Input  
            type="password" 
            placeholder="영문+숫자 조합 8-16자리를 입력해주세요." 
            { ...props.register("password") } 
            />
            </P.InputWrapper>
            <P.Error>{ props.formState.errors.password?.message }</P.Error>

            <P.InputWrapper>
            <P.Lable>비밀번호 확인</P.Lable>
            <P.Input 
            type="password" 
            placeholder="영문+숫자 조합 8-16자리를 입력해주세요."
            { ...props.register("passwordRe") } 
            />
            </P.InputWrapper>
            <P.Error>{ props.formState.errors.passwordRe?.message }</P.Error>


            <P.InputWrapper>
            <P.Lable>이름</P.Lable>
            <P.Input 
            type="text" 
            placeholder="Ex) 홍길동" 
            { ...props.register("name") }
            />
            </P.InputWrapper>
            <P.Error>{ props.formState.errors.name?.message }</P.Error>


            <P.BtnWrapper>
                <P.JoinBtn  type = "button" onClick={ props.handleSubmit(props.onClickJoin) }> 회원가입하기</P.JoinBtn>
                
                <Link href="/">
                    <P.CancelBtn><a>취소</a></P.CancelBtn>
                </Link>

            </P.BtnWrapper>

            <P.LinkWrapper>
            <P.Text>이미 아이디가 있으신가요?</P.Text>
            &nbsp;&nbsp;&nbsp;&nbsp;

            <Link href="/products/login">
            <a><P.Login>로그인</P.Login></a>
            </Link>
            </P.LinkWrapper>
            
         </P.Wrapper>
        
        </>
    )
}

