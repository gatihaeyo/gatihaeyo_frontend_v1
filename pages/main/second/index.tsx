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
        <S.ImageWrapper>
            <S.ImageSubWrapper>
                <Image
                    src={FireImg}
                />
            </S.ImageSubWrapper>
            
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
            <S.ImageSubWrapper>
                <Image
                    src={ChatImg}
                />
            </S.ImageSubWrapper>
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
            <S.ImageSubWrapper>
                <Image
                    src={PunchImg}
                />
            </S.ImageSubWrapper>
        </S.ImageWrapper>
        <S.TextWrapper>
            <S.TitleWrapper>
                <S.Title>파티 모집</S.Title>
                <S.Text>게임 파티원 모집과 스트리밍 사이트 파티 모집을 지원하고 있습니다.</S.Text>
            </S.TitleWrapper>
            <S.TitleWrapper>
                <S.Title>전적보기</S.Title>
                <S.Text>전적보기 기능을 통해 게임 파티 시 파티원들의 게임 전적을 볼 수 있습니다.</S.Text>
            </S.TitleWrapper>
            <S.TitleWrapper>
                <S.Title>채팅</S.Title>
                <S.Text>채팅을 통해 파티원들과 채팅을 사용하여 소통할 수 있습니다.</S.Text>
            </S.TitleWrapper>
        </S.TextWrapper>
        </>
    );
};

export default SecondPage;