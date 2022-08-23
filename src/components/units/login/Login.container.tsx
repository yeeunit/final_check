import { useApolloClient, useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import { useRecoilState } from "recoil";
import { accessTokenState, userInfoState } from "../../../commons/store";
import { IMutation, IMutationLoginUserArgs, IQuery } from "../../../commons/types/generated/types";
import LoginUI from "./Login.presenter";
import { FETCH_USER_LOGGED_IN, LOGIN_USER } from "./Login.queries";


export default function Login(){

    const [accessToken, setAccessToken] = useRecoilState(accessTokenState)
    const [userInfo, setUserInfo] = useRecoilState(userInfoState);
    const client = useApolloClient();

    const router = useRouter()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    
    const [emailError, setEmailError] = useState("")
    const [passwordError, setPasswordError] = useState("")

    const {data} = useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGED_IN)
    console.log(data)

    const [loginUser] = useMutation<Pick<IMutation, "loginUser">, IMutationLoginUserArgs>(LOGIN_USER)

    const onChangeEmail = (event: ChangeEvent<HTMLInputElement>) => { setEmail(event.target.value) }
    
    const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => { setPassword(event.target.value)}

    const onClickLogin = async () => {
        const result = await loginUser({
            variables: { email, password }
        })

        
        if(email.includes("@") === false){
            // alert("이메일이 올바르지 않습니다!! @가 없음!!")
            setEmailError("이메일 아이디를 @까지 정확하게 입력해주세요")}

        if(!password){
          setPasswordError("영문+숫자 조합 8-16자리의 비밀번호를 입력해주세요.")
        }

        const accessToken = result.data?.loginUser.accessToken
        console.log(accessToken)
         if (!accessToken){
             alert("로그인 실패")
             return;
         }

         const resultUserInfo = await client.query({
            query: FETCH_USER_LOGGED_IN,
            context: {
              headers: {
                Authorization: `Bearer ${accessToken}`,
              },
            },
          });
          const userInfo = resultUserInfo.data?.fetchUserLoggedIn; // { name: 철수, email: a@a.com }


         setAccessToken(accessToken)
         setUserInfo(userInfo);

         localStorage.setItem("accessToken", accessToken) 
         localStorage.setItem("userInfo", JSON.stringify(userInfo));

         alert(`${data?.fetchUserLoggedIn.name}님 환영합니다!`)
         router.push("../../../../../products/new")
      }
        

    return(
        <LoginUI 
          emailError ={emailError}
          passwordError={passwordError}
          onChangeEmail = {onChangeEmail}
          onChangePassword = {onChangePassword}
          onClickLogin = {onClickLogin}
         />
    )

}

// export default withAuth( Login )