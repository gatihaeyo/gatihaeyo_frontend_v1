import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import { useState } from "react";

// Styles
import * as S from "./style";

// Images
import { SignUpImg } from "../../common/image";
import { BackImg } from "../../common/image";
import { HideImg } from "../../common/image";

const SignUp: NextPage = () => {
    const [email, setEmail] = useState('');
    const [nickname, setNickname] = useState('');
    const [code, setCode] = useState('');
    const [password, setPassword] = useState('');
    const [passwordCheck, setPasswordCheck] = useState('')
    const [passwordError, setPasswordError] = useState(false)

    const onChangePasswordChk = () => {
        if(password !== passwordCheck){
            return setPasswordError(true);
        }
    }

    async function SignUp() {
        axios.post('http://43.200.33.226:8080/users/signup', {
            nickname: nickname,
            email: email,
            code: code,
            password: password,
        })
        .then(res => {
            console.log(res);
        })
        .catch(err => {
            console.log(err);
        })
    }

    async function SendCode() {
        axios.post('http://43.200.33.226:8080/emails', {
            email: email
        })
        .then(res => {
            console.log(res);
        })
        .catch(err => {
            console.log(err);
        })
    }

    async function CodeChk() {
        axios.post('http://43.200.33.226:8080/emails/verified', {
            email: email,
            code: code,
        })
        .then(res => {
            console.log(res);
        })
        .catch(err => {
            console.log(err);
        })
    }

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
                        <S.Input type={"text"} placeholder="닉네임을 입력해주세요." value={nickname} onChange={(e)=>setNickname(e.target.value)} />
                        <S.CheckBtn>확인</S.CheckBtn>
                    </S.UserWrapper>
                    <S.UserWrapper>
                        <S.SubTitle>이메일</S.SubTitle>
                        <S.Input type={"text"} placeholder="이메일을 입력해주세요." value={email} onChange={(e)=>setEmail(e.target.value)} />
                        <S.CheckBtn onClick={() => SendCode()}>확인</S.CheckBtn>
                    </S.UserWrapper>
                    <S.UserWrapper>
                        <S.SubTitle>인증코드</S.SubTitle>
                        <S.Input type={"text"} placeholder="인증번호 6자리를 입력해주세요." value={code} onChange={(e)=>setCode(e.target.value)} maxLength={6} />
                        <S.CheckBtn onClick={() => CodeChk()}>확인</S.CheckBtn>
                    </S.UserWrapper>
                    <S.UserWrapper>
                        <S.SubTitle>비밀번호</S.SubTitle>
                        <S.Input type={"password"} placeholder="비밀번호를 입력해주세요." value={password} onChange={(e)=>setPassword(e.target.value)} />
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
                    <S.SubmitBtn onClick={() => SignUp()}>완료</S.SubmitBtn>
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