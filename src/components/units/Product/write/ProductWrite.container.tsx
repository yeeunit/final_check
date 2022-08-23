// ProductWrite 콘테이너

import { useForm } from "react-hook-form"

import { useRouter } from "next/router";
import ProductWriteUI from "./ProductWrite.presenter";
import { useEffect, useState } from "react";
import { useMutation } from "@apollo/client";
import { IMutation, IMutationCreateUseditemArgs, IMutationUpdateUseditemArgs } from "../../../../commons/types/generated/types";
import { CREATE_USED_ITEM, FETCH_USED_ITEMS, UPDATE_USED_ITEM } from "./ProductWrite.queries";
import { message } from "antd";


// declare const window: typeof globalThis & { kakao: any }


export default function ProductWrite(props){


    const { register, handleSubmit,  setValue, trigger, reset, formState } = useForm({ mode: "onChange" })

    const [isOpen, setIsOpen] = useState(false);
    const [fileUrls, setFileUrls] = useState(["", ""]);

    const router = useRouter();
    const [isActive, setIsActive] = useState(false);

    const [zipcode, setZipcode] = useState("");
    const [address, setAddress] = useState("");
    const [addressDetail, setAddressDetail] = useState("");
    // const [isAddressOpen, setIsAddressOpen] = useState(false)



    const [createUseditem] = useMutation<Pick<IMutation, "createUseditem">,IMutationCreateUseditemArgs>(CREATE_USED_ITEM)
    const[updateUseditem] = useMutation<Pick<IMutation,"updateUseditem">,IMutationUpdateUseditemArgs>(UPDATE_USED_ITEM)


    const onChangeContents = (value: string) => {
      console.log(value)

      // register로 등록하지 않고 강제로 값을 넣어줌
      setValue("contents", value === "<p><br></p>" ? "" : value)
      // onChange 됐음을 리액트훅폼에 강제로 알려줌
      trigger("contents")
      }


      // 업로드 파일
      const onChangeFileUrls = (fileUrl: string, index: number) => {
        const newFileUrls = [...fileUrls];
        newFileUrls[index] = fileUrl;
        setFileUrls(newFileUrls);
      };
    
      // useEffect(() => {
      //   if(props.data !== undefined) {
      //     reset({
      //         name: props.data.fetchUseditem.name,
      //         price: props.data.fetchUseditem.price,
      //         remarks: props.data.fetchUseditem.remarks,
      //         contents: props.data.fetchUseditem.contents,
      //         tags: props.data.fetchUseditem.tags?.join(),
      //         // useditemAddress: {
      //         //     zipcode: props.fetchUseditem.useditemAddress?.zipcode,
      //         //     address: props.data.fetchUseditem.useditemAddress?.address,
      //         //     addressDetail: props.data.fetchUseditem.useditemAddress?.addressDetail
      //         // }
      //     })

      //   if (props.data?.fetchUseditem.images?.length) {
      //               setFileUrls([...props.data?.fetchUseditem.images]);
      //   }
      // }
      // }, [props.data]);
    
    
      const onClickAddressSearch = () => {
        setIsOpen(true);
      };
      const onCompleteAddressSearch = (data: any) => {
        setAddress(data.address);
        setZipcode(data.zonecode);
        setIsOpen(false);
      };


      const onClickSubmit = async (data: any) => {
         
         await createUseditem({

          variables:{
            createUseditemInput: {
              name: data.name,
              remarks: data.remakrs,
              price: Number(data.price),
              contents: data.contents,
              images: [...fileUrls], 
              tags: data.tags?.split(","),
              // useditemAddress: {
              //   zipcode: data.useditemAddress.zipcode,
              //   address: data.useditemAddress.address,
              //   addressDetail: data.useditemAddress.addressDetail,
              // }
            }
          },
          refetchQueries: [
            { query: FETCH_USED_ITEMS }
        ]
      })
        
      alert("성공")
      router.push(`/products/detail/${data.createUseditem._id}`)
    }
    


        const onClickUpdate = async (data) => {
          try {
            const result = await updateUseditem({
                variables: {
                    useditemId: router.query.detail as string,
                    updateUseditemInput: {
                        name: data.name,
                        remarks: data.remarks,
                        contents: data.contents,
                        price: Number(data.price),
                        tags: data.tags.split(","),
                        // useditemAddress: {
                        //     zipcode: data.useditemAddress.zipcode,
                        //     address: data.useditemAddress.address,
                        //     addressDetail: data.useditemAddress.addressDetail,
                        // },
                        images: [...fileUrls],
                    }
                }
            })
            router.push(`/product/${result.data?.updateUseditem._id}`);
            message.success("수정에 성공하였습니다!!")
        } catch(error) {
          if (error instanceof Error) alert(error.message);
        }
        };
      

    return(
        <ProductWriteUI 

        data={props.data}

        fileUrls={fileUrls}

        address={address}
        addressDetail={addressDetail}
        zipcode={zipcode}

        isOpen={isOpen}
        isEdit = {props.isEdit}
        isActive={isActive}

        onChangeContents={onChangeContents}
        onChangeFileUrls={onChangeFileUrls}
       
        onClickAddressSearch={onClickAddressSearch}
        onCompleteAddressSearch={onCompleteAddressSearch}

        onClickSubmit = {onClickSubmit}
        onClickUpdate={onClickUpdate}
        
        register ={ register }
        handleSubmit={handleSubmit}
        formState = {formState}
        />
    )
}

// export default withAuth(ProductWrite)
