import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";

// Styles
import * as S from "./style";

// Images
import { BackImg } from "../../../common/image";
import { BigLogo } from "../../../common/image";
import { HideImg } from "../../../common/image";

const Password: NextPage = () => {
    return(
        <>
        <S.Page>
            <Link href="/users/login">
                <S.Back>
                    <Image src={BackImg} />
                </S.Back>
            </Link>
            <S.ContentBox>
                <S.Logo>
                    <Image src={BigLogo} />
                </S.Logo>
                <S.Ex>본인 인증을 해주세요.</S.Ex>
                <S.UserWrapper>
                    <S.SubTitle>닉네임</S.SubTitle>
                    <S.InputDiv>
                    <S.Input type={"text"} placeholder="닉네임을 입력해주세요." />
                    </S.InputDiv>
                </S.UserWrapper>
                <S.UserWrapper>
                    <S.SubTitle>비밀번호</S.SubTitle>
                    <S.InputDiv>
                    <S.Input type={"password"} placeholder="비밀번호를 입력해주세요." />
                    <S.Img>
                        <Image src={HideImg} />
                    </S.Img>
                    </S.InputDiv>
                </S.UserWrapper>
                <S.BtnBox>
                    <S.SubmitBtn>완료</S.SubmitBtn>
                </S.BtnBox>
            </S.ContentBox>
        </S.Page>
        </>
    );
};

export default Password;