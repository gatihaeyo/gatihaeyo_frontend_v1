import type { NextPage } from "next";
import Image from "next/image";

// Styles
import * as S from "./style";

// Images
import { FireImg } from "../../common/image";
import { ChatImg } from "../../common/image";
import { PunchImg } from "../../common/image";
import { GrayCircle } from "../../common/image";

const SecondPage: NextPage = () => {
    return(
        <>
        <S.PageWrapper>
            <S.ImageWrapper>
                <Image
                    src={FireImg}
                />
                
            </S.ImageWrapper>
            <S.CircleWrapper>
                <Image
                    src={GrayCircle}
                />
            </S.CircleWrapper>
            <S.CircleWrapper>
                <Image
                    src={GrayCircle}
                />
            </S.CircleWrapper>
            <S.CircleWrapper>
                <Image
                    src={GrayCircle}
                />
            </S.CircleWrapper>
            <S.ImageWrapper>
                <Image
                    src={ChatImg}
                />
            </S.ImageWrapper>
            <S.CircleWrapper>
                <Image
                    src={GrayCircle}
                />
            </S.CircleWrapper>
            <S.CircleWrapper>
                <Image
                    src={GrayCircle}
                />
            </S.CircleWrapper>
            <S.CircleWrapper>
                <Image
                    src={GrayCircle}
                />
            </S.CircleWrapper>
            <S.ImageWrapper>
                <Image
                    src={PunchImg}
                />
            </S.ImageWrapper>
        </S.PageWrapper>
        </>
    );
};

export default SecondPage;