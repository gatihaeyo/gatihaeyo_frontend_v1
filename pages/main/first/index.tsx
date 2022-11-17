import type { NextPage } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";

// Styles
import * as S from "./style";

// Images
import { JinxImg } from "../../common/image";

const FirstPage: NextPage = () => {
    return(
        <>
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
        <Link href="/users/login">
            <S.LoginBtn>로그인</S.LoginBtn>
        </Link>
        </>
    );
};

export default FirstPage;