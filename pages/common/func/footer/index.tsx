import Head from "next/head";
import Image from "next/image";
import { FC } from "react";

// Styles
import * as S from "./style";

// Images
import { LogoWhite } from "../../image";

const Footer: FC = () => {
  return (
    <>
      <S.Footer>
        <S.LogoWrapper>
          <Image
            src={LogoWhite}
          />
        </S.LogoWrapper>
        <S.ContentWrapper>
          <S.Contents>문의처</S.Contents>
          <S.Text>010-6865-8208</S.Text>
          <S.Text>jingeon27@gmail.com</S.Text>
        </S.ContentWrapper>
        <S.ContentWrapper>
          <S.Contents>About</S.Contents>
          <S.SortText>main</S.SortText>
          <S.SortText>recruit</S.SortText>
          <S.SortText>board</S.SortText>
        </S.ContentWrapper>
        <S.ContentWrapper>
          <S.Contents>Leader</S.Contents>
          <S.SortText>조경현</S.SortText>
        </S.ContentWrapper>
        <S.ContentWrapper>
          <S.Contents>Member</S.Contents>
          <S.SortText>김진건</S.SortText>
          <S.SortText>박상민</S.SortText>
          <S.SortText>박세연</S.SortText>
        </S.ContentWrapper>
      </S.Footer>
    </>
  );
};

export default Footer;
