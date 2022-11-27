import Head from "next/head";
import Image from "next/image";
import { FC } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

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
            <Link href="/">
              <Image src={LogoImg} />
            </Link>
          </S.LogoWrapper>
          <S.CategoryStage>
            <Link href="/">
              <S.Category>Main</S.Category>
            </Link>
            <S.Category onClick={() => router.push("/party")}>Party</S.Category>
            <Link href="/users/game/lol">
              <S.Category>MyPage</S.Category>
            </Link>
            <S.BellWrapper>
              <Image src={BellImg} />
            </S.BellWrapper>
            <S.UserIconWrapper>
              <Image src={UserImg} />
            </S.UserIconWrapper>
          </S.CategoryStage>
        </S.Header>
      </S.Layout>
    </>
  );
};

export default Header;
