import { css } from "@emotion/react";

export const globalStyles = css`
  * {
    margin: 0px;
    box-sizing: border-box;
    text-decoration: none;

  }

  a {
    text-decoration: none;
    :visited{
      color: black;
      text-decoration: none;
    }
    :link{
      color: black;
      text-decoration: none;
    }
  }
// 왜 적용이 안됨? ^^

  
`;

