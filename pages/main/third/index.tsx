import { NextPage } from "next";
import Image from "next/image";

// Styles
import * as S from "./style";

// Images
import { Oval } from "../../common/image";
import { Rectangle } from "../../common/image";
import { Gamers } from "../../common/image";

const ThirdPage: NextPage = () => {
    return(
        <>
        <S.Page>
            <S.TitleWrapper>
                <S.Title1>잡담</S.Title1>
                <S.Title2>게시판</S.Title2>
            </S.TitleWrapper>
            <S.ImageWrapper>
                <Image
                    src={Gamers}
                />
            </S.ImageWrapper>
            <S.ContentWrapper>
                <S.ContentTitle>관심분야 소통</S.ContentTitle>
                <S.Content>게시판을 이용하여 관심분야에 맞는 유저들과 정보나 일상 등을 주고 받으며 공유할 수 있습니다.</S.Content>
            </S.ContentWrapper>
            <S.ElementWrapper>
                <S.Oval
                    src={Oval}
                />
            </S.ElementWrapper>
        </S.Page>
        </>
    );
};

export default ThirdPage;