import { useRouter } from "next/router";
import { useEffect } from "react";

import { Button, Modal, Space } from 'antd';
import React from 'react';



// const App = () => (
//   <Space wrap>
//     <Button onClick={warning}>Warning</Button>
//   </Space>
// );

// export default App;


export const withAuth = (Component) => (props) => {
  const router = useRouter();

  const warning = () => {
    Modal.warning({
      title: 'This is a warning message',
      content: 'some messages...some messages...',
    });
  };

  useEffect(() => {
    if (!localStorage.getItem("accessToken")) {

      // <Space wrap>
      // <Button onClick={warning}>Warning</Button>
      // </Space>
      

      alert("로그인 후 이용 가능합니다!!!");
      router.push("/products/login");
    }
  }, []);

  
  return (
    <>
    <Component {...props} />;

    </>
  )
};

