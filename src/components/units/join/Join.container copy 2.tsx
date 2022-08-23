// import { useMutation } from "@apollo/client";
// import { useRouter } from "next/router";
// import { useState } from "react";
// import { IMutation, IMutationCreateUserArgs } from "../../../commons/types/generated/types";
// import JoinUI from "./Join.presenter";
// import { CREATE_USER } from "./Join.queries";

// export default function Join(){

//     const router = useRouter()

//     const [email, setEmail] = useState("")
//     const [password, setPassword] = useState("")
//     const [password2, setPassword2] = useState("")
//     const [name, setName] = useState("")

//     const [createUser] = useMutation<
//     Pick<IMutation, "createUser">,
//     IMutationCreateUserArgs>(CREATE_USER);


//     function onChangeEmail(event){
//         setEmail(event.target.value)
//     }

//     function onChangePassword(event){
//         setPassword(event.target.value)
//     }
//     function onChangePassword2(event){
//         setPassword2(event.target.value)
//     }

//     function onChangeName(event){
//         setName(event.target.value)
//       }

//       const onClickJoin = async () => {
//         console.log("가입?")

//         const result = await createUser({
//             variables: { 
//                 createUserInput:{
//                 email, password, name }
//             },
//           });
//           console.log("가입됐음?")

 
       
//         if (!email) {
//             alert("이메일이 입력되지 않았습니다.")
//             return;
//         }
//         if(email.includes("@") === false){
//             alert("이메일 형식이 올바르지 않습니다 @를 넣어주세요!")
//             return;
//         } 
//         if (!password) {
//             alert("비밀번호가 입력되지 않았습니다.");
//             return;
//         }
//         // if (password.maches(/[^A-Za-z0-9$]/gi) === false) {
//         //     alert("비밀번호가 입력되지 않았습니다.");
//         //     return;
//         // }
//         if (password !== password2) {
//             alert("비밀번호가 일치하지 않습니다.");
//             return;
//         }
//         if (!name) {
//             alert("이름이 입력되지 않았습니다.");
//             return;
//         }
      
      
//       else {
//         console.log("성공")

//           alert("회원가입을 축하합니다!!!")
//           router.push("/products/login")
//       }
//     }


//     return(
//         <>
//             <JoinUI 
//             onChangeEmail={onChangeEmail}
//             onChangePassword={onChangePassword}
//             onChangeName={onChangeName}
//             onClickJoin={onClickJoin}
//             />
//         </>
//     )
// }