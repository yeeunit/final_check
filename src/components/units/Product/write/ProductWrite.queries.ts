import { gql } from "@apollo/client";

export const CREATE_USED_ITEM = gql`
  mutation createUseditem($createUseditemInput: CreateUseditemInput!){
    createUseditem(createUseditemInput: $createUseditemInput){
      _id
      name
      remarks
      contents
      price
      # tags
      images
    }
  } 
`


export const FETCH_USED_ITEMS = gql`
    query fetchUseditems($page: Int) {
        fetchUseditems(page: $page) {
            _id
            name
            images
            price
            createdAt
        }
    }
`


export const UPDATE_USED_ITEM = gql`
  mutation updateUseditem($updateUseditemInput: UpdateUseditemInput!,$useditemId: ID!) 
  {
    updateUseditem(updateUseditemInput: $updateUseditemInput,useditemId:$useditemId ) 
    {
      _id
      name
      remarks
      contents
      price
      tags
      images
    }
  }
`;

export const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      _id
      url
      size
      createdAt
    }
  }
`;