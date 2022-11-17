import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

// Styles
import * as S from "./style";

// Images
import { BackImg } from "../../common/image";
import { GreenElement } from "../../common/image";
import { YellowElement } from "../../common/image";
import { RedElement } from "../../common/image";
import { HideImg } from "../../common/image";

const Login: NextPage = () => {
    return(
        <>
        <S.Page>
            <Link href="/">
                <S.Back>
                    <Image
                        src={BackImg}
                    />
                </S.Back>
            </Link>
            <S.Contents>
                <S.Title>로그인</S.Title>
                <S.UserBox>
                    <S.UserWrapper>
                        <S.SubTitle>닉네임</S.SubTitle>
                        <S.Input placeholder="닉네임을 입력해주세요." />
                    </S.UserWrapper>
                    <S.UserWrapper>
                        <S.SubTitle>비밀번호</S.SubTitle>
                        <S.Input type="password" placeholder="비밀번호를 입력해주세요." />
                        <S.Img>
                            <Image src={HideImg} />
                        </S.Img>
                    </S.UserWrapper>
                </S.UserBox>
                <S.ContentBox>
                    <S.PageBox>
                        <Link href="/users/signup">
                            <S.SignUp>회원가입</S.SignUp>
                        </Link>
                        <S.ResetPassword>비밀번호 재설정</S.ResetPassword>
                    </S.PageBox>
                    <S.BtnBox>
                        <S.SubmitBtn>완료</S.SubmitBtn>
                    </S.BtnBox>
                </S.ContentBox>
            </S.Contents>
            <S.Green>
                <Image
                    src={GreenElement}
                />
            </S.Green>
            <S.Yellow>
                <Image
                    src={YellowElement}
                />
            </S.Yellow>
            <S.Red>
                <Image
                    src={RedElement}
                />
            </S.Red>
        </S.Page>
        </>
    );
};

export default Login;