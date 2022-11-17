import styled from "styled-components";
import Image from "next/image";

export const Page = styled.div`
    position: relative;
    width: 100%;
    height: 100vh;
    overflow: hidden;
`;

export const Back = styled.div`
    padding-left: 100px;
    padding-top: 140px;
    width: 100px;
    height: 30px;
    :hover{
        cursor: pointer;
    }
`;

export const Green = styled.div`
    position: absolute;
    left: 1340px;
    top: 59.82px;
`;

export const Yellow = styled.div`
    position: absolute;
    left: 1480px;
    top: 538.28px;
`;

export const Red = styled.div`
    position: absolute;
    left: 1656px;
    top: 623px;
`;

export const Contents = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

export const Title = styled.div`
    font: 700 normal 50px ${(props) => props.theme.fonts.kr};
    color: ${(props) => props.theme.colors.Extra.black};
    margin-top: 30px;
    margin-bottom: 74px;
`;

export const UserBox = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 30px;
`;

export const UserWrapper = styled.div`
    margin-bottom: 54px;
`;

export const SubTitle = styled.div`
    font: 300 normal 20px ${(props) => props.theme.fonts.kr};
    color: ${(props) => props.theme.colors.Extra.black};
    margin-bottom: 7px;
`;

export const Input = styled.input`
    width: 467px;
    height: 64px;
    border: 1px solid #929292;
    border-radius: 10px;
    font: 100 normal 18px ${(props) => props.theme.fonts.kr};
    color: ${(props) => props.theme.colors.Extra.black};
    padding-left: 20px;
    padding-right: 60px;
    box-sizing: border-box;
`;

export const Img = styled.span`
    position: relative;
    top: 2px;
    right: 50px;
    :hover{
        cursor: pointer;
    }
`;

export const ContentBox = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 100px;
`;

export const PageBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 11.5px;
`;

export const SignUp = styled.span`
    font: 100 normal 18px ${(props) => props.theme.fonts.kr};
    color: ${(props) => props.theme.colors.Gray.g6};
    width: 180px;
    height: 34.5px;
    text-align: center;
    border-right: 1px solid #929292;
    user-select: none;
    :hover{
        cursor: pointer;
    }
`;

export const ResetPassword = styled.span`
    font: 100 normal 18px ${(props) => props.theme.fonts.kr};
    color: ${(props) => props.theme.colors.Gray.g6};
    width: 180px;
    height: 34.5px;
    text-align: center;
    user-select: none;
    :hover{
        cursor: pointer;
    }
`;

export const BtnBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const SubmitBtn = styled.button`
    font: 500 normal 18px ${(props) => props.theme.fonts.kr};
    color: ${(props) => props.theme.colors.Extra.white};
    width: 467px;
    height: 50px;
    background-color: #FFE75F;
    border: none;
    :hover{
        cursor: pointer;
    }
`;