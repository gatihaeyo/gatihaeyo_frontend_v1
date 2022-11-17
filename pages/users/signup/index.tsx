import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";

// Styles
import * as S from "./style";

// Images
import { SignUpImg } from "../../common/image";
import { BackImg } from "../../common/image";

const SignUp: NextPage = () => {
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
            <S.ContentsWrapper>
                <S.Contents>
                    <S.Title>회원가입</S.Title>
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