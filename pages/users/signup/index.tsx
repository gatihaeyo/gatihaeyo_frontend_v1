import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import Router from "next/router";
import axios from "axios";
import { useState } from "react";
import Swal from "sweetalert2";

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
    const [passwordShown, setPasswordShown] = useState(false);
    const [rePasswordShown, setRePasswordShown] = useState(false);

    const onClickPassword = () => {
        setPasswordShown(!passwordShown)
    }
    const onClickRePassword = () => {
        setRePasswordShown(!rePasswordShown)
    }


    const PasswordChk = () => {
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
            const Toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 1500,
                timerProgressBar: true,
                didOpen: (toast) => {
                    toast.addEventListener('mouseenter', Swal.stopTimer)
                    toast.addEventListener('mouseleave', Swal.resumeTimer)
                }
                })
                Toast.fire({
                icon: 'success',
                title: '회원가입이 완료되었습니다.'
            })
            Router.push("/users/login");
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
            const Toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 1500,
                timerProgressBar: true,
                didOpen: (toast) => {
                    toast.addEventListener('mouseenter', Swal.stopTimer)
                    toast.addEventListener('mouseleave', Swal.resumeTimer)
                }
                })
                Toast.fire({
                icon: 'success',
                title: '인증코드가 전송되었습니다.'
            })
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
            const Toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 1500,
                timerProgressBar: true,
                didOpen: (toast) => {
                    toast.addEventListener('mouseenter', Swal.stopTimer)
                    toast.addEventListener('mouseleave', Swal.resumeTimer)
                }
                })
                Toast.fire({
                icon: 'success',
                title: '이메일 인증이 정상적으로 완료되었습니다.'
            })
        })
        .catch(err => {
            console.log(err);
            const Toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 1500,
                timerProgressBar: true,
                didOpen: (toast) => {
                    toast.addEventListener('mouseenter', Swal.stopTimer)
                    toast.addEventListener('mouseleave', Swal.resumeTimer)
                }
                })
                Toast.fire({
                icon: 'error',
                title: '인증 코드가 올바르지 않습니다.'
            })
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
                        <S.Input type={passwordShown ? "text" : "password"} placeholder="비밀번호를 입력해주세요." value={password} onChange={(e)=>setPassword(e.target.value)} />
                        <S.Img onClick={() => onClickPassword()}>
                            <Image src={HideImg} />
                        </S.Img>
                    </S.UserWrapper>
                    <S.UserWrapper>
                        <S.SubTitle>비밀번호 재입력</S.SubTitle>
                        <S.Input type={rePasswordShown ? "text" : "password"} placeholder="비밀번호를 재입력해주세요." onChange={() => PasswordChk()} />
                        <S.Img onClick={() => onClickRePassword()}>
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