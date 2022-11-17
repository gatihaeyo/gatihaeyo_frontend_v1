import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";

// Styles
import * as S from "./style";

// Images
import { SignUpImg } from "../../common/image";
import { BackImg } from "../../common/image";
import { HideImg } from "../../common/image";

const SignUp: NextPage = () => {
    return(
        <>
        <S.Page>
            <Link href="/users/login">
                <S.Back>
                    <Image
                        src={BackImg}
                    />
                </S.Back>
            </Link>
            <S.ContentsWrapper>
                <S.Contents>
                    <S.Title>회원가입</S.Title>
                    <S.UserWrapper>
                        <S.SubTitle>닉네임</S.SubTitle>
                        <S.Input type={"text"} placeholder="닉네임을 입력해주세요." maxLength={16} />
                        <S.CheckBtn>확인</S.CheckBtn>
                    </S.UserWrapper>
                    <S.UserWrapper>
                        <S.SubTitle>이메일</S.SubTitle>
                        <S.Input type={"text"} placeholder="이메일을 입력해주세요." />
                        <S.CheckBtn>확인</S.CheckBtn>
                    </S.UserWrapper>
                    <S.UserWrapper>
                        <S.SubTitle>인증코드</S.SubTitle>
                        <S.Input type={"text"} placeholder="인증번호 6자리를 입력해주세요." maxLength={6} />
                        <S.CheckBtn>확인</S.CheckBtn>
                    </S.UserWrapper>
                    <S.UserWrapper>
                        <S.SubTitle>비밀번호</S.SubTitle>
                        <S.Input type={"password"} placeholder="비밀번호를 입력해주세요." />
                        <S.Img>
                            <Image src={HideImg} />
                        </S.Img>
                    </S.UserWrapper>
                    <S.UserWrapper>
                        <S.SubTitle>비밀번호 재입력</S.SubTitle>
                        <S.Input type={"password"} placeholder="비밀번호를 재입력해주세요." />
                        <S.Img>
                            <Image src={HideImg} />
                        </S.Img>
                    </S.UserWrapper>
                    <S.SubmitBtn>완료</S.SubmitBtn>
                </S.Contents>
                <S.ImageWrapper>
                    <Image src={SignUpImg} />
                </S.ImageWrapper>
            </S.ContentsWrapper>
        </S.Page>
        </>
    );
};

export default SignUp;