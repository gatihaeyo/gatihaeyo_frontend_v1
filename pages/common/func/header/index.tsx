import Head from "next/head";
import Image from "next/image";
import { FC } from "react";
import { useRouter } from "next/router";
import React from "react";
// Styles
import * as S from "./style";

// Images
import { LogoImg } from "../../image";
import { BellImg } from "../../image";
import { UserImg } from "../../image";

const Header: FC = () => {
  const router = useRouter();
  return (
    <>
      <S.Layout>
        <S.Header>
          <S.LogoWrapper>
            <Image src={LogoImg} onClick={() => router.push("/")} />
          </S.LogoWrapper>
          <S.CategoryStage>
            <S.Category onClick={() => router.push("/")}>Main</S.Category>
            <S.Category onClick={() => router.push("/party")}>Party</S.Category>
            <S.Category onClick={() => router.push("/myparty")}>
              Myparty
            </S.Category>
            <S.BellWrapper>
              <Image src={BellImg} />
            </S.BellWrapper>
            <S.UserIconWrapper>
              <Image src={UserImg} onClick={() => router.push("/mypage")} />
            </S.UserIconWrapper>
          </S.CategoryStage>
        </S.Header>
      </S.Layout>
    </>
  );
};

export default Header;
