// 전체 레이아웃

import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { ReactNode } from "react";
import LayoutBanner from "./banner";
import LayoutHeader from "./header";
import LayoutSidebar from "./sidebar";


const Body = styled.div`
    width: 1920px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const HIDDEN_HEADER = [
  "/products/login",
  "/products/join"
]

const HIDDEN_BANNERS = [
  "/products/login",
  "/products/join"
]

const HIDDEN_SIDEBAR = [
  "/products/login",
  "/products/join"
]



interface ILayoutProps {
    children: ReactNode;
  }


export default function Layout(props: ILayoutProps) {

  // 라우터가 왜 필요하지?
  const router = useRouter();

  const isHiddenHeader = HIDDEN_HEADER.includes(router.asPath);
  const isHiddenBanner = HIDDEN_BANNERS.includes(router.asPath);
  const isHiddenSidebar = HIDDEN_SIDEBAR.includes(router.asPath);

    
      return (
        <>
          
          {!isHiddenHeader && <LayoutHeader />} 
          {!isHiddenBanner && <LayoutBanner />} 
          {!isHiddenSidebar && <LayoutSidebar />} 

          <Body>{props.children}</Body>
    
        </>
      );
    }