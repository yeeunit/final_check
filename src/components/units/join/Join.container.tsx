import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { useApolloClient, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { IMutation, IMutationCreateUserArgs } from "../../../commons/types/generated/types";
import { CREATE_USER } from "./Join.queries";
import { useForm } from "react-hook-form";
import JoinUI from "./Join.presenter";
import { message } from "antd";


const schemaLogin = yup.object ({
    email: yup.string().email("이메일 아이디를 @까지 정확하게 입력해주세요").required("이메일을 입력해주세요"),
    password: yup.string().matches(/^(?=.*[a-zA-Z])(?=.*[0-9]).{8,16}$/, "영문 + 숫자 조합 8~16자리의 비밀번호를 입력해주세요").required("비밀번호를 입력해주세요"),
    passwordRe: yup.string().oneOf([yup.ref('password')], '비밀번호가 일치하지 않습니다.').required("비밀번호를 다시 입력해주세요") ,
    name: yup.string().required("ex)홍길동")
})


export default function Join(){

    const router = useRouter()
    const client = useApolloClient();

    const { register, handleSubmit, formState } = useForm({
        resolver: yupResolver(schemaLogin),
        mode: "onChange"
    })

    const [createUser] = useMutation<
    Pick<IMutation, "createUser">,
    IMutationCreateUserArgs>(CREATE_USER);


      const onClickJoin = async (data) => {
        try {
            await createUser({
            variables: { 
                createUserInput:{
                email: data.email,
                password: data.password,
                name: data.name 
                }
            }
        });
        console.log("성공")
        alert("회원가입을 축하합니다!!!")
        router.push('/products/login')
        message.success("회원가입에 성공하셨습니다!! 로그인을 해주세요")

    } catch(error) {
        alert("실패!")

        message.error("회원가입 실패")
    }
}


    return(
        <>
            <JoinUI
            onClickJoin = { onClickJoin }
            handleSubmit = { handleSubmit }
            register = { register } 
            formState = { formState }   />
        </>
    )
}