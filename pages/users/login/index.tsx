import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import Router from "next/router";
import { useState } from "react";
import axios, { AxiosResponse } from "axios";
import Swal from "sweetalert2";

// Styles
import * as S from "./style";

// Images
import { BackImg } from "../../common/image";
import { GreenElement } from "../../common/image";
import { YellowElement } from "../../common/image";
import { RedElement } from "../../common/image";
import { HideImg } from "../../common/image";

const Login: NextPage = () => {
  const [nickname, setNickname] = useState("");
  const [password, setPassword] = useState("");

  async function Login() {
    axios
      .post("http://43.200.33.226:8080/users/login", {
        nickname: nickname,
        password: password,
      })
      .then((res) => {
        console.log(res);
        sessionStorage.setItem("accessToken", res.data.access_token);
        const Toast = Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 1500,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener("mouseenter", Swal.stopTimer);
            toast.addEventListener("mouseleave", Swal.resumeTimer);
          },
        });
        Toast.fire({
          icon: "success",
          title: "로그인에 성공하였습니다.",
        });
        Router.push("/");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <>
      <S.Page>
        <Link href="/">
          <S.Back>
            <Image src={BackImg} />
          </S.Back>
        </Link>
        <S.Contents>
          <S.Title>로그인</S.Title>
          <S.UserBox>
            <S.UserWrapper>
              <S.SubTitle>닉네임</S.SubTitle>
              <S.Input
                placeholder="닉네임을 입력해주세요."
                value={nickname}
                onChange={(e) => setNickname(e.target.value)}
              />
            </S.UserWrapper>
            <S.UserWrapper>
              <S.SubTitle>비밀번호</S.SubTitle>
              <S.Input
                type="password"
                placeholder="비밀번호를 입력해주세요."
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
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
              <Link href="/users/change/password">
                <S.ResetPassword>비밀번호 재설정</S.ResetPassword>
              </Link>
            </S.PageBox>
            <S.BtnBox>
              <S.SubmitBtn onClick={() => Login()}>완료</S.SubmitBtn>
            </S.BtnBox>
          </S.ContentBox>
        </S.Contents>
        <S.Green>
          <Image src={GreenElement} />
        </S.Green>
        <S.Yellow>
          <Image src={YellowElement} />
        </S.Yellow>
        <S.Red>
          <Image src={RedElement} />
        </S.Red>
      </S.Page>
    </>
  );
};

export default Login;
