import type { NextPage } from "next";
import Link from "next/link";
import Router from "next/router";
import axios from "axios";
import Header from "../../../common/func/header";

// Styles
import * as S from "./style";

const LoL: NextPage = () => {
    return(
        <>
        <S.Page>
            <Header />
            <S.ContentBox>
                <S.Title>게임 계정 등록</S.Title>
                <S.Wrapper>
                    <S.SubTitle>등록 게임</S.SubTitle>
                    <S.InputDiv>
                    <S.Input type={"text"} placeholder="등록할 게임을 선택하세요." />
                    </S.InputDiv>
                </S.Wrapper>
                <S.Wrapper>
                    <S.SubTitle>닉네임 인증</S.SubTitle>
                    <S.InputDiv>
                        <S.Input type={"text"} placeholder="게임 내 닉네임을 입력하세요." />
                        <S.CheckBtn>인증요청</S.CheckBtn>
                    </S.InputDiv>
                </S.Wrapper>
                <S.BtnBox>
                    <S.SubmitBtn>완료</S.SubmitBtn>
                </S.BtnBox>
            </S.ContentBox>
        </S.Page>
        </>
    );
};

export default LoL;