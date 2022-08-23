import styled from "@emotion/styled"
import { Button, Modal } from "antd"
import { useRouter } from "next/router"
import { useState } from "react"
export default function PointModalPage(){

    const router = useRouter()

    const [isModalVisible, setIsModalVisible] = useState(false)
    const [price, setPrice] = useState(100)

    const showModal = () => {
        setIsModalVisible(true)
    }

    const handleOk = () => {
        setIsModalVisible(false)
    }

    const handleCancel = () => {
        setIsModalVisible(false)
    }

    const onChangePrice = (event) =>{
        setPrice(event.target.value)
    }




    const [isHover, setIsHover] = useState(false);

    const handleMouseEnter = () => {
        setIsHover(true);
    };

    const handleMouseLeave = () => {
        setIsHover(false);
    };

    const ButtonStyle = {
        border: 'none',
        color: 'black',
        // borderBottom: isHover ? '1px solid black' : 'white',
        // textDecoration: 'underline'
        // textDecoration: isHover ? '1px solid black' : 'white'

    };

    // const Button = styled(Button)`
    //     border: none;
    // `

    // 버튼스타일 어케줌?

    return (
        <>
        <Button 
            style={ButtonStyle} 
            onClick={showModal}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            > 
            충전
        </Button>

        <Modal 
            title = "충전하실 금액을 선택해 주세요!" 
            visible = {isModalVisible} 
            onOk = {handleOk} 
            onCancel = {handleCancel}>
                
            포인트 선택

            <select  defaultValue = { 0 }
            //  { ...props.register("price") }
             >
                <option>포인트선택</option>
                <option value={100}>100원</option>
                <option value={200}>200원</option>
                <option value={1000}>1000원</option>
            </select>

            <br /><br />
            <button>충전하기</button>

            {/* <button 
            disabled = { !props.isBtnActive } 
            type = "button" 
            onClick = { props.handleSubmit(props.onClickPointSubmit) } 
            isBtnActive = { props.isBtnActive }>
            충전하기</button> */}


        </Modal>
        </>
    )
}