import { gql } from "@apollo/client";

export const CREATE_USEDITEM_QUESTION = gql`
    mutation createUseditemQuestion( $createUseditemQuestionInput: CreateUseditemQuestionInput!
    $useditemId: ID!
    ){
        createUseditemQuestion(
            createUseditemQuestionInput: $createUseditemQuestionInput
            useditemId: $useditemId
        ){
            _id
            contents
            useditem
            user
            createdAt
        }
    }
`

export const FETCH_USEDITEM_QUESTIONS = gql`
    query fetchUseditemQuestions( $page: Int
    $useditemId: ID!
    ){
        fetchUseditemQuestions(
            page: $page
            useditemId: $useditemId
        ){
            _id
            contents
            useditem
            user
            createdAt
        }
    }
`









// export const CREATE_USEDITEM_QUESTION_ANSWER = gql`
//     mutation createUseditemQuestionAnswer( $createUseditemQuestionAnswerInput: CreateUseditemQuestionAnswerInput!
//     $useditemQuestionId: ID!
//     ){
//         createUseditemQuestionAnswer(
//             createUseditemQuestionAnswerInput: $createUseditemQuestionAnswerInput
//             useditemQuestionId: $useditemQuestionId
//         ){
//             _id
//             contents
//             useditemQuestion
//             user
//             createdAt
//         }
//     }
// `


