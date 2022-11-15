import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

// Pages
import FirstPage from "./main/first";
import SecondPage from "./main/second";
import ThirdPage from "./main/third";

// Components
import Header from "./common/func/header";
import Footer from "./common/func/footer";

// Styles
import * as S from "./style";

const Home: NextPage = () => {
  return (
    <>
      <S.Layout>
        {/*<Loading />*/}
        <Header />
        <FirstPage />
        <S.Contour />
        <SecondPage />
        <S.Contour />
        <ThirdPage />
        <Footer />
      </S.Layout>
    </>
  );
};

export default Home;
