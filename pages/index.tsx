import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

import SecondPage from "./main/second";

// Components
import Header from "./common/func/header";

// Styles
import * as S from "./style";

// Images
import { JinxImg } from "./common/image";

const Home: NextPage = () => {
  return (
    <>
      <S.Layout>
        {/*<Loading />*/}
        <Header />
        <S.Page>
          <S.TitleWrapper>
            <S.Title1>게임 같이할 </S.Title1>
            <S.Title2>친구 </S.Title2>
            <S.Title3>필요한가요?</S.Title3>
          </S.TitleWrapper>
          <S.ImageWrapper>
            <S.ImageSubWrapper>
              <Image
                src={JinxImg}
              />
            </S.ImageSubWrapper>
          </S.ImageWrapper>
        </S.Page>
        <S.LoginText>로그인 후 이용해보세요!</S.LoginText>
        <S.LoginBtn>로그인</S.LoginBtn>
        <S.Contour />
        <SecondPage />
        <S.Contour />
      </S.Layout>
    </>
  );
};

export default Home;
