
import { Global } from "@emotion/react";
import "antd/dist/antd.css";
import { AppProps } from "next/app";
import { globalStyles } from "../src/commons/styles/globalStyles";
import Layout from "../src/components/commons/layout";
import { RecoilRoot } from "recoil";

import ApolloSetting from "../src/components/commons/apollo";
import useImagePreload from "../src/components/commons/hooks/useImagePreload";



function MyApp({ Component, pageProps }: AppProps) {
  useImagePreload();

  return (
    <>

      <RecoilRoot>
        <ApolloSetting>
          <Global styles={globalStyles} />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ApolloSetting>
      </RecoilRoot>
    </>
  );
}

export default MyApp;
